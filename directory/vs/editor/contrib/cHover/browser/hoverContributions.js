define(
			de[2003],
			he([1, 0, 46, 149, 3, 38, 71, 69, 866, 8, 5, 90, 45, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$slc = void 0);
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "editor.contrib.hoverController";
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
								const S = this.D(s.createInstance(m.$pbc, this.a));
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
						if (
							this.a.getModel() &&
							!this.a.getOption(E.EditorOption.readOnly)
						) {
							const f = this.n();
							!this.g &&
							f &&
							this.j.applicationUserPersistentStorage.hideChatEditTooltip !== !0
								? this.b.value.update()
								: this.b.value.hide();
						}
					}
				};
				(e.$slc = g),
					(e.$slc =
						g =
						n =
							Ne(
								[
									j(1, a.$aM),
									j(2, r.$6j),
									j(3, u.$Li),
									j(4, d.$k3),
									j(5, h.$0zb),
									j(6, c.$gj),
								],
								g,
							)),
					(0, t.$qtb)(g.ID, g, t.EditorContributionInstantiation.Eventually);
			},
		),
		