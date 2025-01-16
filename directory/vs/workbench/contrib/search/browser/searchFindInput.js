define(
			de[3506],
			he([1, 0, 413, 1839, 4, 14, 95, 268, 6]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EOc = void 0),
					(w = mt(w));
				const r = w.localize(9273, null);
				class u extends t.$WCb {
					constructor(c, n, g, p, o, f, b, s, l) {
						super(c, n, g, p),
							(this.contextMenuService = o),
							(this.instantiationService = f),
							(this.filters = b),
							(this.ab = !1),
							(this.bb = this.D(new m.$re())),
							(this.onDidChangeAIToggle = this.bb.event),
							(this.cb = !1),
							(this.g = this.D(new i.$QFc(b, o, f, g, w.localize(9274, null)))),
							(this.$ = this.D(
								new a({ appendTitle: "", isChecked: !1, ...g.toggleStyles }),
							)),
							this.setAdditionalToggles([this.$]),
							this.db(),
							this.y.appendChild(this.g.container),
							this.g.container.classList.add("monaco-custom-toggle"),
							(this.filterVisible = l),
							(this.sparkleVisible = s),
							this.D(
								this.$.onChange(() => {
									this.J && (this.J.visible = !this.$.checked),
										this.L && (this.L.visible = !this.$.checked),
										this.M && (this.M.visible = !this.$.checked),
										this.$.checked
											? (this.g.visible = !1)
											: (this.filterVisible = this.cb),
										this.db();
								}),
							);
					}
					db() {
						this.inputBox.paddingRight =
							(this.M?.visible ? this.M.width() : 0) +
							(this.L?.visible ? this.L.width() : 0) +
							(this.J?.visible ? this.J.width() : 0) +
							(this.g.visible ? this.g.width() : 0) +
							(this.$.visible ? this.$.width() : 0);
					}
					set sparkleVisible(c) {
						(this.$.visible = c), this.db();
					}
					set filterVisible(c) {
						(this.cb = c),
							!(this.$.visible && this.$.checked) &&
								((this.g.visible = c), this.updateFilterStyles(), this.db());
					}
					setEnabled(c) {
						super.setEnabled(c),
							c && (!this.ab || !this.g.visible)
								? this.J?.enable()
								: this.J?.disable();
					}
					updateFilterStyles() {
						(this.ab =
							!this.filters.markupInput ||
							!this.filters.markupPreview ||
							!this.filters.codeInput ||
							!this.filters.codeOutput),
							this.g.applyStyles(this.ab);
					}
					get isAIEnabled() {
						return this.$.checked;
					}
				}
				e.$EOc = u;
				class a extends d.$8ib {
					constructor(c) {
						super({
							icon: E.$ak.sparkle,
							title: r + c.appendTitle,
							isChecked: c.isChecked,
							hoverDelegate: c.hoverDelegate ?? (0, C.$cib)("element"),
							inputActiveOptionBorder: c.inputActiveOptionBorder,
							inputActiveOptionForeground: c.inputActiveOptionForeground,
							inputActiveOptionBackground: c.inputActiveOptionBackground,
						});
					}
				}
			},
		),
		