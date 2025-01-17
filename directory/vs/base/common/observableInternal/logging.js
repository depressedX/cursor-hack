import '../../../../require.js';
import '../../../../exports.js';
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
		