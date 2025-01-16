define(
			de[2001],
			he([1, 0, 7, 3, 65, 71, 4366, 31, 8, 5, 39, 45, 205, 670, 18, 906]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tdc = void 0),
					(e.$Sdc = p),
					(t = mt(t));
				function g() {
					return new c.$KN();
				}
				function p(f, b) {
					return {
						delegate: g(),
						inputBoxDelegate: new h.$Zzb(),
						initText: f ?? "",
						selections: b ?? [],
						images: [],
					};
				}
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.id = b),
							(this.keybindingService = s),
							(this.codeEditorService = l),
							(this.editorService = y),
							(this.instantiationService = $),
							(this.commandService = v),
							(this.contextKeyService = S),
							(this.reactiveStorageService = I),
							(this.bigContainer = null),
							(this.reactiveStorageRoot = this.D(
								this.reactiveStorageService.createScoped(this),
							));
						const T = E.EditorContextKeys.editorPromptBarFocused.bindTo(S);
						(this.a = t.$("div.inlineDiffViewZone")),
							this.D(
								(0, C.$Qdc)(
									this.a,
									this,
									() => {
										I.setNonPersistentStorage(
											"promptBars",
											I.nonPersistentStorage.promptBars.filter(
												(P) => P.id !== this.id,
											),
										);
									},
									this.instantiationService,
									this.reactiveStorageService,
									this,
									() => this.editor,
									(P) => {
										this.editor = P;
									},
									(P) => T.set(P),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					registerBigContainer(b) {
						this.bigContainer = b;
					}
					getDomNode() {
						return this.a;
					}
				};
				(e.$Tdc = o),
					(e.$Tdc = o =
						Ne(
							[
								j(1, u.$uZ),
								j(2, w.$dtb),
								j(3, n.$IY),
								j(4, r.$Li),
								j(5, d.$ek),
								j(6, m.$6j),
								j(7, a.$0zb),
							],
							o,
						));
			},
		),
		