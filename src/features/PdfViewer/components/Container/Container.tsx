import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Document } from 'react-pdf';
import { OnDocumentLoadSuccess } from 'react-pdf/dist/cjs/shared/types';
import { useSearchParams } from 'react-router-dom';

import ThumbnailsIcon from '#/assets/thumbnails.svg?react';
import { useGtmEvent } from '#/gtm/gtm-provider';
import { TAB_PARAM } from '#/hooks/useTabs/useTabs';
import Icon from '#/ui/Icon';
import Select from '#/ui/Select';
import { SelectOption } from '#/ui/Select/Select';
import { downloadFile } from '#/utils/downloadPdf';
import { scrollToElement } from '#/utils/scrollToElement';

import { usePdfViewerContext } from '../../context/usePdfViewerContext';
import { PdfData } from '../../models/files';
import DocumentThumbnails from '../DocumentThumbnails';
import EditModeHint from '../EditModeHint';
import LoadingPage from '../LoadingPage';
import PageCounter from '../PageCounter';
import PageWithObserver from '../PageWithObserver';
import ZoomControl from '../ZoomControl';
import cls from './style.module.css';

type Props = {
  fileOptions: SelectOption<PdfData>[];
  enableContextMenu?: boolean;
};

const DEFAULT_PAGE_WIDTH = 669;
const WITH_THUMBNAILS_PAGE_WIDTH = 562;

export const Container: FC<Props> = ({ fileOptions, enableContextMenu = false }) => {
  const gtmEvent = useGtmEvent();
  const [params] = useSearchParams();
  const {
    setCurrentFile,
    currentFile,
    pageRefs,
    currentPage,
    setCurrentPage,
    zoom,
    setZoom,
    editMode,
    setEditMode,
    setCurrentFileProxy,
    selectionMode,
    thumbnailsOpen,
    setThumbnailsOpen,
    currentFileProxy,
  } = usePdfViewerContext();

  const [numPages, setNumPages] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onDocumentLoadSuccess: OnDocumentLoadSuccess = (pdfProxy) => {
    setNumPages(pdfProxy.numPages);
    setCurrentFileProxy(pdfProxy);
  };

  const setPageVisibility = useCallback((pageNumber: number, isIntersecting: boolean) => {
    if (isIntersecting) {
      setCurrentPage(pageNumber);
    }
  }, []);

  const scrollToPage = (page: number) => {
    scrollToElement(pageRefs?.current?.[page]);
  };

  const onChangePage = (page: number) => {
    setCurrentPage(page);
    scrollToPage(page);
  };

  useEffect(() => {
    // ideally initial document should be prefetched and set while user is on step one
    if (!currentFile && fileOptions.length) {
      setCurrentFile(fileOptions[0]);
    }
  }, [currentFile, fileOptions]);

  const toggleTumbnails = () => {
    setThumbnailsOpen((prev) => !prev);
  };

  const downloadDocument = async () => {
    if (currentFile && currentFileProxy) {
      downloadFile(await currentFileProxy?.saveDocument(), currentFile.label);
    }
  };

  return (
    <div
      className={cls.container}
      ref={containerRef}
      onContextMenu={!enableContextMenu ? (e) => e.preventDefault() : undefined}
    >
      <div className={cls.headerContainer}>
        <div className={cls.header}>
          <div className={cls.fileControls}>
            <Icon className={cls.thumbnailsBtn} onClick={toggleTumbnails}>
              <ThumbnailsIcon />
            </Icon>
            <Select
              options={fileOptions}
              value={currentFile}
              onMenuOpen={() => {
                setEditMode(false);
              }}
              onChange={(o) => {
                setCurrentFile(o);
                setCurrentPage(1);
                setZoom(1);
                gtmEvent({
                  action_type: 'click',
                  action_type_property: 'apply',
                  widget_type: 'file_selector',
                  widget_item_name: o.label,
                  widget_prop: params.get(TAB_PARAM) ?? undefined,
                });
              }}
            />
          </div>

          <div className={cls.displayControls}>
            <ZoomControl currentZoom={zoom} setZoom={setZoom} minZoom={1} />

            {numPages && (
              <PageCounter
                currentPage={currentPage}
                onChangePage={onChangePage}
                totalPages={numPages}
              />
            )}
            <button
              onClick={downloadDocument}
              className={cls.download}
              disabled={!(currentFile && currentFileProxy)}
            >
              Download
            </button>
          </div>
        </div>
        <EditModeHint enabledTypes={['rect']} showTypeSelector={false} />
      </div>
      <div className={cls.docWithThumbnails}>
        {thumbnailsOpen && <DocumentThumbnails className={cls.thumbnailContainer} />}
        <div className={cls.scrollableWrapper}>
          <ScrollContainer vertical={false} buttons={[2]}>
            <Document
              file={currentFile?.value?.file}
              loading={<LoadingPage />}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (_, index) => {
                const pageNum = index + 1;
                return (
                  <PageWithObserver
                    key={pageNum}
                    shouldDisableSelect={editMode && selectionMode === 'rect'}
                    pageNumber={pageNum}
                    width={thumbnailsOpen ? WITH_THUMBNAILS_PAGE_WIDTH : DEFAULT_PAGE_WIDTH}
                    inputRef={(ref) => {
                      if (pageRefs && pageRefs.current) {
                        pageRefs.current[pageNum] = ref;
                      }
                    }}
                    scale={zoom}
                    setPageVisibility={setPageVisibility}
                  />
                );
              })}
            </Document>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};
