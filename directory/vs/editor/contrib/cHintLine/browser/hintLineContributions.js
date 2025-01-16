define(
			de[1348],
			he([1, 0, 46, 3, 8, 5, 38, 149, 499, 1554, 45, 765, 19, 479, 58]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Plc = void 0),
					(e.$Olc = p);
				function p(b) {
					return (
						b.nonPersistentStorage.cppState?.suggestion !== void 0 &&
						b.applicationUserPersistentStorage.cppConfig?.isGhostText === !0
					);
				}
				class o extends t.$itb {
					constructor() {
						super({
							id: n.$JX,
							label: "Update Hint Line",
							alias: "Update Hint Line",
							precondition: void 0,
						});
					}
					run(s, l, y) {
						const $ = f.get(l);
						$ && $.update();
					}
				}
				(0, t.$ntb)(o);
				let f = class extends i.$1c {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.hintLineController";
					}
					static get(s) {
						return s.getContribution(g.ID);
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = s),
							(this.c = l),
							setTimeout(() => {
								this.update();
							}, 200),
							this.D(this.a.onDidChangeModel(() => this.update())),
							this.D(this.a.onDidChangeModelContent(() => this.update())),
							this.D(this.a.onDidChangeModelLanguage(() => this.update())),
							this.D(this.a.onDidChangeCursorPosition(() => this.update())),
							this.D(this.a.onDidFocusEditorText(() => this.update())),
							this.D(this.a.onDidBlurEditorText(() => this.update())),
							(this.b = new d.$Y(() =>
								this.D(this.f.createInstance(m.$w7b, this.a)),
							)),
							l.onDidChangeContext((S) => {
								S.affectsSome(new Set([a.$_Cb.inlineSuggestionVisible.key])) &&
									this.update();
							}),
							(this.j = this.D(this.g.createScoped(this))),
							this.j.onChangeEffect({
								deps: [
									() =>
										this.g.applicationUserPersistentStorage.hideChatEditTooltip,
									() => this.g.nonPersistentStorage.cppState?.suggestion,
									() => this.g.nonPersistentStorage.cppState,
									() => this.g.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									this.update();
								},
							});
					}
					m() {
						if (!this.a.hasModel()) return;
						const s = this.a.getModel(),
							l = this.a.getSelection();
						if (l.isEmpty()) {
							const { lineNumber: y, column: $ } = l.getPosition(),
								v = s.getLineContent(y);
							if (v.length === 0) return;
							if ($ === 1) {
								if (/\s/.test(v[0])) return;
							} else if ($ === s.getLineMaxColumn(y)) {
								if (/\s/.test(v[v.length - 1])) return;
							} else if (/\s/.test(v[$ - 2]) && /\s/.test(v[$ - 1])) return;
						}
						return l;
					}
					n() {
						if (!this.a.hasModel()) return !1;
						const s = this.a.getModel(),
							l = this.a.getSelection(),
							y = this.g.nonPersistentStorage.promptBars;
						for (const $ of y) {
							if (!h.$dh.isEqual($.uri, s.uri)) continue;
							const v = this.h.getPromptBarCurrentRange($, s);
							if (
								v !== void 0 &&
								!(
									v.startLineNumber > l.endLineNumber ||
									v.endLineNumberExclusive <= l.startLineNumber
								)
							)
								return !0;
						}
						return !1;
					}
					update() {
						if (
							this.g.applicationUserPersistentStorage.hideChatEditTooltip === !0
						) {
							this.b.value.hide();
							return;
						}
						const s = this.a.getModel();
						if (s && !this.a.getOption(C.EditorOption.readOnly)) {
							const l = this.m(),
								y = l ? l.getStartPosition() : this.a.getPosition(),
								$ = s.getLineFirstNonWhitespaceColumn(y.lineNumber) === 0,
								v = this.c.getContextKeyValue(
									a.$_Cb.inlineSuggestionVisible.key,
								),
								S = p(this.g);
							if (
								$ &&
								!v &&
								(l == null ||
									(l.startLineNumber == l.endLineNumber &&
										l.startColumn == l.endColumn)) &&
								!(0, r.$Nlc)(this.g) &&
								!S
							) {
								this.b.value.update(y);
								const I = this.n();
								this.b.value.updateCmdKShortcut(I);
							} else this.b.value.hide();
						} else this.b.value.hide();
					}
				};
				(e.$Plc = f),
					(e.$Plc =
						f =
						g =
							Ne([j(1, w.$6j), j(2, E.$Li), j(3, u.$0zb), j(4, c.$J7b)], f)),
					(0, t.$qtb)(f.ID, f, t.EditorContributionInstantiation.Eventually);
			},
		),
		