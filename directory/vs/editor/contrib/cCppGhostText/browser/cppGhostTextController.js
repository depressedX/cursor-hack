import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorExtensions.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import './cppGhostTextWidget.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/constants.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
define(
			de[1345],
			he([1, 0, 149, 3, 46, 17, 71, 3936, 8, 5, 45, 58, 134]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lazy*/,
 i /*lifecycle*/,
 w /*editorExtensions*/,
 E /*range*/,
 C /*editorContextKeys*/,
 d /*cppGhostTextWidget*/,
 m /*contextkey*/,
 r /*instantiation*/,
 u /*reactiveStorageService*/,
 a /*constants*/,
 h /*reactiveStorageTypes*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jlc = void 0);
				class n extends w.$itb {
					constructor() {
						super({
							id: a.$IX,
							label: "Update Ghost Text",
							alias: "Update Ghost Text",
							precondition: void 0,
						});
					}
					run(o, f, b) {
						const s = g.get(f);
						s && s.update();
					}
				}
				(0, w.$ntb)(n);
				let g = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "editor.contrib.ghosttextController";
					}
					static get(o) {
						return o.getContribution(c.ID);
					}
					constructor(o, f, b, s) {
						super(),
							(this.q = b),
							(this.r = s),
							(this.g = !1),
							(this.h = !1),
							(this.m = !1),
							(this.n = !1),
							(this.a = o),
							(this.f = C.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								o.contextKeyService,
							)),
							this.D(
								this.a.onDidChangeModel(() => {
									this.update();
								}),
							),
							this.D(this.a.onDidChangeModelLanguage(() => this.update())),
							this.D(this.a.onDidChangeCursorPosition(() => this.update())),
							this.D(
								this.a.onMouseDown(() => {
									(this.h = !0), this.update();
								}),
							),
							this.D(
								this.a.onMouseUp(() => {
									(this.h = !1), this.update();
								}),
							),
							(this.b = new t.$Y(() =>
								this.D(b.createInstance(d.$Hlc, this.a)),
							)),
							(this.c = []),
							this.D(
								f.onDidChangeContext((l) => {
									l.affectsSome(
										new Set([
											C.EditorContextKeys.hasActivelyGeneratingDiff.key,
										]),
									) && this.f.get();
								}),
							),
							(this.reactiveStorageRoot = this.D(this.r.createScoped(this))),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.r.applicationUserPersistentStorage.hideChatEditTooltip,
								],
								onChange: () => {
									this.update();
								},
							}),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() => this.r.nonPersistentStorage.cppState,
									() => this.r.nonPersistentStorage.cppState?.suggestion,
									() =>
										this.r.nonPersistentStorage.cppState?.additionalSuggestions,
								],
								onChange: () => {
									this.refreshAdditionalWidgets(), this.update();
								},
								runNowToo: !0,
							}),
							this.update();
					}
					get cppPeekView() {
						return this.j;
					}
					set cppPeekView(o) {
						(this.j || !o) && this.disposeCppPeekView(), (this.j = o);
					}
					disposeCppPeekView() {
						this.j && (this.j.dispose(), (this.j = void 0));
					}
					shouldShowHoverAt(o) {
						const f = this.a.getModel();
						return f
							? this.b.value.ghostTextDecorations.some((b) => {
									const s = f.getDecorationRange(b);
									return s && s.intersectRanges(o);
								})
							: !1;
					}
					s() {
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
					t(o) {
						return o.startLineNumber !== o.endLineNumber;
					}
					refreshAdditionalWidgets() {
						for (const o of this.c) o.value.dispose();
						this.c = [];
						for (const o of this.r.nonPersistentStorage.cppState
							?.additionalSuggestions || []) {
							const f = new t.$Y(() => {
								const b = this.D(this.q.createInstance(d.$Hlc, this.a));
								return this.D(b.onClick((s) => {})), b;
							});
							this.c.push(f),
								f.value.update(o, {
									avoidEditorWideRemovals: o !== void 0,
									forceDiffBox: !0,
								});
						}
					}
					update() {
						const o = this.r.nonPersistentStorage.cppState?.suggestion;
						if (this.m) return;
						const f = this.a.getPosition();
						if (
							f !== null &&
							o !== void 0 &&
							o.source !== h.CppSource.CursorPrediction
						) {
							const b = this.a.getModel()?.getDecorationRange(o.decorationId);
							if (b == null) return;
							if (
								f.lineNumber < o.startingSuggestionRange.startLineNumber ||
								f.lineNumber > b.endLineNumber
							) {
								console.log(
									"[Cpp] Bad Case: Cursor is not in the range of the suggestion",
								);
								return;
							}
						}
						this.m = !0;
						try {
							this.b.value.update(o, { changesSinceLastUpdate: this.n });
						} catch (b) {
							console.error("[Cpp] Error updating ghost text", b);
						} finally {
							(this.m = !1), o !== void 0 && (this.n = !1);
						}
						if (this.c.length > 0) {
							let b;
							if (o !== void 0) {
								const s =
									this.a.getModel()?.getDecorationRange(o.decorationId) ??
									void 0;
								s &&
									(b = new E.$iL(
										Math.max(s.startLineNumber - 2, 1),
										s.startColumn,
										Math.min(
											s.endLineNumber + 2,
											this.a.getModel()?.getLineCount() ?? 1,
										),
										s.endColumn,
									));
							}
							for (let s = this.c.length - 1; s >= 0; s--) {
								const l =
									this.r.nonPersistentStorage.cppState?.additionalSuggestions[
										s
									];
								(() => {
									if (b !== void 0 && l !== void 0) {
										const $ = this.a
											.getModel()
											?.getDecorationRange(l.decorationId);
										return !$ || !b || !b.intersectRanges($);
									}
									return !0;
								})()
									? this.c[s].value.updatePosition(l)
									: (this.c[s].value.dispose(), this.c.splice(s, 1));
							}
						}
					}
					updatePositions() {
						for (let o = 0; o < this.c.length; o++)
							this.c[o].value.updatePosition(
								this.r.nonPersistentStorage.cppState?.additionalSuggestions[o],
							);
					}
					setChangesSinceLastUpdate(o) {
						this.n = o;
					}
				};
				(e.$Jlc = g),
					(e.$Jlc = g = c = Ne([j(1, m.$6j), j(2, r.$Li), j(3, u.$0zb)], g));
			},
		),
		