import '../../../require.js';
import '../../../exports.js';
import './dom.js';
define(de[595], he([1, 0, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jib = i),
				(e.$kib = w),
				(e.$lib = E),
				(t = mt(t));
			function i(h, c = {}) {
				const n = E(c);
				return (n.textContent = h), n;
			}
			function w(h, c = {}) {
				const n = E(c);
				return (
					m(
						n,
						r(h, !!c.renderCodeSegments),
						c.actionHandler,
						c.renderCodeSegments,
					),
					n
				);
			}
			function E(h) {
				const c = h.inline ? "span" : "div",
					n = document.createElement(c);
				return h.className && (n.className = h.className), n;
			}
			class C {
				constructor(c) {
					(this.b = c), (this.c = 0);
				}
				eos() {
					return this.c >= this.b.length;
				}
				next() {
					const c = this.peek();
					return this.advance(), c;
				}
				peek() {
					return this.b[this.c];
				}
				advance() {
					this.c++;
				}
			}
			var d;
			(function (h) {
				(h[(h.Invalid = 0)] = "Invalid"),
					(h[(h.Root = 1)] = "Root"),
					(h[(h.Text = 2)] = "Text"),
					(h[(h.Bold = 3)] = "Bold"),
					(h[(h.Italics = 4)] = "Italics"),
					(h[(h.Action = 5)] = "Action"),
					(h[(h.ActionClose = 6)] = "ActionClose"),
					(h[(h.Code = 7)] = "Code"),
					(h[(h.NewLine = 8)] = "NewLine");
			})(d || (d = {}));
			function m(h, c, n, g) {
				let p;
				if (c.type === d.Text) p = document.createTextNode(c.content || "");
				else if (c.type === d.Bold) p = document.createElement("b");
				else if (c.type === d.Italics) p = document.createElement("i");
				else if (c.type === d.Code && g) p = document.createElement("code");
				else if (c.type === d.Action && n) {
					const o = document.createElement("a");
					n.disposables.add(
						t.$$fb(o, "click", (f) => {
							n.callback(String(c.index), f);
						}),
					),
						(p = o);
				} else
					c.type === d.NewLine
						? (p = document.createElement("br"))
						: c.type === d.Root && (p = h);
				p && h !== p && h.appendChild(p),
					p &&
						Array.isArray(c.children) &&
						c.children.forEach((o) => {
							m(p, o, n, g);
						});
			}
			function r(h, c) {
				const n = { type: d.Root, children: [] };
				let g = 0,
					p = n;
				const o = [],
					f = new C(h);
				for (; !f.eos(); ) {
					let b = f.next();
					const s = b === "\\" && a(f.peek(), c) !== d.Invalid;
					if ((s && (b = f.next()), !s && u(b, c) && b === f.peek())) {
						f.advance(), p.type === d.Text && (p = o.pop());
						const l = a(b, c);
						if (p.type === l || (p.type === d.Action && l === d.ActionClose))
							p = o.pop();
						else {
							const y = { type: l, children: [] };
							l === d.Action && ((y.index = g), g++),
								p.children.push(y),
								o.push(p),
								(p = y);
						}
					} else if (
						b ===
						`
`
					)
						p.type === d.Text && (p = o.pop()),
							p.children.push({ type: d.NewLine });
					else if (p.type !== d.Text) {
						const l = { type: d.Text, content: b };
						p.children.push(l), o.push(p), (p = l);
					} else p.content += b;
				}
				return p.type === d.Text && (p = o.pop()), o.length, n;
			}
			function u(h, c) {
				return a(h, c) !== d.Invalid;
			}
			function a(h, c) {
				switch (h) {
					case "*":
						return d.Bold;
					case "_":
						return d.Italics;
					case "[":
						return d.Action;
					case "]":
						return d.ActionClose;
					case "`":
						return c ? d.Code : d.Invalid;
					default:
						return d.Invalid;
				}
			}
		}),
		