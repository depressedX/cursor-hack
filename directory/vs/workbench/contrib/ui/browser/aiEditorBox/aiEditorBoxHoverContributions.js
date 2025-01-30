import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/browser/editorExtensions.js';
import '../../../../../base/common/lazy.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/config/editorOptions.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/configuration/common/configuration.js';
import './aiEditorBoxHoverWidget.js';
define(
			de[3189],
			he([1, 0, 46, 149, 3, 38, 71, 69, 8, 5, 90, 45, 10, 3188]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorExtensions*/,
 i /*lazy*/,
 w /*lifecycle*/,
 E /*editorOptions*/,
 C /*editorContextKeys*/,
 d /*languageFeatures*/,
 m /*contextkey*/,
 r /*instantiation*/,
 u /*markers*/,
 a /*reactiveStorageService*/,
 h /*configuration*/,
 c /*aiEditorBoxHoverWidget*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eAc = void 0);
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.aiEditorHoverController";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = y),
							(this.m = $),
							(this.f = !1),
							(this.g = !1),
							(this.a = o),
							(this.c = C.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								o.contextKeyService,
							)),
							this.D(this.a.onDidChangeModel(() => this.r())),
							this.D(this.a.onDidChangeModelLanguage(() => this.r())),
							this.D(this.a.onDidBlurEditorText(() => this.r())),
							this.D(this.a.onDidBlurEditorWidget(() => this.r())),
							this.D(this.a.onDidChangeCursorPosition(() => this.r())),
							this.D(
								this.a.onMouseDown(() => {
									(this.g = !0), this.r();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.g = !1), this.r();
								}),
							),
							(this.b = new i.$Y(() => {
								const S = this.D(s.createInstance(c.$dAc, this.a));
								return this.D(S.onClick((I) => {})), S;
							})),
							this.D(
								b.onDidChangeContext((S) => {
									S.affectsSome(
										new Set([
											C.EditorContextKeys.hasActivelyGeneratingDiff.key,
										]),
									) &&
										this.c.get() &&
										this.b.value.hide();
								}),
							),
							(this.reactiveStorageRoot = this.D(this.j.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.j.applicationUserPersistentStorage.hideChatEditTooltip,
								],
								onChange: () => {
									this.r();
								},
							});
						const v = () => {
							const S = this.a.getOptions(),
								I = S.get(E.EditorOption.wordWrapOverride2),
								T =
									I === "inherit" ? S.get(E.EditorOption.wordWrapOverride1) : I,
								k =
									(T === "inherit" ? S.get(E.EditorOption.wordWrap) : T) !==
									"off";
							this.b.value.isWordWrap = k;
						};
						if (
							(v(),
							this.D(
								this.a.onDidChangeConfiguration((S) => {
									v();
								}),
							),
							this.r(),
							!o.shouldShowHover)
						) {
							this.f = !0;
							return;
						}
					}
					n() {
						if (!this.a.hasModel()) return;
						const o = this.a.getModel(),
							f = this.a.getSelection();
						if (f.isEmpty()) {
							const { lineNumber: b, column: s } = f.getPosition(),
								l = o.getLineContent(b);
							if (l.length === 0) return;
							if (s === 1) {
								if (/\s/.test(l[0])) return;
							} else if (s === o.getLineMaxColumn(b)) {
								if (/\s/.test(l[l.length - 1])) return;
							} else if (/\s/.test(l[s - 2]) && /\s/.test(l[s - 1])) return;
						}
						return f;
					}
					q(o) {
						return o.startLineNumber !== o.endLineNumber;
					}
					r() {
						if (!this.a.shouldShowHover || this.f) return;
						const o = this.a.getModel();
						if (o?.uri.scheme !== "aiEditorBox-anysphere") {
							this.b.value.hide();
							return;
						}
						if (o && !this.a.getOption(E.EditorOption.readOnly)) {
							const f = this.n();
							!this.g && f ? this.b.value.update() : this.b.value.hide();
						}
					}
				};
				(e.$eAc = g),
					(e.$eAc =
						g =
						n =
							Ne(
								[
									j(1, u.$aM),
									j(2, m.$6j),
									j(3, r.$Li),
									j(4, d.$k3),
									j(5, a.$0zb),
									j(6, h.$gj),
								],
								g,
							)),
					(0, t.$qtb)(g.ID, g, t.EditorContributionInstantiation.Eventually);
			},
		),
		