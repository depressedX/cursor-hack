import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor/editorInput.js';
import './composer.js';
import './composerDataService.js';
import './renderComposerPane.js';
import './composerViews.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[1076],
			he([
				1, 0, 14, 3, 23, 9, 5, 21, 32, 35, 217, 223, 219, 209, 1075, 506, 45,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*lifecycle*/,
 w /*network*/,
 E /*uri*/,
 C /*instantiation*/,
 d /*storage*/,
 m /*telemetry*/,
 r /*themeService*/,
 u /*editorPane*/,
 a /*editorInput*/,
 h /*composer*/,
 c /*composerDataService*/,
 n /*renderComposerPane*/,
 g /*composerViews*/,
 p /*reactiveStorageService*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerEditorContribution =
						e.ComposerEditor =
						e.ComposerEditorInput =
						e.ComposerEditorInputSerializer =
						e.COMPOSER_EDITOR_ID =
							void 0),
					(e.COMPOSER_EDITOR_ID = "workbench.editor.composer");
				let f = class {
					constructor($) {
						this.composerDataService = $;
					}
					canSerialize($) {
						return $ instanceof b;
					}
					serialize($) {
						if ($ instanceof b) return JSON.stringify($.toJSON());
					}
					deserialize($, v) {
						const { composerId: S, forceMode: I } = JSON.parse(v);
						if (S) return b.create(S, I);
					}
				};
				(e.ComposerEditorInputSerializer = f),
					(e.ComposerEditorInputSerializer = f =
						Ne([j(0, c.IComposerDataService)], f));
				class b extends a.$LO {
					static {
						this.ID = "workbench.editor.composer.input";
					}
					constructor($, v) {
						super(), (this.composerId = $), (this.forceMode = v);
					}
					get typeId() {
						return b.ID;
					}
					get resource() {
						return E.URI.from({
							scheme: w.Schemas.composer,
							path: this.composerId,
						});
					}
					matches($) {
						return super.matches($)
							? !0
							: $ instanceof b && $.forceMode === this.forceMode;
					}
					getName() {
						return this.forceMode === "chat" ? "Chat" : "Composer";
					}
					getIcon() {
						return this.forceMode === "chat" ? t.$ak.comment : t.$ak.notebook;
					}
					getForceMode() {
						return this.forceMode;
					}
					toJSON() {
						return { composerId: this.composerId, forceMode: this.forceMode };
					}
					static create($, v) {
						return new b($, v);
					}
				}
				e.ComposerEditorInput = b;
				let s = class extends u.$JEb {
					static {
						o = this;
					}
					static {
						this.ID = e.COMPOSER_EDITOR_ID;
					}
					constructor($, v, S, I, T, P, k, L, D) {
						super(o.ID, $, v, S, I),
							(this._instantiationService = T),
							(this.composerService = P),
							(this.composerDataService = k),
							(this.composerViewsService = L),
							(this.reactiveStorageService = D),
							this.D(
								this.reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [
										() => {
											const M = this.W?.resource?.path;
											if (M)
												return this.composerViewsService.getComposerLocation(M);
										},
									],
									onChange: ({ deps: M, prevDeps: N }) => {
										const A = M[0],
											R = N?.[0];
										A && A !== R && this.dispose();
									},
								}),
							);
					}
					Y($) {}
					focus() {
						this.W &&
							this.composerService
								.getInputDelegate(this.W.resource.path)
								.focus();
					}
					async setInput($, v, S, I) {
						await super.setInput($, { ...v, pinned: !0 }, S, I);
						const T = $.resource.path,
							P = this.composerDataService.getComposerForceMode(T);
						this._solidDisposable && this._solidDisposable.dispose();
						const k = this.getContainer();
						k &&
							(this._solidDisposable = (0, n.renderComposerPane)(
								k,
								this._instantiationService,
								"editor",
								P,
							));
					}
					layout($) {}
					dispose() {
						this._solidDisposable?.dispose(), super.dispose();
					}
				};
				(e.ComposerEditor = s),
					(e.ComposerEditor =
						s =
						o =
							Ne(
								[
									j(1, m.$km),
									j(2, r.$iP),
									j(3, d.$lq),
									j(4, C.$Li),
									j(5, h.IComposerService),
									j(6, c.IComposerDataService),
									j(7, g.IComposerViewsService),
									j(8, p.$0zb),
								],
								s,
							));
				class l extends i.$1c {
					static {
						this.ID = "editor.contrib.composer";
					}
					constructor($) {
						super(), (this.editor = $);
					}
				}
				e.ComposerEditorContribution = l;
			},
		)
