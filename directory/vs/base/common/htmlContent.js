define(
			de[94],
			he([1, 0, 29, 274, 19, 37, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cl = e.MarkdownStringTextNewlineStyle = void 0),
					(e.$dl = r),
					(e.$el = u),
					(e.$fl = a),
					(e.$gl = h),
					(e.$hl = c),
					(e.$il = n),
					(e.$jl = g),
					(e.$kl = p);
				var d;
				(function (o) {
					(o[(o.Paragraph = 0)] = "Paragraph"), (o[(o.Break = 1)] = "Break");
				})(d || (e.MarkdownStringTextNewlineStyle = d = {}));
				class m {
					constructor(f = "", b = !1) {
						if (((this.value = f), typeof this.value != "string"))
							throw (0, t.$$)("value");
						typeof b == "boolean"
							? ((this.isTrusted = b),
								(this.supportThemeIcons = !1),
								(this.supportHtml = !1))
							: ((this.isTrusted = b.isTrusted ?? void 0),
								(this.supportThemeIcons = b.supportThemeIcons ?? !1),
								(this.supportHtml = b.supportHtml ?? !1));
					}
					appendText(f, b = d.Paragraph) {
						return (
							(this.value += h(this.supportThemeIcons ? (0, i.$9k)(f) : f)
								.replace(/([ \t]+)/g, (s, l) => "&nbsp;".repeat(l.length))
								.replace(/\>/gm, "\\>")
								.replace(
									/\n/g,
									b === d.Break
										? `\\
`
										: `

`,
								)),
							this
						);
					}
					appendMarkdown(f) {
						return (this.value += f), this;
					}
					appendCodeblock(f, b) {
						return (
							(this.value += `
${c(b, f)}
`),
							this
						);
					}
					appendLink(f, b, s) {
						return (
							(this.value += "["),
							(this.value += this.c(b, "]")),
							(this.value += "]("),
							(this.value += this.c(String(f), ")")),
							s && (this.value += ` "${this.c(this.c(s, '"'), ")")}"`),
							(this.value += ")"),
							this
						);
					}
					c(f, b) {
						const s = new RegExp((0, E.$of)(b), "g");
						return f.replace(s, (l, y) =>
							f.charAt(y - 1) !== "\\" ? `\\${l}` : l,
						);
					}
				}
				e.$cl = m;
				function r(o) {
					return u(o) ? !o.value : Array.isArray(o) ? o.every(r) : !0;
				}
				function u(o) {
					return o instanceof m
						? !0
						: o && typeof o == "object"
							? typeof o.value == "string" &&
								(typeof o.isTrusted == "boolean" ||
									typeof o.isTrusted == "object" ||
									o.isTrusted === void 0) &&
								(typeof o.supportThemeIcons == "boolean" ||
									o.supportThemeIcons === void 0)
							: !1;
				}
				function a(o, f) {
					return o === f
						? !0
						: !o || !f
							? !1
							: o.value === f.value &&
								o.isTrusted === f.isTrusted &&
								o.supportThemeIcons === f.supportThemeIcons &&
								o.supportHtml === f.supportHtml &&
								(o.baseUri === f.baseUri ||
									(!!o.baseUri &&
										!!f.baseUri &&
										(0, w.$gh)(C.URI.from(o.baseUri), C.URI.from(f.baseUri))));
				}
				function h(o) {
					return o.replace(/[\\`*_{}[\]()#+\-!~]/g, "\\$&");
				}
				function c(o, f) {
					const b =
							o.match(/^`+/gm)?.reduce((l, y) => (l.length > y.length ? l : y))
								.length ?? 0,
						s = b >= 3 ? b + 1 : 3;
					return [`${"`".repeat(s)}${f}`, o, `${"`".repeat(s)}`].join(`
`);
				}
				function n(o) {
					return o.replace(/"/g, "&quot;");
				}
				function g(o) {
					return o && o.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, "$1");
				}
				function p(o) {
					const f = [],
						b = o.split("|").map((l) => l.trim());
					o = b[0];
					const s = b[1];
					if (s) {
						const l = /height=(\d+)/.exec(s),
							y = /width=(\d+)/.exec(s),
							$ = l ? l[1] : "",
							v = y ? y[1] : "",
							S = isFinite(parseInt(v)),
							I = isFinite(parseInt($));
						S && f.push(`width="${v}"`), I && f.push(`height="${$}"`);
					}
					return { href: o, dimensions: f };
				}
			},
		),
		