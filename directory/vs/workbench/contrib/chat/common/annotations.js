define(de[982], he([1, 0, 94, 19, 9, 441]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5Tb = void 0),
				(e.$6Tb = C),
				(e.$7Tb = d),
				(e.$8Tb = m),
				(e.$5Tb = "http://_vscodecontentref_");
			function C(r) {
				const u = [];
				for (const a of r) {
					const h = u[u.length - 1];
					if (a.kind === "inlineReference") {
						const c =
								"uri" in a.inlineReference
									? a.inlineReference
									: { uri: a.inlineReference },
							n = w.URI.parse(e.$5Tb).with({ fragment: JSON.stringify(c) }),
							g = `[${a.name || ((0, i.$kh))(c.uri)}](${n.toString()})`;
						if (h?.kind === "markdownContent") {
							const p = (0, E.$_2)(h.content, new t.$cl(g));
							u[u.length - 1] = { content: p, kind: "markdownContent" };
						} else u.push({ content: new t.$cl(g), kind: "markdownContent" });
					} else if (
						a.kind === "markdownContent" &&
						h?.kind === "markdownContent" &&
						(0, E.$$2)(h.content, a.content)
					) {
						const c = (0, E.$_2)(h.content, a.content);
						u[u.length - 1] = { content: c, kind: "markdownContent" };
					} else if (a.kind === "markdownVuln") {
						const n = `<vscode_annotation details='${encodeURIComponent(JSON.stringify(a.vulnerabilities))}'>${a.content.value}</vscode_annotation>`;
						if (h?.kind === "markdownContent") {
							const g = (0, E.$_2)(h.content, new t.$cl(n));
							u[u.length - 1] = { content: g, kind: "markdownContent" };
						} else u.push({ content: new t.$cl(n), kind: "markdownContent" });
					} else u.push(a);
				}
				return u;
			}
			function d(r) {
				const u = [];
				for (const a of r) {
					const h = u[u.length - 1];
					if (a.kind === "markdownContent")
						h?.kind === "markdownContent"
							? (u[u.length - 1] = {
									content: new t.$cl(h.content.value + a.content.value, {
										isTrusted: h.content.isTrusted,
									}),
									kind: "markdownContent",
								})
							: u.push(a);
					else if (a.kind === "markdownVuln") {
						const n = `<vscode_annotation details='${encodeURIComponent(JSON.stringify(a.vulnerabilities))}'>${a.content.value}</vscode_annotation>`;
						h?.kind === "markdownContent"
							? (u[u.length - 1] = {
									content: new t.$cl(h.content.value + n, {
										isTrusted: h.content.isTrusted,
									}),
									kind: "markdownContent",
								})
							: u.push({ content: new t.$cl(n), kind: "markdownContent" });
					}
				}
				return u;
			}
			function m(r) {
				const u = [];
				let a = r,
					h;
				for (
					;
					(h =
						/<vscode_annotation details='(.*?)'>(.*?)<\/vscode_annotation>/ms.exec(
							a,
						)) !== null;
				) {
					const [c, n, g] = h,
						p = h.index,
						o = a.substring(0, p),
						f =
							o.split(`
`).length - 1,
						b =
							g.split(`
`).length - 1,
						s = o.lastIndexOf(`
`),
						l = p - (s + 1) + 1,
						y = (o + g).lastIndexOf(`
`),
						$ = p + g.length - (y + 1) + 1;
					try {
						JSON.parse(decodeURIComponent(n)).forEach(
							({ title: S, description: I }) =>
								u.push({
									title: S,
									description: I,
									range: {
										startLineNumber: f + 1,
										startColumn: l,
										endLineNumber: f + b + 1,
										endColumn: $,
									},
								}),
						);
					} catch {}
					a = a.substring(0, p) + g + a.substring(p + c.length);
				}
				return { newText: a, vulnerabilities: u };
			}
		}),
		