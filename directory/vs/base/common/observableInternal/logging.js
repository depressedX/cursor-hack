define(de[742], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Sd = void 0),
				(e.$Qd = i),
				(e.$Rd = w);
			let t;
			function i(g) {
				t = g;
			}
			function w() {
				return t;
			}
			class E {
				constructor() {
					(this.a = 0), (this.d = new WeakMap());
				}
				b(p) {
					return C([d(c("|  ", this.a)), p]);
				}
				c(p) {
					return p.hadValue
						? p.didChange
							? [
									d(" "),
									r(u(p.oldValue, 70), { color: "red", strikeThrough: !0 }),
									d(" "),
									r(u(p.newValue, 60), { color: "green" }),
								]
							: [d(" (unchanged)")]
						: [
								d(" "),
								r(u(p.newValue, 60), { color: "green" }),
								d(" (initial)"),
							];
				}
				handleObservableChanged(p, o) {
					console.log(
						...this.b([
							m("observable value changed"),
							r(p.debugName, { color: "BlueViolet" }),
							...this.c(o),
						]),
					);
				}
				formatChanges(p) {
					if (p.size !== 0)
						return r(
							" (changed deps: " +
								[...p].map((o) => o.debugName).join(", ") +
								")",
							{ color: "gray" },
						);
				}
				handleDerivedCreated(p) {
					const o = p.handleChange;
					this.d.set(p, new Set()),
						(p.handleChange = (f, b) => (
							this.d.get(p).add(f), o.apply(p, [f, b])
						));
				}
				handleDerivedRecomputed(p, o) {
					const f = this.d.get(p);
					console.log(
						...this.b([
							m("derived recomputed"),
							r(p.debugName, { color: "BlueViolet" }),
							...this.c(o),
							this.formatChanges(f),
							{ data: [{ fn: p._debugNameData.referenceFn ?? p._computeFn }] },
						]),
					),
						f.clear();
				}
				handleFromEventObservableTriggered(p, o) {
					console.log(
						...this.b([
							m("observable from event triggered"),
							r(p.debugName, { color: "BlueViolet" }),
							...this.c(o),
							{ data: [{ fn: p._getValue }] },
						]),
					);
				}
				handleAutorunCreated(p) {
					const o = p.handleChange;
					this.d.set(p, new Set()),
						(p.handleChange = (f, b) => (
							this.d.get(p).add(f), o.apply(p, [f, b])
						));
				}
				handleAutorunTriggered(p) {
					const o = this.d.get(p);
					console.log(
						...this.b([
							m("autorun"),
							r(p.debugName, { color: "BlueViolet" }),
							this.formatChanges(o),
							{ data: [{ fn: p._debugNameData.referenceFn ?? p._runFn }] },
						]),
					),
						o.clear(),
						this.a++;
				}
				handleAutorunFinished(p) {
					this.a--;
				}
				handleBeginTransaction(p) {
					let o = p.getDebugName();
					o === void 0 && (o = ""),
						console.log(
							...this.b([
								m("transaction"),
								r(o, { color: "BlueViolet" }),
								{ data: [{ fn: p._fn }] },
							]),
						),
						this.a++;
				}
				handleEndTransaction() {
					this.a--;
				}
			}
			e.$Sd = E;
			function C(g) {
				const p = new Array(),
					o = [];
				let f = "";
				function b(l) {
					if ("length" in l) for (const y of l) y && b(y);
					else
						"text" in l
							? ((f += `%c${l.text}`),
								p.push(l.style),
								l.data && o.push(...l.data))
							: "data" in l && o.push(...l.data);
				}
				b(g);
				const s = [f, ...p];
				return s.push(...o), s;
			}
			function d(g) {
				return r(g, { color: "black" });
			}
			function m(g) {
				return r(n(`${g}: `, 10), { color: "black", bold: !0 });
			}
			function r(g, p = { color: "black" }) {
				function o(b) {
					return Object.entries(b).reduce((s, [l, y]) => `${s}${l}:${y};`, "");
				}
				const f = { color: p.color };
				return (
					p.strikeThrough && (f["text-decoration"] = "line-through"),
					p.bold && (f["font-weight"] = "bold"),
					{ text: g, style: o(f) }
				);
			}
			function u(g, p) {
				switch (typeof g) {
					case "number":
						return "" + g;
					case "string":
						return g.length + 2 <= p ? `"${g}"` : `"${g.substr(0, p - 7)}"+...`;
					case "boolean":
						return g ? "true" : "false";
					case "undefined":
						return "undefined";
					case "object":
						return g === null ? "null" : Array.isArray(g) ? a(g, p) : h(g, p);
					case "symbol":
						return g.toString();
					case "function":
						return `[[Function${g.name ? " " + g.name : ""}]]`;
					default:
						return "" + g;
				}
			}
			function a(g, p) {
				let o = "[ ",
					f = !0;
				for (const b of g) {
					if ((f || (o += ", "), o.length - 5 > p)) {
						o += "...";
						break;
					}
					(f = !1), (o += `${u(b, p - o.length)}`);
				}
				return (o += " ]"), o;
			}
			function h(g, p) {
				let o = "{ ",
					f = !0;
				for (const [b, s] of Object.entries(g)) {
					if ((f || (o += ", "), o.length - 5 > p)) {
						o += "...";
						break;
					}
					(f = !1), (o += `${b}: ${u(s, p - o.length)}`);
				}
				return (o += " }"), o;
			}
			function c(g, p) {
				let o = "";
				for (let f = 1; f <= p; f++) o += g;
				return o;
			}
			function n(g, p) {
				for (; g.length < p; ) g += " ";
				return g;
			}
		}),
		define(
			de[1133],
			he([1, 0, 229, 3, 648, 742]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vd = void 0),
					(e.$pd = C),
					(e.$qd = d),
					(e.$rd = m),
					(e.$sd = r),
					(e.$td = u),
					(e.$ud = a);
				function C(n) {
					return new c(new w.$gd(void 0, void 0, n), n, void 0, void 0);
				}
				function d(n, g) {
					return new c(
						new w.$gd(n.owner, n.debugName, n.debugReferenceFn ?? g),
						g,
						void 0,
						void 0,
					);
				}
				function m(n, g) {
					return new c(
						new w.$gd(n.owner, n.debugName, n.debugReferenceFn ?? g),
						g,
						n.createEmptyChangeSummary,
						n.handleChange,
					);
				}
				function r(n, g) {
					const p = new i.$Zc(),
						o = m(
							{
								owner: n.owner,
								debugName: n.debugName,
								debugReferenceFn: n.debugReferenceFn ?? g,
								createEmptyChangeSummary: n.createEmptyChangeSummary,
								handleChange: n.handleChange,
							},
							(f, b) => {
								p.clear(), g(f, b, p);
							},
						);
					return (0, i.$Yc)(() => {
						o.dispose(), p.dispose();
					});
				}
				function u(n) {
					const g = new i.$Zc(),
						p = d(
							{ owner: void 0, debugName: void 0, debugReferenceFn: n },
							(o) => {
								g.clear(), n(o, g);
							},
						);
					return (0, i.$Yc)(() => {
						p.dispose(), g.dispose();
					});
				}
				function a(n, g) {
					let p;
					return d({ debugReferenceFn: g }, (o) => {
						const f = n.read(o),
							b = p;
						(p = f), g({ lastValue: b, newValue: f });
					});
				}
				var h;
				(function (n) {
					(n[(n.dependenciesMightHaveChanged = 1)] =
						"dependenciesMightHaveChanged"),
						(n[(n.stale = 2)] = "stale"),
						(n[(n.upToDate = 3)] = "upToDate");
				})(h || (h = {}));
				class c {
					get debugName() {
						return this._debugNameData.getDebugName(this) ?? "(anonymous)";
					}
					constructor(g, p, o, f) {
						(this._debugNameData = g),
							(this._runFn = p),
							(this.h = o),
							(this.i = f),
							(this.a = h.stale),
							(this.b = 0),
							(this.c = !1),
							(this.e = new Set()),
							(this.f = new Set()),
							(this.g = this.h?.()),
							(0, E.$Rd)()?.handleAutorunCreated(this),
							this.j(),
							(0, i.$Rc)(this);
					}
					dispose() {
						this.c = !0;
						for (const g of this.e) g.removeObserver(this);
						this.e.clear(), (0, i.$Sc)(this);
					}
					j() {
						if (this.a === h.upToDate) return;
						const g = this.f;
						(this.f = this.e), (this.e = g), (this.a = h.upToDate);
						const p = this.c;
						try {
							if (!p) {
								(0, E.$Rd)()?.handleAutorunTriggered(this);
								const o = this.g;
								(this.g = this.h?.()), this._runFn(this, o);
							}
						} finally {
							p || (0, E.$Rd)()?.handleAutorunFinished(this);
							for (const o of this.f) o.removeObserver(this);
							this.f.clear();
						}
					}
					toString() {
						return `Autorun<${this.debugName}>`;
					}
					beginUpdate() {
						this.a === h.upToDate && (this.a = h.dependenciesMightHaveChanged),
							this.b++;
					}
					endUpdate() {
						if (this.b === 1)
							do {
								if (this.a === h.dependenciesMightHaveChanged) {
									this.a = h.upToDate;
									for (const g of this.e)
										if ((g.reportChanges(), this.a === h.stale)) break;
								}
								this.j();
							} while (this.a !== h.upToDate);
						this.b--, (0, t.$nd)(() => this.b >= 0);
					}
					handlePossibleChange(g) {
						this.a === h.upToDate &&
							this.e.has(g) &&
							!this.f.has(g) &&
							(this.a = h.dependenciesMightHaveChanged);
					}
					handleChange(g, p) {
						this.e.has(g) &&
							!this.f.has(g) &&
							(!this.i ||
								this.i(
									{
										changedObservable: g,
										change: p,
										didChange: (f) => f === g,
									},
									this.g,
								)) &&
							(this.a = h.stale);
					}
					readObservable(g) {
						if (this.c) return g.get();
						g.addObserver(this);
						const p = g.get();
						return this.e.add(g), this.f.delete(g), p;
					}
				}
				(e.$vd = c),
					(function (n) {
						n.Observer = c;
					})(C || (e.$pd = C = {}));
			},
		),
		