import '../../../../require.js';
import '../../../../exports.js';
import '../../contrib/notebook/common/notebookCommon.js';
import '../../contrib/notebook/common/notebookExecutionService.js';
define(de[1027], he([1, 0, 70, 611]), function (ce /*require*/,
 e /*exports*/,
 t /*notebookCommon*/,
 i /*notebookExecutionService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NotebookDto = void 0),
				(t = mt(t));
			var w;
			(function (E) {
				function C(f) {
					return { mime: f.mime, valueBytes: f.data };
				}
				E.toNotebookOutputItemDto = C;
				function d(f) {
					return {
						outputId: f.outputId,
						metadata: f.metadata,
						items: f.outputs.map(C),
					};
				}
				E.toNotebookOutputDto = d;
				function m(f) {
					return {
						cellKind: f.cellKind,
						language: f.language,
						mime: f.mime,
						source: f.source,
						internalMetadata: f.internalMetadata,
						metadata: f.metadata,
						outputs: f.outputs.map(d),
					};
				}
				E.toNotebookCellDataDto = m;
				function r(f) {
					return { metadata: f.metadata, cells: f.cells.map(m) };
				}
				E.toNotebookDataDto = r;
				function u(f) {
					return { mime: f.mime, data: f.valueBytes };
				}
				E.fromNotebookOutputItemDto = u;
				function a(f) {
					return {
						outputId: f.outputId,
						metadata: f.metadata,
						outputs: f.items.map(u),
					};
				}
				E.fromNotebookOutputDto = a;
				function h(f) {
					return {
						cellKind: f.cellKind,
						language: f.language,
						mime: f.mime,
						source: f.source,
						outputs: f.outputs.map(a),
						metadata: f.metadata,
						internalMetadata: f.internalMetadata,
					};
				}
				E.fromNotebookCellDataDto = h;
				function c(f) {
					return { metadata: f.metadata, cells: f.cells.map(h) };
				}
				E.fromNotebookDataDto = c;
				function n(f) {
					return {
						handle: f.handle,
						uri: f.uri,
						source: f.textBuffer.getLinesContent(),
						eol: f.textBuffer.getEOL(),
						language: f.language,
						cellKind: f.cellKind,
						outputs: f.outputs.map(d),
						metadata: f.metadata,
						internalMetadata: f.internalMetadata,
					};
				}
				E.toNotebookCellDto = n;
				function g(f) {
					return f.editType === i.CellExecutionUpdateType.Output
						? {
								editType: f.editType,
								cellHandle: f.cellHandle,
								append: f.append,
								outputs: f.outputs.map(a),
							}
						: f.editType === i.CellExecutionUpdateType.OutputItems
							? {
									editType: f.editType,
									append: f.append,
									outputId: f.outputId,
									items: f.items.map(u),
								}
							: f;
				}
				E.fromCellExecuteUpdateDto = g;
				function p(f) {
					return f;
				}
				E.fromCellExecuteCompleteDto = p;
				function o(f) {
					return f.editType === t.CellEditType.Replace
						? {
								editType: f.editType,
								index: f.index,
								count: f.count,
								cells: f.cells.map(h),
							}
						: f;
				}
				E.fromCellEditOperationDto = o;
			})(w || (e.NotebookDto = w = {}));
		}),
		