define(de[613], he([1, 0, 97, 4, 51, 123]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$nCc =
					e.$mCc =
					e.$lCc =
					e.$kCc =
					e.$jCc =
					e.$iCc =
					e.$hCc =
					e.$gCc =
					e.$fCc =
					e.$eCc =
					e.$dCc =
					e.$cCc =
					e.$bCc =
					e.$aCc =
					e.$_Bc =
					e.$$Bc =
					e.$0Bc =
					e.$9Bc =
					e.$8Bc =
					e.$7Bc =
					e.$6Bc =
						void 0),
				(e.$6Bc = (0, w.$wP)(
					"settings.headerForeground",
					{
						light: "#444444",
						dark: "#e7e7e7",
						hcDark: "#ffffff",
						hcLight: "#292929",
					},
					(0, i.localize)(8665, null),
				)),
				(e.$7Bc = (0, w.$wP)(
					"settings.settingsHeaderHoverForeground",
					(0, w.$BP)(e.$6Bc, 0.7),
					(0, i.localize)(8666, null),
				)),
				(e.$8Bc = (0, w.$wP)(
					"settings.modifiedItemIndicator",
					{
						light: new t.$UL(new t.$RL(102, 175, 224)),
						dark: new t.$UL(new t.$RL(12, 125, 157)),
						hcDark: new t.$UL(new t.$RL(0, 73, 122)),
						hcLight: new t.$UL(new t.$RL(102, 175, 224)),
					},
					(0, i.localize)(8667, null),
				)),
				(e.$9Bc = (0, w.$wP)(
					"settings.headerBorder",
					E.$rFb,
					(0, i.localize)(8668, null),
				)),
				(e.$0Bc = (0, w.$wP)(
					"settings.sashBorder",
					E.$rFb,
					(0, i.localize)(8669, null),
				)),
				(e.$$Bc = (0, w.$wP)(
					"settings.dropdownBackground",
					w.$$R,
					(0, i.localize)(8670, null),
				)),
				(e.$_Bc = (0, w.$wP)(
					"settings.dropdownForeground",
					w.$aS,
					(0, i.localize)(8671, null),
				)),
				(e.$aCc = (0, w.$wP)(
					"settings.dropdownBorder",
					w.$bS,
					(0, i.localize)(8672, null),
				)),
				(e.$bCc = (0, w.$wP)(
					"settings.dropdownListBorder",
					w.$dQ,
					(0, i.localize)(8673, null),
				)),
				(e.$cCc = (0, w.$wP)(
					"settings.checkboxBackground",
					w.$rS,
					(0, i.localize)(8674, null),
				)),
				(e.$dCc = (0, w.$wP)(
					"settings.checkboxForeground",
					w.$tS,
					(0, i.localize)(8675, null),
				)),
				(e.$eCc = (0, w.$wP)(
					"settings.checkboxBorder",
					w.$uS,
					(0, i.localize)(8676, null),
				)),
				(e.$fCc = (0, w.$wP)(
					"settings.textInputBackground",
					w.$TR,
					(0, i.localize)(8677, null),
				)),
				(e.$gCc = (0, w.$wP)(
					"settings.textInputForeground",
					w.$UR,
					(0, i.localize)(8678, null),
				)),
				(e.$hCc = (0, w.$wP)(
					"settings.textInputBorder",
					w.$VR,
					(0, i.localize)(8679, null),
				)),
				(e.$iCc = (0, w.$wP)(
					"settings.numberInputBackground",
					w.$TR,
					(0, i.localize)(8680, null),
				)),
				(e.$jCc = (0, w.$wP)(
					"settings.numberInputForeground",
					w.$UR,
					(0, i.localize)(8681, null),
				)),
				(e.$kCc = (0, w.$wP)(
					"settings.numberInputBorder",
					w.$VR,
					(0, i.localize)(8682, null),
				)),
				(e.$lCc = (0, w.$wP)(
					"settings.focusedRowBackground",
					{
						dark: (0, w.$BP)(w.$MS, 0.6),
						light: (0, w.$BP)(w.$MS, 0.6),
						hcDark: null,
						hcLight: null,
					},
					(0, i.localize)(8683, null),
				)),
				(e.$mCc = (0, w.$wP)(
					"settings.rowHoverBackground",
					{
						dark: (0, w.$BP)(w.$MS, 0.3),
						light: (0, w.$BP)(w.$MS, 0.3),
						hcDark: null,
						hcLight: null,
					},
					(0, i.localize)(8684, null),
				)),
				(e.$nCc = (0, w.$wP)(
					"settings.focusedRowBorder",
					w.$NP,
					(0, i.localize)(8685, null),
				));
		}),
		define(
			de[3123],
			he([
				1, 0, 459, 7, 105, 183, 268, 292, 596, 15, 14, 6, 27, 3, 12, 28, 4, 49,
				35, 26, 612, 613, 106, 95, 72, 94, 2479,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QCc =
						e.$PCc =
						e.$OCc =
						e.$NCc =
						e.$MCc =
						e.$LCc =
						e.$KCc =
							void 0),
					(i = mt(i));
				const I = i.$;
				class T {
					get items() {
						const R = this.a.map((O, B) => {
							const U = typeof this.b == "number" && this.b === B;
							return { ...O, editing: U, selected: B === this.d || U };
						});
						return (
							this.b === "create" &&
								R.push({ editing: !0, selected: !0, ...this.f }),
							R
						);
					}
					constructor(R) {
						(this.a = []), (this.b = null), (this.d = null), (this.f = R);
					}
					setEditKey(R) {
						this.b = R;
					}
					setValue(R) {
						this.a = R;
					}
					select(R) {
						this.d = R;
					}
					getSelected() {
						return this.d;
					}
					selectNext() {
						typeof this.d == "number"
							? (this.d = Math.min(this.d + 1, this.a.length - 1))
							: (this.d = 0);
					}
					selectPrevious() {
						typeof this.d == "number"
							? (this.d = Math.max(this.d - 1, 0))
							: (this.d = 0);
					}
				}
				e.$KCc = T;
				let P = class extends c.$1c {
					get domNode() {
						return this.a;
					}
					get items() {
						return this.g.items;
					}
					get inReadMode() {
						return this.g.items.every((R) => !R.editing);
					}
					constructor(R, O, B) {
						super(),
							(this.j = R),
							(this.m = O),
							(this.n = B),
							(this.b = []),
							(this.f = this.D(new a.$re())),
							(this.g = new T(this.q())),
							(this.h = this.D(new c.$Zc())),
							(this.onDidChangeList = this.f.event),
							(this.a = i.$fhb(R, I("div"))),
							this.a.setAttribute("role", "list"),
							this.r().forEach((U) => this.a.classList.add(U)),
							i.$fhb(R, this.M()),
							this.F(),
							this.D(i.$0fb(this.a, i.$$gb.POINTER_DOWN, (U) => this.N(U))),
							this.D(i.$0fb(this.a, i.$$gb.DBLCLICK, (U) => this.O(U))),
							this.D(
								i.$$fb(this.a, "keydown", (U) => {
									if (U.equals(h.KeyCode.UpArrow)) this.S();
									else if (U.equals(h.KeyCode.DownArrow)) this.R();
									else return;
									U.preventDefault(), U.stopPropagation();
								}),
							);
					}
					setValue(R) {
						this.g.setValue(R), this.F();
					}
					z() {}
					C() {
						return !0;
					}
					F() {
						const R = i.$Lgb(this.a);
						i.$9fb(this.a), this.h.clear();
						const O = this.g.items.some(
							(U) => !!(U.editing && this.isItemNew(U)),
						);
						this.j.classList.toggle(
							"setting-list-hide-add-button",
							!this.C() || O,
						),
							this.g.items.length
								? (this.a.tabIndex = 0)
								: this.a.removeAttribute("tabIndex");
						const B = this.z();
						B && this.a.appendChild(B),
							(this.b = this.g.items.map((U, z) => this.J(U, z, R))),
							this.b.forEach((U) => this.a.appendChild(U));
					}
					G(R) {
						const O = R.options.map(({ value: F, description: x }) => ({
								text: F,
								description: x,
							})),
							B = R.options.findIndex((F) => R.data === F.value),
							U = (0, y.$Gyb)({
								selectBackground: l.$$Bc,
								selectForeground: l.$_Bc,
								selectBorder: l.$aCc,
								selectListBorder: l.$bCc,
							});
						return new m.$5ib(O, B, this.n, U, {
							useCustomDrawn: !(n.$u && t.$Yfb.pointerEvents),
						});
					}
					H(R) {
						this.g.setEditKey(R), this.F();
					}
					cancelEdit() {
						this.g.setEditKey("none"), this.F();
					}
					I(R, O, B) {
						this.g.setEditKey("none"),
							this.isItemNew(R)
								? this.f.fire({ type: "add", newItem: O, targetIndex: B })
								: this.f.fire({
										type: "change",
										originalItem: R,
										newItem: O,
										targetIndex: B,
									}),
							this.F();
					}
					J(R, O, B) {
						const U = R.editing ? this.u(R, O) : this.L(R, O, B);
						return U.setAttribute("role", "listitem"), U;
					}
					L(R, O, B) {
						const U = this.t(R, O),
							z = U.rowElement;
						z.setAttribute("data-index", O + ""),
							z.setAttribute("tabindex", R.selected ? "0" : "-1"),
							z.classList.toggle("selected", R.selected);
						const F = new w.$eib(z);
						return (
							this.h.add(F),
							F.push(this.s(R, O), { icon: !0, label: !0 }),
							this.w(U, R),
							R.selected && B && (0, r.$Oh)(() => z.focus(), void 0, this.h),
							this.h.add(
								i.$0fb(z, "click", (x) => {
									x.stopPropagation();
								}),
							),
							z
						);
					}
					M() {
						const R = I(".setting-list-new-row"),
							O = this.D(new E.$oob(R, y.$lyb));
						return (
							(O.label = this.y().addButtonLabel),
							O.element.classList.add("setting-list-addButton"),
							this.D(
								O.onDidClick(() => {
									this.g.setEditKey("create"), this.F();
								}),
							),
							R
						);
					}
					N(R) {
						const O = this.P(R);
						O < 0 ||
							(R.preventDefault(),
							R.stopImmediatePropagation(),
							this.g.getSelected() !== O && this.Q(O));
					}
					O(R) {
						const O = this.P(R);
						if (O < 0) return;
						this.g.items[O] &&
							(this.H(O), R.preventDefault(), R.stopPropagation());
					}
					P(R) {
						if (!R.target || i.$Egb(R.target, "monaco-action-bar")) return -1;
						const B = i.$Egb(R.target, "setting-list-row");
						if (!B) return -1;
						const U = B.getAttribute("data-index");
						return U ? parseInt(U) : -1;
					}
					Q(R) {
						this.g.select(R),
							this.b.forEach((B) => B.classList.remove("selected"));
						const O = this.b[this.g.getSelected()];
						O.classList.add("selected"), O.focus();
					}
					R() {
						this.g.selectNext(), this.Q(this.g.getSelected());
					}
					S() {
						this.g.selectPrevious(), this.Q(this.g.getSelected());
					}
				};
				(e.$LCc = P), (e.$LCc = P = Ne([j(1, f.$iP), j(2, o.$Wxb)], P));
				let k = class extends P {
					setValue(R, O) {
						(this.U = O?.keySuggester),
							(this.W = O?.showAddButton ?? !0),
							super.setValue(R);
					}
					constructor(R, O, B, U) {
						super(R, O, B), (this.X = U), (this.W = !0);
					}
					q() {
						return { value: { type: "string", data: "" } };
					}
					C() {
						return this.W;
					}
					r() {
						return ["setting-list-widget"];
					}
					s(R, O) {
						return [
							{
								class: b.ThemeIcon.asClassName(s.$7Ac),
								enabled: !0,
								id: "workbench.action.editListItem",
								tooltip: this.y().editActionTooltip,
								run: () => this.H(O),
							},
							{
								class: b.ThemeIcon.asClassName(s.$8Ac),
								enabled: !0,
								id: "workbench.action.removeListItem",
								tooltip: this.y().deleteActionTooltip,
								run: () =>
									this.f.fire({
										type: "remove",
										originalItem: R,
										targetIndex: O,
									}),
							},
						];
					}
					db(R) {
						const O = I(".monaco-drag-image");
						return (O.textContent = R.value.data), O;
					}
					t(R, O) {
						const B = I(".setting-list-row"),
							U = i.$fhb(B, I(".setting-list-value")),
							z = i.$fhb(B, I(".setting-list-sibling"));
						return (
							(U.textContent = R.value.data.toString()),
							(z.textContent = R.sibling ? `when: ${R.sibling}` : null),
							this.fb(B, R, O),
							{ rowElement: B, keyElement: U, valueElement: z }
						);
					}
					fb(R, O, B) {
						this.inReadMode
							? ((R.draggable = !0), R.classList.add("draggable"))
							: ((R.draggable = !1), R.classList.remove("draggable")),
							this.h.add(
								i.$0fb(R, i.$$gb.DRAG_START, (z) => {
									if (
										((this.cb = { element: R, item: O, itemIndex: B }),
										z.dataTransfer)
									) {
										z.dataTransfer.dropEffect = "move";
										const F = this.db(O);
										R.ownerDocument.body.appendChild(F),
											z.dataTransfer.setDragImage(F, -10, -10),
											setTimeout(() => F.remove(), 0);
									}
								}),
							),
							this.h.add(
								i.$0fb(R, i.$$gb.DRAG_OVER, (z) =>
									this.cb
										? (z.preventDefault(),
											z.dataTransfer && (z.dataTransfer.dropEffect = "move"),
											!0)
										: !1,
								),
							);
						let U = 0;
						this.h.add(
							i.$0fb(R, i.$$gb.DRAG_ENTER, (z) => {
								U++, R.classList.add("drag-hover");
							}),
						),
							this.h.add(
								i.$0fb(R, i.$$gb.DRAG_LEAVE, (z) => {
									U--, U || R.classList.remove("drag-hover");
								}),
							),
							this.h.add(
								i.$0fb(R, i.$$gb.DROP, (z) =>
									this.cb
										? (z.preventDefault(),
											(U = 0),
											this.cb.element !== R &&
												this.f.fire({
													type: "move",
													originalItem: this.cb.item,
													sourceIndex: this.cb.itemIndex,
													newItem: O,
													targetIndex: B,
												}),
											!0)
										: !1,
								),
							),
							this.h.add(
								i.$0fb(R, i.$$gb.DRAG_END, (z) => {
									(U = 0),
										R.classList.remove("drag-hover"),
										z.dataTransfer?.clearData(),
										this.cb && (this.cb = void 0);
								}),
							);
					}
					u(R, O) {
						const B = I(".setting-list-edit-row");
						let U, z, F;
						if (this.U) {
							const J = this.U(
								this.g.items.map(({ value: { data: W } }) => W),
								O,
							);
							R = {
								...R,
								value: {
									type: "enum",
									data: R.value.data,
									options: J ? J.options : [],
								},
							};
						}
						switch (R.value.type) {
							case "string":
								U = this.jb(R.value, B);
								break;
							case "enum":
								(U = this.kb(R.value, B)),
									(F = R.value.options),
									R.value.options.length &&
										(z = this.isItemNew(R) ? F[0].value : R.value.data);
								break;
						}
						const x = () => ({
								value: { type: "string", data: U.value },
								sibling: V?.value,
							}),
							H = (J) => ({
								value: { type: "enum", data: J, options: F ?? [] },
							}),
							q = (J) => {
								J.equals(h.KeyCode.Enter)
									? this.I(R, x(), O)
									: J.equals(h.KeyCode.Escape) &&
										(this.cancelEdit(), J.preventDefault()),
									B?.focus();
							};
						if (R.value.type !== "string") {
							const J = U;
							this.h.add(
								J.onDidSelect(({ selected: W }) => {
									z = W;
								}),
							);
						} else {
							const J = U;
							this.h.add(i.$$fb(J.inputElement, i.$$gb.KEY_DOWN, q));
						}
						let V;
						(0, g.$ug)(R.sibling)
							? U instanceof d.$Mob && U.element.classList.add("no-sibling")
							: ((V = new d.$Mob(B, this.n, {
									placeholder: this.y().siblingInputPlaceholder,
									inputBoxStyles: (0, y.$xyb)({
										inputBackground: l.$fCc,
										inputForeground: l.$gCc,
										inputBorder: l.$hCc,
									}),
								})),
								V.element.classList.add("setting-list-siblingInput"),
								this.h.add(V),
								(V.value = R.sibling),
								this.h.add(i.$$fb(V.inputElement, i.$$gb.KEY_DOWN, q)));
						const G = this.h.add(new E.$oob(B, y.$lyb));
						(G.label = (0, p.localize)(8614, null)),
							G.element.classList.add("setting-list-ok-button"),
							this.h.add(
								G.onDidClick(() => {
									R.value.type === "string"
										? this.I(R, x(), O)
										: this.I(R, H(z), O);
								}),
							);
						const K = this.h.add(new E.$oob(B, { secondary: !0, ...y.$lyb }));
						return (
							(K.label = (0, p.localize)(8615, null)),
							K.element.classList.add("setting-list-cancel-button"),
							this.h.add(K.onDidClick(() => this.cancelEdit())),
							this.h.add(
								(0, r.$Oh)(() => {
									U.focus(), U instanceof d.$Mob && U.select();
								}),
							),
							B
						);
					}
					isItemNew(R) {
						return R.value.data === "";
					}
					w(R, { value: O, sibling: B }) {
						const U = (0, g.$ug)(B)
								? (0, p.localize)(8616, null, O.data)
								: (0, p.localize)(8617, null, O.data, B),
							{ rowElement: z } = R;
						this.h.add(this.X.setupManagedHover((0, $.$cib)("mouse"), z, U)),
							z.setAttribute("aria-label", U);
					}
					y() {
						return {
							deleteActionTooltip: (0, p.localize)(8618, null),
							editActionTooltip: (0, p.localize)(8619, null),
							addButtonLabel: (0, p.localize)(8620, null),
							inputPlaceholder: (0, p.localize)(8621, null),
							siblingInputPlaceholder: (0, p.localize)(8622, null),
						};
					}
					jb(R, O) {
						const B = new d.$Mob(O, this.n, {
							placeholder: this.y().inputPlaceholder,
							inputBoxStyles: (0, y.$xyb)({
								inputBackground: l.$fCc,
								inputForeground: l.$gCc,
								inputBorder: l.$hCc,
							}),
						});
						return (
							B.element.classList.add("setting-list-valueInput"),
							this.h.add(B),
							(B.value = R.data.toString()),
							B
						);
					}
					kb(R, O) {
						if (R.type !== "enum") throw new Error("Valuetype must be enum.");
						const B = this.G(R),
							U = I(".setting-list-object-list-row");
						return B.render(U), O.appendChild(U), B;
					}
				};
				(e.$MCc = k),
					(e.$MCc = k = Ne([j(1, f.$iP), j(2, o.$Wxb), j(3, v.$Uyb)], k));
				class L extends k {
					r() {
						return ["setting-list-include-exclude-widget"];
					}
					fb(R, O, B) {}
					w(R, O) {
						let B = (0, g.$ug)(O.sibling)
							? (0, p.localize)(8623, null, O.value.data)
							: (0, p.localize)(8624, null, O.value.data, O.sibling);
						O.source && (B += (0, p.localize)(8625, null, O.source));
						const U = new S.$cl().appendMarkdown(B),
							{ rowElement: z } = R;
						this.h.add(
							this.X.setupManagedHover((0, $.$cib)("mouse"), z, {
								markdown: U,
								markdownNotSupportedFallback: B,
							}),
						),
							z.setAttribute("aria-label", B);
					}
					y() {
						return {
							deleteActionTooltip: (0, p.localize)(8626, null),
							editActionTooltip: (0, p.localize)(8627, null),
							addButtonLabel: (0, p.localize)(8628, null),
							inputPlaceholder: (0, p.localize)(8629, null),
							siblingInputPlaceholder: (0, p.localize)(8630, null),
						};
					}
				}
				e.$NCc = L;
				class D extends k {
					r() {
						return ["setting-list-include-exclude-widget"];
					}
					fb(R, O, B) {}
					w(R, O) {
						let B = (0, g.$ug)(O.sibling)
							? (0, p.localize)(8631, null, O.value.data)
							: (0, p.localize)(8632, null, O.value.data, O.sibling);
						O.source && (B += (0, p.localize)(8633, null, O.source));
						const U = new S.$cl().appendMarkdown(B),
							{ rowElement: z } = R;
						this.h.add(
							this.X.setupManagedHover((0, $.$cib)("mouse"), z, {
								markdown: U,
								markdownNotSupportedFallback: B,
							}),
						),
							z.setAttribute("aria-label", B);
					}
					y() {
						return {
							deleteActionTooltip: (0, p.localize)(8634, null),
							editActionTooltip: (0, p.localize)(8635, null),
							addButtonLabel: (0, p.localize)(8636, null),
							inputPlaceholder: (0, p.localize)(8637, null),
							siblingInputPlaceholder: (0, p.localize)(8638, null),
						};
					}
				}
				e.$OCc = D;
				let M = class extends P {
					constructor(R, O, B, U) {
						super(R, O, B),
							(this.Z = U),
							(this.U = ""),
							(this.W = !0),
							(this.X = () => {}),
							(this.Y = () => {});
					}
					setValue(R, O) {
						(this.W = O?.showAddButton ?? this.W),
							(this.X = O?.keySuggester ?? this.X),
							(this.Y = O?.valueSuggester ?? this.Y),
							(0, g.$tg)(O) &&
								O.settingKey !== this.U &&
								(this.g.setEditKey("none"),
								this.g.select(null),
								(this.U = O.settingKey)),
							super.setValue(R);
					}
					isItemNew(R) {
						return R.key.data === "" && R.value.data === "";
					}
					C() {
						return this.W;
					}
					q() {
						return {
							key: { type: "string", data: "" },
							value: { type: "string", data: "" },
							removable: !0,
							resetable: !1,
						};
					}
					r() {
						return ["setting-list-object-widget"];
					}
					s(R, O) {
						const B = [
							{
								class: b.ThemeIcon.asClassName(s.$7Ac),
								enabled: !0,
								id: "workbench.action.editListItem",
								label: "",
								tooltip: this.y().editActionTooltip,
								run: () => this.H(O),
							},
						];
						return (
							R.resetable &&
								B.push({
									class: b.ThemeIcon.asClassName(s.$9Ac),
									enabled: !0,
									id: "workbench.action.resetListItem",
									label: "",
									tooltip: this.y().resetActionTooltip,
									run: () =>
										this.f.fire({
											type: "reset",
											originalItem: R,
											targetIndex: O,
										}),
								}),
							R.removable &&
								B.push({
									class: b.ThemeIcon.asClassName(s.$8Ac),
									enabled: !0,
									id: "workbench.action.removeListItem",
									label: "",
									tooltip: this.y().deleteActionTooltip,
									run: () =>
										this.f.fire({
											type: "remove",
											originalItem: R,
											targetIndex: O,
										}),
								}),
							B
						);
					}
					z() {
						const R = I(".setting-list-row-header"),
							O = i.$fhb(R, I(".setting-list-object-key")),
							B = i.$fhb(R, I(".setting-list-object-value")),
							{ keyHeaderText: U, valueHeaderText: z } = this.y();
						return (O.textContent = U), (B.textContent = z), R;
					}
					t(R, O) {
						const B = I(".setting-list-row");
						B.classList.add("setting-list-object-row");
						const U = i.$fhb(B, I(".setting-list-object-key")),
							z = i.$fhb(B, I(".setting-list-object-value"));
						return (
							(U.textContent = R.key.data),
							(z.textContent = R.value.data.toString()),
							{ rowElement: B, keyElement: U, valueElement: z }
						);
					}
					u(R, O) {
						const B = I(".setting-list-edit-row.setting-list-object-row"),
							U = { ...R },
							z = (W) => {
								(U.key = W), (K.enabled = W.data !== "");
								const X = this.Y(W.data) ?? R.value;
								this.kb(R.value, U.value, X) && (F(X), G());
							},
							F = (W) => {
								U.value = W;
							};
						let x, H;
						if (this.W) {
							if (this.isItemNew(R)) {
								const Y = this.X(
									this.g.items.map(({ key: { data: ie } }) => ie),
								);
								if ((0, g.$tg)(Y)) {
									U.key = Y;
									const ie = this.Y(U.key.data);
									F(ie ?? U.value);
								}
							}
							const { widget: W, element: X } = this.hb(U.key, {
								idx: O,
								isKey: !0,
								originalItem: R,
								changedItem: U,
								update: z,
							});
							(x = W), (H = X);
						} else
							(H = I(".setting-list-object-key")), (H.textContent = R.key.data);
						let q;
						const V = I(".setting-list-object-value-container"),
							G = () => {
								const { widget: W, element: X } = this.hb(U.value, {
									idx: O,
									isKey: !1,
									originalItem: R,
									changedItem: U,
									update: F,
								});
								(q = W), i.$9fb(V), V.append(X);
							};
						G(), B.append(H, V);
						const K = this.h.add(new E.$oob(B, y.$lyb));
						(K.enabled = U.key.data !== ""),
							(K.label = (0, p.localize)(8639, null)),
							K.element.classList.add("setting-list-ok-button"),
							this.h.add(K.onDidClick(() => this.I(R, U, O)));
						const J = this.h.add(new E.$oob(B, { secondary: !0, ...y.$lyb }));
						return (
							(J.label = (0, p.localize)(8640, null)),
							J.element.classList.add("setting-list-cancel-button"),
							this.h.add(J.onDidClick(() => this.cancelEdit())),
							this.h.add(
								(0, r.$Oh)(() => {
									const W = x ?? q;
									W.focus(), W instanceof d.$Mob && W.select();
								}),
							),
							B
						);
					}
					hb(R, O) {
						switch (R.type) {
							case "string":
								return this.ib(R, O);
							case "enum":
								return this.jb(R, O);
							case "boolean":
								return this.jb(
									{
										type: "enum",
										data: R.data.toString(),
										options: [{ value: "true" }, { value: "false" }],
									},
									O,
								);
						}
					}
					ib(
						R,
						{ idx: O, isKey: B, originalItem: U, changedItem: z, update: F },
					) {
						const x = I(
								B
									? ".setting-list-object-input-key"
									: ".setting-list-object-input-value",
							),
							H = new d.$Mob(x, this.n, {
								placeholder: B
									? (0, p.localize)(8641, null)
									: (0, p.localize)(8642, null),
								inputBoxStyles: (0, y.$xyb)({
									inputBackground: l.$fCc,
									inputForeground: l.$gCc,
									inputBorder: l.$hCc,
								}),
							});
						H.element.classList.add("setting-list-object-input"),
							this.h.add(H),
							(H.value = R.data),
							this.h.add(H.onDidChange((V) => F({ ...R, data: V })));
						const q = (V) => {
							V.equals(h.KeyCode.Enter)
								? this.I(U, z, O)
								: V.equals(h.KeyCode.Escape) &&
									(this.cancelEdit(), V.preventDefault());
						};
						return (
							this.h.add(i.$$fb(H.inputElement, i.$$gb.KEY_DOWN, q)),
							{ widget: H, element: x }
						);
					}
					jb(R, { isKey: O, changedItem: B, update: U }) {
						const z = this.G(R),
							F = O ? B.key : B.value;
						this.h.add(
							z.onDidSelect(({ selected: q }) =>
								U(
									F.type === "boolean"
										? { ...F, data: q === "true" }
										: { ...F, data: q },
								),
							),
						);
						const x = I(".setting-list-object-input");
						return (
							x.classList.add(
								O
									? "setting-list-object-input-key"
									: "setting-list-object-input-value",
							),
							z.render(x),
							R.options.findIndex((q) => R.data === q.value) === -1 &&
							R.options.length
								? U(
										F.type === "boolean"
											? { ...F, data: !0 }
											: { ...F, data: R.options[0].value },
									)
								: F.type === "boolean" && U({ ...F, data: R.data === "true" }),
							{ widget: z, element: x }
						);
					}
					kb(R, O, B) {
						if (B.type !== "enum" && B.type === O.type && B.data === O.data)
							return !1;
						if (R.data === "") return !0;
						if (O.type === B.type && B.type !== "enum") return !1;
						if (O.type === "enum" && B.type === "enum") {
							const U = new Set(O.options.map(({ value: z }) => z));
							if (
								(B.options.forEach(({ value: z }) => U.delete(z)), U.size === 0)
							)
								return !1;
						}
						return !0;
					}
					w(R, O) {
						const { keyElement: B, valueElement: U, rowElement: z } = R;
						let F;
						O.source
							? (F = (0, p.localize)(
									8643,
									null,
									O.key.data,
									O.value.data,
									O.source,
								))
							: (F = (0, p.localize)(8644, null, O.key.data, O.value.data));
						const x = {
								markdown: new S.$cl().appendMarkdown(F),
								markdownNotSupportedFallback: F,
							},
							H = this.mb(O.key) ?? O.keyDescription ?? x;
						this.h.add(this.Z.setupManagedHover((0, $.$cib)("mouse"), B, H));
						const q = this.mb(O.value) ?? x;
						this.h.add(this.Z.setupManagedHover((0, $.$cib)("mouse"), U, q)),
							z.setAttribute("aria-label", F);
					}
					mb(R) {
						return R.type === "enum"
							? R.options.find(({ value: B }) => R.data === B)?.description
							: void 0;
					}
					y() {
						return {
							deleteActionTooltip: (0, p.localize)(8645, null),
							resetActionTooltip: (0, p.localize)(8646, null),
							editActionTooltip: (0, p.localize)(8647, null),
							addButtonLabel: (0, p.localize)(8648, null),
							keyHeaderText: (0, p.localize)(8649, null),
							valueHeaderText: (0, p.localize)(8650, null),
						};
					}
				};
				(e.$PCc = M),
					(e.$PCc = M = Ne([j(1, f.$iP), j(2, o.$Wxb), j(3, v.$Uyb)], M));
				let N = class extends P {
					constructor(R, O, B, U) {
						super(R, O, B), (this.W = U), (this.U = "");
					}
					setValue(R, O) {
						(0, g.$tg)(O) &&
							O.settingKey !== this.U &&
							(this.g.setEditKey("none"),
							this.g.select(null),
							(this.U = O.settingKey)),
							super.setValue(R);
					}
					isItemNew(R) {
						return !R.key.data && !R.value.data;
					}
					q() {
						return {
							key: { type: "string", data: "" },
							value: { type: "boolean", data: !1 },
							removable: !1,
							resetable: !0,
						};
					}
					r() {
						return ["setting-list-object-widget"];
					}
					s(R, O) {
						return [];
					}
					C() {
						return !1;
					}
					z() {}
					J(R, O, B) {
						const U = this.u(R, O);
						return U.setAttribute("role", "listitem"), U;
					}
					t(R, O) {
						const B = I(".blank-row"),
							U = I(".blank-row-key");
						return { rowElement: B, keyElement: U };
					}
					u(R, O) {
						const B = I(
								".setting-list-edit-row.setting-list-object-row.setting-item-bool",
							),
							U = { ...R },
							z = (G) => {
								(U.value.data = G), this.I(R, U, O);
							},
							F = R.keyDescription
								? `${R.keyDescription} (${R.key.data})`
								: R.key.data,
							{ element: x, widget: H } = this.fb(U.value.data, F, z);
						B.appendChild(x);
						const q = i.$fhb(B, I(".setting-list-object-value"));
						q.textContent = F;
						const V = { rowElement: B, keyElement: q, valueElement: H.domNode };
						return (
							this.w(V, R),
							this.D(
								i.$0fb(q, i.$$gb.MOUSE_DOWN, (G) => {
									G.target.tagName.toLowerCase() !== "a" &&
										((H.checked = !H.checked), z(H.checked)),
										i.$ahb.stop(G);
								}),
							),
							B
						);
					}
					fb(R, O, B) {
						const U = new C.$8ib({
							icon: u.$ak.check,
							actionClassName: "setting-value-checkbox",
							isChecked: R,
							title: O,
							...C.$6ib,
						});
						this.h.add(U);
						const z = I(".setting-list-object-input");
						return (
							z.classList.add("setting-list-object-input-key-checkbox"),
							U.domNode.classList.add("setting-value-checkbox"),
							z.appendChild(U.domNode),
							this.D(
								i.$0fb(z, i.$$gb.MOUSE_DOWN, (F) => {
									(U.checked = !U.checked),
										B(U.checked),
										F.stopImmediatePropagation();
								}),
							),
							{ widget: U, element: z }
						);
					}
					w(R, O) {
						const B = (0, p.localize)(8651, null, O.key.data, O.value.data),
							U = O.keyDescription ?? B,
							{ rowElement: z, keyElement: F, valueElement: x } = R;
						this.h.add(this.W.setupManagedHover((0, $.$cib)("mouse"), F, U)),
							x.setAttribute("aria-label", B),
							z.setAttribute("aria-label", B);
					}
					y() {
						return {
							deleteActionTooltip: (0, p.localize)(8652, null),
							resetActionTooltip: (0, p.localize)(8653, null),
							editActionTooltip: (0, p.localize)(8654, null),
							addButtonLabel: (0, p.localize)(8655, null),
							keyHeaderText: (0, p.localize)(8656, null),
							valueHeaderText: (0, p.localize)(8657, null),
						};
					}
				};
				(e.$QCc = N),
					(e.$QCc = N = Ne([j(1, f.$iP), j(2, o.$Wxb), j(3, v.$Uyb)], N));
			},
		),
		