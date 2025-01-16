define(
		de[1832],
		he([1, 0, 7, 75, 24, 12, 113, 22, 2738, 2743, 34, 30, 55, 52]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wEb = void 0),
				(e.$xEb = g),
				(m = xi(m));
			let n = class {
				constructor(o, f, b, s) {
					(this.a = o), (this.b = f), (this.d = b), (this.e = s);
				}
				async getLogs() {
					return (0, r.$uEb)(this.a, this.b);
				}
				async whenWorkbenchRestored() {
					this.e.info("[driver] Waiting for restored lifecycle phase..."),
						await this.d.when(c.LifecyclePhase.Restored),
						this.e.info(
							"[driver] Restored lifecycle phase reached. Waiting for contributions...",
						),
						await a.$Io.as(h.Extensions.Workbench).whenRestored,
						this.e.info("[driver] Workbench contributions created.");
				}
				async setValue(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) return Promise.reject(new Error(`Element not found: ${o}`));
					const s = b;
					s.value = f;
					const l = new Event("input", { bubbles: !0, cancelable: !0 });
					s.dispatchEvent(l);
				}
				async isActiveElement(o) {
					if (
						i.$Bfb.document.querySelector(o) !== i.$Bfb.document.activeElement
					) {
						const b = [];
						let s = i.$Bfb.document.activeElement;
						for (; s; ) {
							const l = s.tagName,
								y = s.id ? `#${s.id}` : "",
								$ = (0, w.$Lb)(s.className.split(/\s+/g).map((v) => v.trim()))
									.map((v) => `.${v}`)
									.join("");
							b.unshift(`${l}${y}${$}`), (s = s.parentElement);
						}
						throw new Error(
							`Active element not found. Current active element is '${b.join(" > ")}'. Looking for ${o}`,
						);
					}
					return !0;
				}
				async getElements(o, f) {
					const b = i.$Bfb.document.querySelectorAll(o),
						s = [];
					for (let l = 0; l < b.length; l++) {
						const y = b.item(l);
						s.push(this.f(y, f));
					}
					return s;
				}
				f(o, f) {
					const b = Object.create(null);
					for (let $ = 0; $ < o.attributes.length; $++) {
						const v = o.attributes.item($);
						v && (b[v.name] = v.value);
					}
					const s = [];
					if (f)
						for (let $ = 0; $ < o.children.length; $++) {
							const v = o.children.item($);
							v && s.push(this.f(v, !0));
						}
					const { left: l, top: y } = (0, t.$qgb)(o);
					return {
						tagName: o.tagName,
						className: o.className,
						textContent: o.textContent || "",
						attributes: b,
						children: s,
						left: l,
						top: y,
					};
				}
				async getElementXY(o, f, b) {
					const s =
						typeof f == "number" && typeof b == "number"
							? { x: f, y: b }
							: void 0;
					return this.g(o, s);
				}
				async typeInEditor(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) throw new Error(`Editor not found: ${o}`);
					const s = b,
						l = s.selectionStart,
						y = l + f.length,
						$ = s.value,
						v = $.substr(0, l) + f + $.substr(l);
					(s.value = v), s.setSelectionRange(y, y);
					const S = new Event("input", { bubbles: !0, cancelable: !0 });
					s.dispatchEvent(S);
				}
				async getTerminalBuffer(o) {
					const f = i.$Bfb.document.querySelector(o);
					if (!f) throw new Error(`Terminal not found: ${o}`);
					const b = f.xterm;
					if (!b) throw new Error(`Xterm not found: ${o}`);
					const s = [];
					for (let l = 0; l < b.buffer.active.length; l++)
						s.push(b.buffer.active.getLine(l).translateToString(!0));
					return s;
				}
				async writeInTerminal(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) throw new Error(`Element not found: ${o}`);
					const s = b.xterm;
					if (!s) throw new Error(`Xterm not found: ${o}`);
					s.input(f);
				}
				getLocaleInfo() {
					return Promise.resolve({ language: E.$z, locale: E.$A });
				}
				getLocalizedStrings() {
					return Promise.resolve({
						open: m.default.open,
						close: m.default.close,
						find: m.default.find,
					});
				}
				async g(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) return Promise.reject(new Error(`Element not found: ${o}`));
					const { left: s, top: l } = (0, t.$qgb)(b),
						{ width: y, height: $ } = (0, t.$ogb)(b);
					let v, S;
					return (
						f
							? ((v = s + f.x), (S = l + f.y))
							: ((v = s + y / 2), (S = l + $ / 2)),
						(v = Math.round(v)),
						(S = Math.round(S)),
						{ x: v, y: S }
					);
				}
				async exitApplication() {}
			};
			(e.$wEb = n),
				(e.$wEb = n =
					Ne([j(0, d.$ll), j(1, C.$Ti), j(2, c.$n6), j(3, u.$ik)], n));
			function g(p) {
				Object.assign(i.$Bfb, { driver: p.createInstance(n) });
			}
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	