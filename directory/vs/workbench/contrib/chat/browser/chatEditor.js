define(
			de[4065],
			he([1, 0, 8, 5, 128, 21, 32, 51, 35, 217, 282, 1288, 552, 481, 153, 981]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZYb = void 0);
				let p = class extends r.$JEb {
					get scopedContextKeyService() {
						return this.b;
					}
					constructor(f, b, s, l, y, $) {
						super(h.$cMb.EditorID, f, b, s, y),
							(this.g = l),
							(this.j = y),
							(this.m = $);
					}
					async r() {
						if (this.input) return this.g.invokeFunction(a.$1Yb, this.input);
					}
					Y(f) {
						this.b = this.D(this.m.createScoped(f));
						const b = this.D(
							this.g.createChild(
								new w.$Ki([t.$6j, this.scopedContextKeyService]),
							),
						);
						(this.a = this.D(
							b.createInstance(
								c.$XYb,
								n.ChatAgentLocation.Panel,
								void 0,
								{ supportsFileReferences: !0 },
								{
									listForeground: d.$9P,
									listBackground: d.$8P,
									inputEditorBackground: d.$TR,
									resultEditorBackground: d.$8P,
								},
							),
						)),
							this.D(this.a.onDidClear(() => this.r())),
							this.a.render(f),
							this.a.setVisible(!0);
					}
					Z(f) {
						super.Z(f), this.a?.setVisible(f);
					}
					focus() {
						super.focus(), this.a?.focusInput();
					}
					clearInput() {
						this.I(), super.clearInput();
					}
					async setInput(f, b, s, l) {
						super.setInput(f, b, s, l);
						const y = await f.resolve();
						if (!y)
							throw new Error(
								`Failed to get model for chat editor. id: ${f.sessionId}`,
							);
						if (!this.a)
							throw new Error("ChatEditor lifecycle issue: no editor widget");
						this.$(y.model, b?.viewState ?? f.options.viewState);
					}
					$(f, b) {
						(this.c = new u.$eEb(
							"interactive-session-editor-" + g.$b3,
							this.j,
						)),
							(this.f =
								b ??
								this.c.getMemento(
									E.StorageScope.WORKSPACE,
									E.StorageTarget.MACHINE,
								)),
							this.a.setModel(f, { ...this.f });
					}
					I() {
						if ((this.a?.saveState(), this.c && this.f)) {
							const f = this.a.getViewState();
							(this.f.inputValue = f.inputValue), this.c.saveMemento();
						}
					}
					layout(f, b) {
						this.a && this.a.layout(f.height, f.width);
					}
				};
				(e.$ZYb = p),
					(e.$ZYb = p =
						Ne(
							[j(1, C.$km), j(2, m.$iP), j(3, i.$Li), j(4, E.$lq), j(5, t.$6j)],
							p,
						));
			},
		),
		