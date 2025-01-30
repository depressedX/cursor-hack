import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import './dompurify/dompurify.js';
import './event.js';
import './formattedTextRenderer.js';
import './keyboardEvent.js';
import './mouseEvent.js';
import './ui/iconLabel/iconLabels.js';
import '../common/errors.js';
import '../common/event.js';
import '../common/htmlContent.js';
import '../common/iconLabels.js';
import '../common/idGenerator.js';
import '../common/keyCodes.js';
import '../common/lazy.js';
import '../common/lifecycle.js';
import '../common/marked/marked.js';
import '../common/marshalling.js';
import '../common/network.js';
import '../common/objects.js';
import '../common/resources.js';
import '../common/strings.js';
import '../common/uri.js';
define(
			de[267],
			he([
				1, 0, 7, 920, 265, 595, 114, 168, 182, 29, 6, 94, 274, 584, 27, 149, 3,
				434, 197, 23, 82, 19, 37, 9,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*dompurify*/,
				w /*event*/,
				E /*formattedTextRenderer*/,
				C /*keyboardEvent*/,
				d /*mouseEvent*/,
				m /*iconLabels*/,
				r /*errors*/,
				u /*event*/,
				a /*htmlContent*/,
				h /*iconLabels*/,
				c /*idGenerator*/,
				n /*keyCodes*/,
				g /*lazy*/,
				p /*lifecycle*/,
				o /*marked*/,
				f /*marshalling*/,
				b /*network*/,
				s /*objects*/,
				l /*resources*/,
				y /*strings*/,
				$ /*uri*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vib = void 0),
					(e.$Uib = S),
					(e.$Wib = D),
					(e.$Xib = M),
					(e.$Yib = q),
					(t = mt(t)),
					(i = mt(i)),
					(o = mt(o));
				const v = Object.freeze({
					image: ({ href: Q, title: Z, text: se }) => {
						let re = [],
							le = [];
						return (
							Q &&
								(({ href: Q, dimensions: re } = (0, a.$kl)(Q)),
								le.push(`src="${(0, a.$il)(Q)}"`)),
							se && le.push(`alt="${(0, a.$il)(se)}"`),
							Z && le.push(`title="${(0, a.$il)(Z)}"`),
							re.length && (le = le.concat(re)),
							"<img " + le.join(" ") + ">"
						);
					},
					paragraph({ tokens: Q }) {
						return `<p>${this.parser.parseInline(Q)}</p>`;
					},
					link({ href: Q, title: Z, tokens: se }) {
						let re = this.parser.parseInline(se);
						return typeof Q != "string"
							? ""
							: (Q === re && (re = (0, a.$jl)(re)),
								(Z = typeof Z == "string" ? (0, a.$il)((0, a.$jl)(Z)) : ""),
								(Q = (0, a.$jl)(Q)),
								(Q = Q.replace(/&/g, "&amp;")
									.replace(/</g, "&lt;")
									.replace(/>/g, "&gt;")
									.replace(/"/g, "&quot;")
									.replace(/'/g, "&#39;")),
								`<a href="${Q}" title="${Z || Q}" draggable="false">${re}</a>`);
					},
				});
				function S(Q, Z = {}, se = {}) {
					const re = new p.$Zc();
					let le = !1;
					const oe = (0, E.$lib)(Z),
						ae = function (be) {
							let Ce;
							try {
								Ce = (0, f.$ii)(decodeURIComponent(be));
							} catch {}
							return Ce
								? ((Ce = (0, s.$xo)(Ce, (Le) => {
										if (Q.uris && Q.uris[Le]) return $.URI.revive(Q.uris[Le]);
									})),
									encodeURIComponent(JSON.stringify(Ce)))
								: be;
						},
						pe = function (be, Ce) {
							const Le = Q.uris && Q.uris[be];
							let Fe = $.URI.revive(Le);
							return Ce
								? be.startsWith(b.Schemas.data + ":")
									? be
									: (Fe || (Fe = $.URI.parse(be)),
										b.$7g.uriToBrowserUri(Fe).toString(!0))
								: !Fe || $.URI.parse(be).toString() === Fe.toString()
									? be
									: (Fe.query && (Fe = Fe.with({ query: ae(Fe.query) })),
										Fe.toString());
						},
						$e = new o.Renderer();
					($e.image = v.image),
						($e.link = v.link),
						($e.paragraph = v.paragraph);
					const ye = [],
						ue = [];
					if (
						(Z.codeBlockRendererSync
							? ($e.code = ({ text: be, lang: Ce }) => {
									const Le = c.$Sdb.nextId(),
										Fe = Z.codeBlockRendererSync(I(Ce), be);
									return (
										ue.push([Le, Fe]),
										`<div class="code" data-code="${Le}">${(0, y.$nf)(be)}</div>`
									);
								})
							: Z.codeBlockRenderer &&
								($e.code = ({ text: be, lang: Ce }) => {
									const Le = c.$Sdb.nextId(),
										Fe = Z.codeBlockRenderer(I(Ce), be);
									return (
										ye.push(Fe.then((Oe) => [Le, Oe])),
										`<div class="code" data-code="${Le}">${(0, y.$nf)(be)}</div>`
									);
								}),
						Z.actionHandler)
					) {
						const be = function (Fe) {
								let Oe = Fe.target;
								if (
									!(
										Oe.tagName !== "A" &&
										((Oe = Oe.parentElement), !Oe || Oe.tagName !== "A")
									)
								)
									try {
										let xe = Oe.dataset.href;
										xe &&
											(Q.baseUri && (xe = T($.URI.from(Q.baseUri), xe)),
											Z.actionHandler.callback(xe, Fe));
									} catch (xe) {
										(0, r.$4)(xe);
									} finally {
										Fe.preventDefault();
									}
							},
							Ce = Z.actionHandler.disposables.add(new w.$mib(oe, "click")),
							Le = Z.actionHandler.disposables.add(new w.$mib(oe, "auxclick"));
						Z.actionHandler.disposables.add(
							u.Event.any(
								Ce.event,
								Le.event,
							)((Fe) => {
								const Oe = new d.$2fb(t.getWindow(oe), Fe);
								(!Oe.leftButton && !Oe.middleButton) || be(Oe);
							}),
						),
							Z.actionHandler.disposables.add(
								t.$0fb(oe, "keydown", (Fe) => {
									const Oe = new C.$7fb(Fe);
									(!Oe.equals(n.KeyCode.Space) &&
										!Oe.equals(n.KeyCode.Enter)) ||
										be(Oe);
								}),
							);
					}
					Q.supportHtml ||
						($e.html = ({ text: be }) =>
							Z.sanitizerOptions?.replaceWithPlaintext
								? (0, y.$nf)(be)
								: (
											Q.isTrusted
												? be.match(/^(<span[^>]+>)|(<\/\s*span>)$/)
												: void 0
										)
									? be
									: ""),
						(se.renderer = $e);
					let fe = Q.value ?? "";
					fe.length > 1e5 && (fe = `${fe.substr(0, 1e5)}\u2026`),
						Q.supportThemeIcons && (fe = (0, h.$0k)(fe));
					let me;
					if (Z.fillInIncompleteTokens) {
						const be = { ...o.defaults, ...se },
							Ce = o.lexer(fe, be),
							Le = q(Ce);
						me = o.parser(Le, be);
					} else me = o.parse(fe, { ...se, async: !1 });
					Q.supportThemeIcons &&
						(me = (0, m.$Sib)(me)
							.map((Ce) => (typeof Ce == "string" ? Ce : Ce.outerHTML))
							.join(""));
					const ge = new DOMParser().parseFromString(
						k({ isTrusted: Q.isTrusted, ...Z.sanitizerOptions }, me),
						"text/html",
					);
					if (
						(ge.body
							.querySelectorAll("img, audio, video, source")
							.forEach((be) => {
								const Ce = be.getAttribute("src");
								if (Ce) {
									let Le = Ce;
									try {
										Q.baseUri && (Le = T($.URI.from(Q.baseUri), Le));
									} catch {}
									if (
										(be.setAttribute("src", pe(Le, !0)), Z.remoteImageIsAllowed)
									) {
										const Fe = $.URI.parse(Le);
										Fe.scheme !== b.Schemas.file &&
											Fe.scheme !== b.Schemas.data &&
											!Z.remoteImageIsAllowed(Fe) &&
											be.replaceWith(t.$("", void 0, be.outerHTML));
									}
								}
							}),
						ge.body.querySelectorAll("a").forEach((be) => {
							const Ce = be.getAttribute("href");
							if (
								(be.setAttribute("href", ""),
								!Ce ||
									/^data:|javascript:/i.test(Ce) ||
									(/^command:/i.test(Ce) && !Q.isTrusted) ||
									/^command:(\/\/\/)?_workbench\.downloadResource/i.test(Ce))
							)
								be.replaceWith(...be.childNodes);
							else {
								let Le = pe(Ce, !1);
								Q.baseUri && (Le = T($.URI.from(Q.baseUri), Ce)),
									(be.dataset.href = Le);
							}
						}),
						(oe.innerHTML = k(
							{ isTrusted: Q.isTrusted, ...Z.sanitizerOptions },
							ge.body.innerHTML,
						)),
						ye.length > 0)
					)
						Promise.all(ye).then((be) => {
							if (le) return;
							const Ce = new Map(be),
								Le = oe.querySelectorAll("div[data-code]");
							for (const Fe of Le) {
								const Oe = Ce.get(Fe.dataset.code ?? "");
								Oe && t.$hhb(Fe, Oe);
							}
							Z.asyncRenderCallback?.();
						});
					else if (ue.length > 0) {
						const be = new Map(ue),
							Ce = oe.querySelectorAll("div[data-code]");
						for (const Le of Ce) {
							const Fe = be.get(Le.dataset.code ?? "");
							Fe && t.$hhb(Le, Fe);
						}
					}
					if (Z.asyncRenderCallback)
						for (const be of oe.getElementsByTagName("img")) {
							const Ce = re.add(
								t.$0fb(be, "load", () => {
									Ce.dispose(), Z.asyncRenderCallback();
								}),
							);
						}
					return {
						element: oe,
						dispose: () => {
							(le = !0), re.dispose();
						},
					};
				}
				function I(Q) {
					if (!Q) return "";
					const Z = Q.split(/[\s+|:|,|\{|\?]/, 1);
					return Z.length ? Z[0] : Q;
				}
				function T(Q, Z) {
					return /^\w[\w\d+.-]*:/.test(Z)
						? Z
						: Q.path.endsWith("/")
							? (0, l.$qh)(Q, Z).toString()
							: (0, l.$qh)((0, l.$mh)(Q), Z).toString();
				}
				const P = [
					"area",
					"base",
					"br",
					"col",
					"command",
					"embed",
					"hr",
					"img",
					"input",
					"keygen",
					"link",
					"meta",
					"param",
					"source",
					"track",
					"wbr",
				];
				function k(Q, Z) {
					const { config: se, allowedSchemes: re } = L(Q),
						le = new p.$Zc();
					le.add(
						te("uponSanitizeAttribute", (oe, ae) => {
							if (ae.attrName === "style" || ae.attrName === "class") {
								if (oe.tagName === "SPAN") {
									if (ae.attrName === "style") {
										ae.keepAttr =
											/^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?(border-radius:[0-9]+px;)?$/.test(
												ae.attrValue,
											);
										return;
									} else if (ae.attrName === "class") {
										ae.keepAttr =
											/^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(
												ae.attrValue,
											);
										return;
									}
								}
								ae.keepAttr = !1;
								return;
							} else if (
								oe.tagName === "INPUT" &&
								oe.attributes.getNamedItem("type")?.value === "checkbox"
							) {
								if (
									(ae.attrName === "type" && ae.attrValue === "checkbox") ||
									ae.attrName === "disabled" ||
									ae.attrName === "checked"
								) {
									ae.keepAttr = !0;
									return;
								}
								ae.keepAttr = !1;
							}
						}),
					),
						le.add(
							te("uponSanitizeElement", (oe, ae) => {
								if (
									(ae.tagName === "input" &&
										(oe.attributes.getNamedItem("type")?.value === "checkbox"
											? oe.setAttribute("disabled", "")
											: Q.replaceWithPlaintext || oe.remove()),
									Q.replaceWithPlaintext &&
										!ae.allowedTags[ae.tagName] &&
										ae.tagName !== "body" &&
										oe.parentElement)
								) {
									let pe, $e;
									if (ae.tagName === "#comment")
										pe = `<!--${oe.textContent}-->`;
									else {
										const me = P.includes(ae.tagName),
											ve = oe.attributes.length
												? " " +
													Array.from(oe.attributes)
														.map((ge) => `${ge.name}="${ge.value}"`)
														.join(" ")
												: "";
										(pe = `<${ae.tagName}${ve}>`),
											me || ($e = `</${ae.tagName}>`);
									}
									const ye = document.createDocumentFragment(),
										ue = oe.parentElement.ownerDocument.createTextNode(pe);
									ye.appendChild(ue);
									const fe = $e
										? oe.parentElement.ownerDocument.createTextNode($e)
										: void 0;
									for (; oe.firstChild; ) ye.appendChild(oe.firstChild);
									fe && ye.appendChild(fe),
										oe.parentElement.replaceChild(ye, oe);
								}
							}),
						),
						le.add(t.$Bhb(re));
					try {
						return i.sanitize(Z, { ...se, RETURN_TRUSTED_TYPE: !0 });
					} finally {
						le.dispose();
					}
				}
				e.$Vib = [
					"align",
					"autoplay",
					"alt",
					"checked",
					"class",
					"colspan",
					"controls",
					"data-code",
					"data-href",
					"disabled",
					"draggable",
					"height",
					"href",
					"loop",
					"muted",
					"playsinline",
					"poster",
					"rowspan",
					"src",
					"style",
					"target",
					"title",
					"type",
					"width",
					"start",
				];
				function L(Q) {
					const Z = [
						b.Schemas.http,
						b.Schemas.https,
						b.Schemas.mailto,
						b.Schemas.data,
						b.Schemas.file,
						b.Schemas.vscodeFileResource,
						b.Schemas.vscodeRemote,
						b.Schemas.vscodeRemoteResource,
					];
					return (
						Q.isTrusted && Z.push(b.Schemas.command),
						{
							config: {
								ALLOWED_TAGS: Q.allowedTags ?? [...t.$Chb],
								ALLOWED_ATTR: e.$Vib,
								ALLOW_UNKNOWN_PROTOCOLS: !0,
							},
							allowedSchemes: Z,
						}
					);
				}
				function D(Q) {
					return typeof Q == "string" ? Q : M(Q);
				}
				function M(Q, Z) {
					let se = Q.value ?? "";
					se.length > 1e5 && (se = `${se.substr(0, 1e5)}\u2026`);
					const re = o
						.parse(se, { async: !1, renderer: Z ? O.value : R.value })
						.replace(/&(#\d+|[a-zA-Z]+);/g, (le) => N.get(le) ?? le);
					return k({ isTrusted: !1 }, re).toString();
				}
				const N = new Map([
					["&quot;", '"'],
					["&nbsp;", " "],
					["&amp;", "&"],
					["&#39;", "'"],
					["&lt;", "<"],
					["&gt;", ">"],
				]);
				function A() {
					const Q = new o.Renderer();
					return (
						(Q.code = ({ text: Z }) => Z),
						(Q.blockquote = ({ text: Z }) =>
							Z +
							`
`),
						(Q.html = (Z) => ""),
						(Q.heading = function ({ tokens: Z }) {
							return (
								this.parser.parseInline(Z) +
								`
`
							);
						}),
						(Q.hr = () => ""),
						(Q.list = function ({ items: Z }) {
							return (
								Z.map((se) => this.listitem(se)).join(`
`) +
								`
`
							);
						}),
						(Q.listitem = ({ text: Z }) =>
							Z +
							`
`),
						(Q.paragraph = function ({ tokens: Z }) {
							return (
								this.parser.parseInline(Z) +
								`
`
							);
						}),
						(Q.table = function ({ header: Z, rows: se }) {
							return (
								Z.map((re) => this.tablecell(re)).join(" ") +
								`
` +
								se
									.map((re) => re.map((le) => this.tablecell(le)).join(" "))
									.join(`
`) +
								`
`
							);
						}),
						(Q.tablerow = ({ text: Z }) => Z),
						(Q.tablecell = function ({ tokens: Z }) {
							return this.parser.parseInline(Z);
						}),
						(Q.strong = ({ text: Z }) => Z),
						(Q.em = ({ text: Z }) => Z),
						(Q.codespan = ({ text: Z }) => Z),
						(Q.br = (Z) => `
`),
						(Q.del = ({ text: Z }) => Z),
						(Q.image = (Z) => ""),
						(Q.text = ({ text: Z }) => Z),
						(Q.link = ({ text: Z }) => Z),
						Q
					);
				}
				const R = new g.$Y((Q) => A()),
					O = new g.$Y(() => {
						const Q = A();
						return (
							(Q.code = ({ text: Z }) => `
\`\`\`
${Z}
\`\`\`
`),
							Q
						);
					});
				function B(Q) {
					let Z = "";
					return (
						Q.forEach((se) => {
							Z += se.raw;
						}),
						Z
					);
				}
				function U(Q) {
					if (Q.tokens)
						for (let Z = Q.tokens.length - 1; Z >= 0; Z--) {
							const se = Q.tokens[Z];
							if (se.type === "text") {
								const re = se.raw.split(`
`),
									le = re[re.length - 1];
								if (le.includes("`")) return G(Q);
								if (le.includes("**")) return ie(Q);
								if (le.match(/\*\w/)) return K(Q);
								if (le.match(/(^|\s)__\w/)) return ne(Q);
								if (le.match(/(^|\s)_\w/)) return J(Q);
								if (
									z(le) ||
									(F(le) &&
										Q.tokens
											.slice(0, Z)
											.some(
												(oe) => oe.type === "text" && oe.raw.match(/\[[^\]]*$/),
											))
								) {
									const oe = Q.tokens.slice(Z + 1);
									return (oe[0]?.type === "link" &&
										oe[1]?.type === "text" &&
										oe[1].raw.match(/^ *"[^"]*$/)) ||
										le.match(/^[^"]* +"[^"]*$/)
										? X(Q)
										: W(Q);
								} else if (le.match(/(^|\s)\[\w*/)) return Y(Q);
							}
						}
				}
				function z(Q) {
					return !!Q.match(/(^|\s)\[.*\]\(\w*/);
				}
				function F(Q) {
					return !!Q.match(/^[^\[]*\]\([^\)]*$/);
				}
				function x(Q) {
					const Z = Q.items[Q.items.length - 1],
						se = Z.tokens ? Z.tokens[Z.tokens.length - 1] : void 0;
					let re;
					if (
						(se?.type === "text" && !("inRawBlock" in Z) && (re = U(se)),
						!re || re.type !== "paragraph")
					)
						return;
					const le = B(Q.items.slice(0, -1)),
						oe = Z.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
					if (!oe) return;
					const ae = oe + B(Z.tokens.slice(0, -1)) + re.raw,
						pe = o.lexer(le + ae)[0];
					if (pe.type === "list") return pe;
				}
				const H = 3;
				function q(Q) {
					for (let Z = 0; Z < H; Z++) {
						const se = V(Q);
						if (se) Q = se;
						else break;
					}
					return Q;
				}
				function V(Q) {
					let Z, se;
					for (Z = 0; Z < Q.length; Z++) {
						const re = Q[Z];
						if (re.type === "paragraph" && re.raw.match(/(\n|^)\|/)) {
							se = _(Q.slice(Z));
							break;
						}
						if (Z === Q.length - 1 && re.type === "list") {
							const le = x(re);
							if (le) {
								se = [le];
								break;
							}
						}
						if (Z === Q.length - 1 && re.type === "paragraph") {
							const le = U(re);
							if (le) {
								se = [le];
								break;
							}
						}
					}
					if (se) {
						const re = [...Q.slice(0, Z), ...se];
						return (re.links = Q.links), re;
					}
					return null;
				}
				function G(Q) {
					return ee(Q, "`");
				}
				function K(Q) {
					return ee(Q, "*");
				}
				function J(Q) {
					return ee(Q, "_");
				}
				function W(Q) {
					return ee(Q, ")");
				}
				function X(Q) {
					return ee(Q, '")');
				}
				function Y(Q) {
					return ee(Q, "](https://microsoft.com)");
				}
				function ie(Q) {
					return ee(Q, "**");
				}
				function ne(Q) {
					return ee(Q, "__");
				}
				function ee(Q, Z) {
					const se = B(Array.isArray(Q) ? Q : [Q]);
					return o.lexer(se + Z)[0];
				}
				function _(Q) {
					const Z = B(Q),
						se = Z.split(`
`);
					let re,
						le = !1;
					for (let oe = 0; oe < se.length; oe++) {
						const ae = se[oe].trim();
						if (typeof re > "u" && ae.match(/^\s*\|/)) {
							const pe = ae.match(/(\|[^\|]+)(?=\||$)/g);
							pe && (re = pe.length);
						} else if (typeof re == "number")
							if (ae.match(/^\s*\|/)) {
								if (oe !== se.length - 1) return;
								le = !0;
							} else return;
					}
					if (typeof re == "number" && re > 0) {
						const oe = le
								? se.slice(0, -1).join(`
`)
								: Z,
							ae = !!oe.match(/\|\s*$/),
							pe =
								oe +
								(ae ? "" : "|") +
								`
|${" --- |".repeat(re)}`;
						return o.lexer(pe);
					}
				}
				function te(Q, Z) {
					return i.addHook(Q, Z), (0, p.$Yc)(() => i.removeHook(Q));
				}
			},
		),
		