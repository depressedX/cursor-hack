import '../../../../exports.js';
define(de[434], he([0]), e)
				: typeof exports == "object" && typeof module < "u"
					? e(exports)
					: ((ce /*exports*/ = typeof globalThis < "u" ? globalThis : ce || self),
						e((ce.marked = {})));
		})(this, function (ce) {
			"use strict";
			function e() {
				return {
					async: !1,
					breaks: !1,
					extensions: null,
					gfm: !0,
					hooks: null,
					pedantic: !1,
					renderer: null,
					silent: !1,
					tokenizer: null,
					walkTokens: null,
				};
			}
			ce.defaults = e();
			function t(Ie) {
				ce.defaults = Ie;
			}
			const i = /[&<>"']/,
				w = new RegExp(i.source, "g"),
				E = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
				C = new RegExp(E.source, "g"),
				d = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
				},
				m = (Ie) => d[Ie];
			function r(Ie, Be) {
				if (Be) {
					if (i.test(Ie)) return Ie.replace(w, m);
				} else if (E.test(Ie)) return Ie.replace(C, m);
				return Ie;
			}
			const u = /(^|[^\[])\^/g;
			function a(Ie, Be) {
				let Se = typeof Ie == "string" ? Ie : Ie.source;
				Be = Be || "";
				const ke = {
					replace: (Ue, qe) => {
						let Ae = typeof qe == "string" ? qe : qe.source;
						return (Ae = Ae.replace(u, "$1")), (Se = Se.replace(Ue, Ae)), ke;
					},
					getRegex: () => new RegExp(Se, Be),
				};
				return ke;
			}
			function h(Ie) {
				try {
					Ie = encodeURI(Ie).replace(/%25/g, "%");
				} catch {
					return null;
				}
				return Ie;
			}
			const c = { exec: () => null };
			function n(Ie, Be) {
				const Se = Ie.replace(/\|/g, (qe, Ae, Me) => {
						let De = !1,
							Re = Ae;
						for (; --Re >= 0 && Me[Re] === "\\"; ) De = !De;
						return De ? "|" : " |";
					}),
					ke = Se.split(/ \|/);
				let Ue = 0;
				if (
					(ke[0].trim() || ke.shift(),
					ke.length > 0 && !ke[ke.length - 1].trim() && ke.pop(),
					Be)
				)
					if (ke.length > Be) ke.splice(Be);
					else for (; ke.length < Be; ) ke.push("");
				for (; Ue < ke.length; Ue++)
					ke[Ue] = ke[Ue].trim().replace(/\\\|/g, "|");
				return ke;
			}
			function g(Ie, Be, Se) {
				const ke = Ie.length;
				if (ke === 0) return "";
				let Ue = 0;
				for (; Ue < ke; ) {
					const qe = Ie.charAt(ke - Ue - 1);
					if (qe === Be && !Se) Ue++;
					else if (qe !== Be && Se) Ue++;
					else break;
				}
				return Ie.slice(0, ke - Ue);
			}
			function p(Ie, Be) {
				if (Ie.indexOf(Be[1]) === -1) return -1;
				let Se = 0;
				for (let ke = 0; ke < Ie.length; ke++)
					if (Ie[ke] === "\\") ke++;
					else if (Ie[ke] === Be[0]) Se++;
					else if (Ie[ke] === Be[1] && (Se--, Se < 0)) return ke;
				return -1;
			}
			function o(Ie, Be, Se, ke) {
				const Ue = Be.href,
					qe = Be.title ? r(Be.title) : null,
					Ae = Ie[1].replace(/\\([\[\]])/g, "$1");
				if (Ie[0].charAt(0) !== "!") {
					ke.state.inLink = !0;
					const Me = {
						type: "link",
						raw: Se,
						href: Ue,
						title: qe,
						text: Ae,
						tokens: ke.inlineTokens(Ae),
					};
					return (ke.state.inLink = !1), Me;
				}
				return { type: "image", raw: Se, href: Ue, title: qe, text: r(Ae) };
			}
			function f(Ie, Be) {
				const Se = Ie.match(/^(\s+)(?:```)/);
				if (Se === null) return Be;
				const ke = Se[1];
				return Be.split(`
`)
					.map((Ue) => {
						const qe = Ue.match(/^\s+/);
						if (qe === null) return Ue;
						const [Ae] = qe;
						return Ae.length >= ke.length ? Ue.slice(ke.length) : Ue;
					})
					.join(`
`);
			}
			class b {
				options;
				rules;
				lexer;
				constructor(Be) {
					this.options = Be || ce.defaults;
				}
				space(Be) {
					const Se = this.rules.block.newline.exec(Be);
					if (Se && Se[0].length > 0) return { type: "space", raw: Se[0] };
				}
				code(Be) {
					const Se = this.rules.block.code.exec(Be);
					if (Se) {
						const ke = Se[0].replace(/^ {1,4}/gm, "");
						return {
							type: "code",
							raw: Se[0],
							codeBlockStyle: "indented",
							text: this.options.pedantic
								? ke
								: g(
										ke,
										`
`,
									),
						};
					}
				}
				fences(Be) {
					const Se = this.rules.block.fences.exec(Be);
					if (Se) {
						const ke = Se[0],
							Ue = f(ke, Se[3] || "");
						return {
							type: "code",
							raw: ke,
							lang: Se[2]
								? Se[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
								: Se[2],
							text: Ue,
						};
					}
				}
				heading(Be) {
					const Se = this.rules.block.heading.exec(Be);
					if (Se) {
						let ke = Se[2].trim();
						if (/#$/.test(ke)) {
							const Ue = g(ke, "#");
							(this.options.pedantic || !Ue || / $/.test(Ue)) &&
								(ke = Ue.trim());
						}
						return {
							type: "heading",
							raw: Se[0],
							depth: Se[1].length,
							text: ke,
							tokens: this.lexer.inline(ke),
						};
					}
				}
				hr(Be) {
					const Se = this.rules.block.hr.exec(Be);
					if (Se)
						return {
							type: "hr",
							raw: g(
								Se[0],
								`
`,
							),
						};
				}
				blockquote(Be) {
					const Se = this.rules.block.blockquote.exec(Be);
					if (Se) {
						let ke = g(
								Se[0],
								`
`,
							).split(`
`),
							Ue = "",
							qe = "";
						const Ae = [];
						for (; ke.length > 0; ) {
							let Me = !1;
							const De = [];
							let Re;
							for (Re = 0; Re < ke.length; Re++)
								if (/^ {0,3}>/.test(ke[Re])) De.push(ke[Re]), (Me = !0);
								else if (!Me) De.push(ke[Re]);
								else break;
							ke = ke.slice(Re);
							const je = De.join(`
`),
								Ve = je
									.replace(
										/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
										`
    $1`,
									)
									.replace(/^ {0,3}>[ \t]?/gm, "");
							(Ue = Ue
								? `${Ue}
${je}`
								: je),
								(qe = qe
									? `${qe}
${Ve}`
									: Ve);
							const Ze = this.lexer.state.top;
							if (
								((this.lexer.state.top = !0),
								this.lexer.blockTokens(Ve, Ae, !0),
								(this.lexer.state.top = Ze),
								ke.length === 0)
							)
								break;
							const et = Ae[Ae.length - 1];
							if (et?.type === "code") break;
							if (et?.type === "blockquote") {
								const rt = et,
									ft =
										rt.raw +
										`
` +
										ke.join(`
`),
									bt = this.blockquote(ft);
								(Ae[Ae.length - 1] = bt),
									(Ue = Ue.substring(0, Ue.length - rt.raw.length) + bt.raw),
									(qe = qe.substring(0, qe.length - rt.text.length) + bt.text);
								break;
							} else if (et?.type === "list") {
								const rt = et,
									ft =
										rt.raw +
										`
` +
										ke.join(`
`),
									bt = this.list(ft);
								(Ae[Ae.length - 1] = bt),
									(Ue = Ue.substring(0, Ue.length - et.raw.length) + bt.raw),
									(qe = qe.substring(0, qe.length - rt.raw.length) + bt.raw),
									(ke = ft.substring(Ae[Ae.length - 1].raw.length).split(`
`));
								continue;
							}
						}
						return { type: "blockquote", raw: Ue, tokens: Ae, text: qe };
					}
				}
				list(Be) {
					let Se = this.rules.block.list.exec(Be);
					if (Se) {
						let ke = Se[1].trim();
						const Ue = ke.length > 1,
							qe = {
								type: "list",
								raw: "",
								ordered: Ue,
								start: Ue ? +ke.slice(0, -1) : "",
								loose: !1,
								items: [],
							};
						(ke = Ue ? `\\d{1,9}\\${ke.slice(-1)}` : `\\${ke}`),
							this.options.pedantic && (ke = Ue ? ke : "[*+-]");
						const Ae = new RegExp(`^( {0,3}${ke})((?:[	 ][^\\n]*)?(?:\\n|$))`);
						let Me = !1;
						for (; Be; ) {
							let De = !1,
								Re = "",
								je = "";
							if (!(Se = Ae.exec(Be)) || this.rules.block.hr.test(Be)) break;
							(Re = Se[0]), (Be = Be.substring(Re.length));
							let Ve = Se[2]
									.split(
										`
`,
										1,
									)[0]
									.replace(/^\t+/, (nt) => " ".repeat(3 * nt.length)),
								Ze = Be.split(
									`
`,
									1,
								)[0],
								et = !Ve.trim(),
								rt = 0;
							if (
								(this.options.pedantic
									? ((rt = 2), (je = Ve.trimStart()))
									: et
										? (rt = Se[1].length + 1)
										: ((rt = Se[2].search(/[^ ]/)),
											(rt = rt > 4 ? 1 : rt),
											(je = Ve.slice(rt)),
											(rt += Se[1].length)),
								et &&
									/^ *$/.test(Ze) &&
									((Re +=
										Ze +
										`
`),
									(Be = Be.substring(Ze.length + 1)),
									(De = !0)),
								!De)
							) {
								const nt = new RegExp(
										`^ {0,${Math.min(3, rt - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
									),
									lt = new RegExp(
										`^ {0,${Math.min(3, rt - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
									),
									ct = new RegExp(`^ {0,${Math.min(3, rt - 1)}}(?:\`\`\`|~~~)`),
									gt = new RegExp(`^ {0,${Math.min(3, rt - 1)}}#`);
								for (; Be; ) {
									const ht = Be.split(
										`
`,
										1,
									)[0];
									if (
										((Ze = ht),
										this.options.pedantic &&
											(Ze = Ze.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
										ct.test(Ze) || gt.test(Ze) || nt.test(Ze) || lt.test(Be))
									)
										break;
									if (Ze.search(/[^ ]/) >= rt || !Ze.trim())
										je +=
											`
` + Ze.slice(rt);
									else {
										if (
											et ||
											Ve.search(/[^ ]/) >= 4 ||
											ct.test(Ve) ||
											gt.test(Ve) ||
											lt.test(Ve)
										)
											break;
										je +=
											`
` + Ze;
									}
									!et && !Ze.trim() && (et = !0),
										(Re +=
											ht +
											`
`),
										(Be = Be.substring(ht.length + 1)),
										(Ve = Ze.slice(rt));
								}
							}
							qe.loose ||
								(Me ? (qe.loose = !0) : /\n *\n *$/.test(Re) && (Me = !0));
							let ft = null,
								bt;
							this.options.gfm &&
								((ft = /^\[[ xX]\] /.exec(je)),
								ft &&
									((bt = ft[0] !== "[ ] "),
									(je = je.replace(/^\[[ xX]\] +/, "")))),
								qe.items.push({
									type: "list_item",
									raw: Re,
									task: !!ft,
									checked: bt,
									loose: !1,
									text: je,
									tokens: [],
								}),
								(qe.raw += Re);
						}
						(qe.items[qe.items.length - 1].raw =
							qe.items[qe.items.length - 1].raw.trimEnd()),
							(qe.items[qe.items.length - 1].text =
								qe.items[qe.items.length - 1].text.trimEnd()),
							(qe.raw = qe.raw.trimEnd());
						for (let De = 0; De < qe.items.length; De++)
							if (
								((this.lexer.state.top = !1),
								(qe.items[De].tokens = this.lexer.blockTokens(
									qe.items[De].text,
									[],
								)),
								!qe.loose)
							) {
								const Re = qe.items[De].tokens.filter(
										(Ve) => Ve.type === "space",
									),
									je = Re.length > 0 && Re.some((Ve) => /\n.*\n/.test(Ve.raw));
								qe.loose = je;
							}
						if (qe.loose)
							for (let De = 0; De < qe.items.length; De++)
								qe.items[De].loose = !0;
						return qe;
					}
				}
				html(Be) {
					const Se = this.rules.block.html.exec(Be);
					if (Se)
						return {
							type: "html",
							block: !0,
							raw: Se[0],
							pre: Se[1] === "pre" || Se[1] === "script" || Se[1] === "style",
							text: Se[0],
						};
				}
				def(Be) {
					const Se = this.rules.block.def.exec(Be);
					if (Se) {
						const ke = Se[1].toLowerCase().replace(/\s+/g, " "),
							Ue = Se[2]
								? Se[2]
										.replace(/^<(.*)>$/, "$1")
										.replace(this.rules.inline.anyPunctuation, "$1")
								: "",
							qe = Se[3]
								? Se[3]
										.substring(1, Se[3].length - 1)
										.replace(this.rules.inline.anyPunctuation, "$1")
								: Se[3];
						return { type: "def", tag: ke, raw: Se[0], href: Ue, title: qe };
					}
				}
				table(Be) {
					const Se = this.rules.block.table.exec(Be);
					if (!Se || !/[:|]/.test(Se[2])) return;
					const ke = n(Se[1]),
						Ue = Se[2].replace(/^\||\| *$/g, "").split("|"),
						qe =
							Se[3] && Se[3].trim()
								? Se[3].replace(/\n[ \t]*$/, "").split(`
`)
								: [],
						Ae = { type: "table", raw: Se[0], header: [], align: [], rows: [] };
					if (ke.length === Ue.length) {
						for (const Me of Ue)
							/^ *-+: *$/.test(Me)
								? Ae.align.push("right")
								: /^ *:-+: *$/.test(Me)
									? Ae.align.push("center")
									: /^ *:-+ *$/.test(Me)
										? Ae.align.push("left")
										: Ae.align.push(null);
						for (let Me = 0; Me < ke.length; Me++)
							Ae.header.push({
								text: ke[Me],
								tokens: this.lexer.inline(ke[Me]),
								header: !0,
								align: Ae.align[Me],
							});
						for (const Me of qe)
							Ae.rows.push(
								n(Me, Ae.header.length).map((De, Re) => ({
									text: De,
									tokens: this.lexer.inline(De),
									header: !1,
									align: Ae.align[Re],
								})),
							);
						return Ae;
					}
				}
				lheading(Be) {
					const Se = this.rules.block.lheading.exec(Be);
					if (Se)
						return {
							type: "heading",
							raw: Se[0],
							depth: Se[2].charAt(0) === "=" ? 1 : 2,
							text: Se[1],
							tokens: this.lexer.inline(Se[1]),
						};
				}
				paragraph(Be) {
					const Se = this.rules.block.paragraph.exec(Be);
					if (Se) {
						const ke =
							Se[1].charAt(Se[1].length - 1) ===
							`
`
								? Se[1].slice(0, -1)
								: Se[1];
						return {
							type: "paragraph",
							raw: Se[0],
							text: ke,
							tokens: this.lexer.inline(ke),
						};
					}
				}
				text(Be) {
					const Se = this.rules.block.text.exec(Be);
					if (Se)
						return {
							type: "text",
							raw: Se[0],
							text: Se[0],
							tokens: this.lexer.inline(Se[0]),
						};
				}
				escape(Be) {
					const Se = this.rules.inline.escape.exec(Be);
					if (Se) return { type: "escape", raw: Se[0], text: r(Se[1]) };
				}
				tag(Be) {
					const Se = this.rules.inline.tag.exec(Be);
					if (Se)
						return (
							!this.lexer.state.inLink && /^<a /i.test(Se[0])
								? (this.lexer.state.inLink = !0)
								: this.lexer.state.inLink &&
									/^<\/a>/i.test(Se[0]) &&
									(this.lexer.state.inLink = !1),
							!this.lexer.state.inRawBlock &&
							/^<(pre|code|kbd|script)(\s|>)/i.test(Se[0])
								? (this.lexer.state.inRawBlock = !0)
								: this.lexer.state.inRawBlock &&
									/^<\/(pre|code|kbd|script)(\s|>)/i.test(Se[0]) &&
									(this.lexer.state.inRawBlock = !1),
							{
								type: "html",
								raw: Se[0],
								inLink: this.lexer.state.inLink,
								inRawBlock: this.lexer.state.inRawBlock,
								block: !1,
								text: Se[0],
							}
						);
				}
				link(Be) {
					const Se = this.rules.inline.link.exec(Be);
					if (Se) {
						const ke = Se[2].trim();
						if (!this.options.pedantic && /^</.test(ke)) {
							if (!/>$/.test(ke)) return;
							const Ae = g(ke.slice(0, -1), "\\");
							if ((ke.length - Ae.length) % 2 === 0) return;
						} else {
							const Ae = p(Se[2], "()");
							if (Ae > -1) {
								const De =
									(Se[0].indexOf("!") === 0 ? 5 : 4) + Se[1].length + Ae;
								(Se[2] = Se[2].substring(0, Ae)),
									(Se[0] = Se[0].substring(0, De).trim()),
									(Se[3] = "");
							}
						}
						let Ue = Se[2],
							qe = "";
						if (this.options.pedantic) {
							const Ae = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(Ue);
							Ae && ((Ue = Ae[1]), (qe = Ae[3]));
						} else qe = Se[3] ? Se[3].slice(1, -1) : "";
						return (
							(Ue = Ue.trim()),
							/^</.test(Ue) &&
								(this.options.pedantic && !/>$/.test(ke)
									? (Ue = Ue.slice(1))
									: (Ue = Ue.slice(1, -1))),
							o(
								Se,
								{
									href:
										Ue && Ue.replace(this.rules.inline.anyPunctuation, "$1"),
									title:
										qe && qe.replace(this.rules.inline.anyPunctuation, "$1"),
								},
								Se[0],
								this.lexer,
							)
						);
					}
				}
				reflink(Be, Se) {
					let ke;
					if (
						(ke = this.rules.inline.reflink.exec(Be)) ||
						(ke = this.rules.inline.nolink.exec(Be))
					) {
						const Ue = (ke[2] || ke[1]).replace(/\s+/g, " "),
							qe = Se[Ue.toLowerCase()];
						if (!qe) {
							const Ae = ke[0].charAt(0);
							return { type: "text", raw: Ae, text: Ae };
						}
						return o(ke, qe, ke[0], this.lexer);
					}
				}
				emStrong(Be, Se, ke = "") {
					let Ue = this.rules.inline.emStrongLDelim.exec(Be);
					if (!Ue || (Ue[3] && ke.match(/[\p{L}\p{N}]/u))) return;
					if (
						!(Ue[1] || Ue[2] || "") ||
						!ke ||
						this.rules.inline.punctuation.exec(ke)
					) {
						const Ae = [...Ue[0]].length - 1;
						let Me,
							De,
							Re = Ae,
							je = 0;
						const Ve =
							Ue[0][0] === "*"
								? this.rules.inline.emStrongRDelimAst
								: this.rules.inline.emStrongRDelimUnd;
						for (
							Ve.lastIndex = 0, Se = Se.slice(-1 * Be.length + Ae);
							(Ue = Ve.exec(Se)) != null;
						) {
							if (
								((Me = Ue[1] || Ue[2] || Ue[3] || Ue[4] || Ue[5] || Ue[6]), !Me)
							)
								continue;
							if (((De = [...Me].length), Ue[3] || Ue[4])) {
								Re += De;
								continue;
							} else if ((Ue[5] || Ue[6]) && Ae % 3 && !((Ae + De) % 3)) {
								je += De;
								continue;
							}
							if (((Re -= De), Re > 0)) continue;
							De = Math.min(De, De + Re + je);
							const Ze = [...Ue[0]][0].length,
								et = Be.slice(0, Ae + Ue.index + Ze + De);
							if (Math.min(Ae, De) % 2) {
								const ft = et.slice(1, -1);
								return {
									type: "em",
									raw: et,
									text: ft,
									tokens: this.lexer.inlineTokens(ft),
								};
							}
							const rt = et.slice(2, -2);
							return {
								type: "strong",
								raw: et,
								text: rt,
								tokens: this.lexer.inlineTokens(rt),
							};
						}
					}
				}
				codespan(Be) {
					const Se = this.rules.inline.code.exec(Be);
					if (Se) {
						let ke = Se[2].replace(/\n/g, " ");
						const Ue = /[^ ]/.test(ke),
							qe = /^ /.test(ke) && / $/.test(ke);
						return (
							Ue && qe && (ke = ke.substring(1, ke.length - 1)),
							(ke = r(ke, !0)),
							{ type: "codespan", raw: Se[0], text: ke }
						);
					}
				}
				br(Be) {
					const Se = this.rules.inline.br.exec(Be);
					if (Se) return { type: "br", raw: Se[0] };
				}
				del(Be) {
					const Se = this.rules.inline.del.exec(Be);
					if (Se)
						return {
							type: "del",
							raw: Se[0],
							text: Se[2],
							tokens: this.lexer.inlineTokens(Se[2]),
						};
				}
				autolink(Be) {
					const Se = this.rules.inline.autolink.exec(Be);
					if (Se) {
						let ke, Ue;
						return (
							Se[2] === "@"
								? ((ke = r(Se[1])), (Ue = "mailto:" + ke))
								: ((ke = r(Se[1])), (Ue = ke)),
							{
								type: "link",
								raw: Se[0],
								text: ke,
								href: Ue,
								tokens: [{ type: "text", raw: ke, text: ke }],
							}
						);
					}
				}
				url(Be) {
					let Se;
					if ((Se = this.rules.inline.url.exec(Be))) {
						let ke, Ue;
						if (Se[2] === "@") (ke = r(Se[0])), (Ue = "mailto:" + ke);
						else {
							let qe;
							do
								(qe = Se[0]),
									(Se[0] = this.rules.inline._backpedal.exec(Se[0])?.[0] ?? "");
							while (qe !== Se[0]);
							(ke = r(Se[0])),
								Se[1] === "www." ? (Ue = "http://" + Se[0]) : (Ue = Se[0]);
						}
						return {
							type: "link",
							raw: Se[0],
							text: ke,
							href: Ue,
							tokens: [{ type: "text", raw: ke, text: ke }],
						};
					}
				}
				inlineText(Be) {
					const Se = this.rules.inline.text.exec(Be);
					if (Se) {
						let ke;
						return (
							this.lexer.state.inRawBlock ? (ke = Se[0]) : (ke = r(Se[0])),
							{ type: "text", raw: Se[0], text: ke }
						);
					}
				}
			}
			const s = /^(?: *(?:\n|$))+/,
				l = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
				y =
					/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
				$ =
					/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
				v = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
				S = /(?:[*+-]|\d{1,9}[.)])/,
				I = a(
					/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
				)
					.replace(/bull/g, S)
					.replace(/blockCode/g, / {4}/)
					.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
					.replace(/blockquote/g, / {0,3}>/)
					.replace(/heading/g, / {0,3}#{1,6}/)
					.replace(/html/g, / {0,3}<[^\n>]+>\n/)
					.getRegex(),
				T =
					/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
				P = /^[^\n]+/,
				k = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
				L = a(
					/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
				)
					.replace("label", k)
					.replace(
						"title",
						/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
					)
					.getRegex(),
				D = a(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
					.replace(/bull/g, S)
					.getRegex(),
				M =
					"address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
				N = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
				A = a(
					"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
					"i",
				)
					.replace("comment", N)
					.replace("tag", M)
					.replace(
						"attribute",
						/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
					)
					.getRegex(),
				R = a(T)
					.replace("hr", $)
					.replace("heading", " {0,3}#{1,6}(?:\\s|$)")
					.replace("|lheading", "")
					.replace("|table", "")
					.replace("blockquote", " {0,3}>")
					.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
					.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
					.replace(
						"html",
						"</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
					)
					.replace("tag", M)
					.getRegex(),
				B = {
					blockquote: a(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
						.replace("paragraph", R)
						.getRegex(),
					code: l,
					def: L,
					fences: y,
					heading: v,
					hr: $,
					html: A,
					lheading: I,
					list: D,
					newline: s,
					paragraph: R,
					table: c,
					text: P,
				},
				U = a(
					"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
				)
					.replace("hr", $)
					.replace("heading", " {0,3}#{1,6}(?:\\s|$)")
					.replace("blockquote", " {0,3}>")
					.replace("code", " {4}[^\\n]")
					.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
					.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
					.replace(
						"html",
						"</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
					)
					.replace("tag", M)
					.getRegex(),
				z = {
					...B,
					table: U,
					paragraph: a(T)
						.replace("hr", $)
						.replace("heading", " {0,3}#{1,6}(?:\\s|$)")
						.replace("|lheading", "")
						.replace("table", U)
						.replace("blockquote", " {0,3}>")
						.replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
						.replace("list", " {0,3}(?:[*+-]|1[.)]) ")
						.replace(
							"html",
							"</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
						)
						.replace("tag", M)
						.getRegex(),
				},
				F = {
					...B,
					html: a(
						`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
					)
						.replace("comment", N)
						.replace(
							/tag/g,
							"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
						)
						.getRegex(),
					def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
					heading: /^(#{1,6})(.*)(?:\n+|$)/,
					fences: c,
					lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
					paragraph: a(T)
						.replace("hr", $)
						.replace(
							"heading",
							` *#{1,6} *[^
]`,
						)
						.replace("lheading", I)
						.replace("|table", "")
						.replace("blockquote", " {0,3}>")
						.replace("|fences", "")
						.replace("|list", "")
						.replace("|html", "")
						.replace("|tag", "")
						.getRegex(),
				},
				x = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
				H = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
				q = /^( {2,}|\\)\n(?!\s*$)/,
				V =
					/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
				G = "\\p{P}\\p{S}",
				K = a(/^((?![*_])[\spunctuation])/, "u")
					.replace(/punctuation/g, G)
					.getRegex(),
				J = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
				W = a(
					/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
					"u",
				)
					.replace(/punct/g, G)
					.getRegex(),
				X = a(
					"^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
					"gu",
				)
					.replace(/punct/g, G)
					.getRegex(),
				Y = a(
					"^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
					"gu",
				)
					.replace(/punct/g, G)
					.getRegex(),
				ie = a(/\\([punct])/, "gu")
					.replace(/punct/g, G)
					.getRegex(),
				ne = a(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
					.replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
					.replace(
						"email",
						/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
					)
					.getRegex(),
				ee = a(N).replace("(?:-->|$)", "-->").getRegex(),
				_ = a(
					"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
				)
					.replace("comment", ee)
					.replace(
						"attribute",
						/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
					)
					.getRegex(),
				te = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
				Q = a(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
					.replace("label", te)
					.replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
					.replace(
						"title",
						/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
					)
					.getRegex(),
				Z = a(/^!?\[(label)\]\[(ref)\]/)
					.replace("label", te)
					.replace("ref", k)
					.getRegex(),
				se = a(/^!?\[(ref)\](?:\[\])?/)
					.replace("ref", k)
					.getRegex(),
				re = a("reflink|nolink(?!\\()", "g")
					.replace("reflink", Z)
					.replace("nolink", se)
					.getRegex(),
				le = {
					_backpedal: c,
					anyPunctuation: ie,
					autolink: ne,
					blockSkip: J,
					br: q,
					code: H,
					del: c,
					emStrongLDelim: W,
					emStrongRDelimAst: X,
					emStrongRDelimUnd: Y,
					escape: x,
					link: Q,
					nolink: se,
					punctuation: K,
					reflink: Z,
					reflinkSearch: re,
					tag: _,
					text: V,
					url: c,
				},
				oe = {
					...le,
					link: a(/^!?\[(label)\]\((.*?)\)/)
						.replace("label", te)
						.getRegex(),
					reflink: a(/^!?\[(label)\]\s*\[([^\]]*)\]/)
						.replace("label", te)
						.getRegex(),
				},
				ae = {
					...le,
					escape: a(x).replace("])", "~|])").getRegex(),
					url: a(
						/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
						"i",
					)
						.replace(
							"email",
							/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
						)
						.getRegex(),
					_backpedal:
						/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
					del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
					text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
				},
				pe = {
					...ae,
					br: a(q).replace("{2,}", "*").getRegex(),
					text: a(ae.text)
						.replace("\\b_", "\\b_| {2,}\\n")
						.replace(/\{2,\}/g, "*")
						.getRegex(),
				},
				$e = { normal: B, gfm: z, pedantic: F },
				ye = { normal: le, gfm: ae, breaks: pe, pedantic: oe };
			class ue {
				tokens;
				options;
				state;
				tokenizer;
				inlineQueue;
				constructor(Be) {
					(this.tokens = []),
						(this.tokens.links = Object.create(null)),
						(this.options = Be || ce.defaults),
						(this.options.tokenizer = this.options.tokenizer || new b()),
						(this.tokenizer = this.options.tokenizer),
						(this.tokenizer.options = this.options),
						(this.tokenizer.lexer = this),
						(this.inlineQueue = []),
						(this.state = { inLink: !1, inRawBlock: !1, top: !0 });
					const Se = { block: $e.normal, inline: ye.normal };
					this.options.pedantic
						? ((Se.block = $e.pedantic), (Se.inline = ye.pedantic))
						: this.options.gfm &&
							((Se.block = $e.gfm),
							this.options.breaks
								? (Se.inline = ye.breaks)
								: (Se.inline = ye.gfm)),
						(this.tokenizer.rules = Se);
				}
				static get rules() {
					return { block: $e, inline: ye };
				}
				static lex(Be, Se) {
					return new ue(Se).lex(Be);
				}
				static lexInline(Be, Se) {
					return new ue(Se).inlineTokens(Be);
				}
				lex(Be) {
					(Be = Be.replace(
						/\r\n|\r/g,
						`
`,
					)),
						this.blockTokens(Be, this.tokens);
					for (let Se = 0; Se < this.inlineQueue.length; Se++) {
						const ke = this.inlineQueue[Se];
						this.inlineTokens(ke.src, ke.tokens);
					}
					return (this.inlineQueue = []), this.tokens;
				}
				blockTokens(Be, Se = [], ke = !1) {
					this.options.pedantic
						? (Be = Be.replace(/\t/g, "    ").replace(/^ +$/gm, ""))
						: (Be = Be.replace(
								/^( *)(\t+)/gm,
								(Me, De, Re) => De + "    ".repeat(Re.length),
							));
					let Ue, qe, Ae;
					for (; Be; )
						if (
							!(
								this.options.extensions &&
								this.options.extensions.block &&
								this.options.extensions.block.some((Me) =>
									(Ue = Me.call({ lexer: this }, Be, Se))
										? ((Be = Be.substring(Ue.raw.length)), Se.push(Ue), !0)
										: !1,
								)
							)
						) {
							if ((Ue = this.tokenizer.space(Be))) {
								(Be = Be.substring(Ue.raw.length)),
									Ue.raw.length === 1 && Se.length > 0
										? (Se[Se.length - 1].raw += `
`)
										: Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.code(Be))) {
								(Be = Be.substring(Ue.raw.length)),
									(qe = Se[Se.length - 1]),
									qe && (qe.type === "paragraph" || qe.type === "text")
										? ((qe.raw +=
												`
` + Ue.raw),
											(qe.text +=
												`
` + Ue.text),
											(this.inlineQueue[this.inlineQueue.length - 1].src =
												qe.text))
										: Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.fences(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.heading(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.hr(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.blockquote(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.list(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.html(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.def(Be))) {
								(Be = Be.substring(Ue.raw.length)),
									(qe = Se[Se.length - 1]),
									qe && (qe.type === "paragraph" || qe.type === "text")
										? ((qe.raw +=
												`
` + Ue.raw),
											(qe.text +=
												`
` + Ue.raw),
											(this.inlineQueue[this.inlineQueue.length - 1].src =
												qe.text))
										: this.tokens.links[Ue.tag] ||
											(this.tokens.links[Ue.tag] = {
												href: Ue.href,
												title: Ue.title,
											});
								continue;
							}
							if ((Ue = this.tokenizer.table(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if ((Ue = this.tokenizer.lheading(Be))) {
								(Be = Be.substring(Ue.raw.length)), Se.push(Ue);
								continue;
							}
							if (
								((Ae = Be),
								this.options.extensions && this.options.extensions.startBlock)
							) {
								let Me = 1 / 0;
								const De = Be.slice(1);
								let Re;
								this.options.extensions.startBlock.forEach((je) => {
									(Re = je.call({ lexer: this }, De)),
										typeof Re == "number" && Re >= 0 && (Me = Math.min(Me, Re));
								}),
									Me < 1 / 0 && Me >= 0 && (Ae = Be.substring(0, Me + 1));
							}
							if (this.state.top && (Ue = this.tokenizer.paragraph(Ae))) {
								(qe = Se[Se.length - 1]),
									ke && qe?.type === "paragraph"
										? ((qe.raw +=
												`
` + Ue.raw),
											(qe.text +=
												`
` + Ue.text),
											this.inlineQueue.pop(),
											(this.inlineQueue[this.inlineQueue.length - 1].src =
												qe.text))
										: Se.push(Ue),
									(ke = Ae.length !== Be.length),
									(Be = Be.substring(Ue.raw.length));
								continue;
							}
							if ((Ue = this.tokenizer.text(Be))) {
								(Be = Be.substring(Ue.raw.length)),
									(qe = Se[Se.length - 1]),
									qe && qe.type === "text"
										? ((qe.raw +=
												`
` + Ue.raw),
											(qe.text +=
												`
` + Ue.text),
											this.inlineQueue.pop(),
											(this.inlineQueue[this.inlineQueue.length - 1].src =
												qe.text))
										: Se.push(Ue);
								continue;
							}
							if (Be) {
								const Me = "Infinite loop on byte: " + Be.charCodeAt(0);
								if (this.options.silent) {
									console.error(Me);
									break;
								} else throw new Error(Me);
							}
						}
					return (this.state.top = !0), Se;
				}
				inline(Be, Se = []) {
					return this.inlineQueue.push({ src: Be, tokens: Se }), Se;
				}
				inlineTokens(Be, Se = []) {
					let ke,
						Ue,
						qe,
						Ae = Be,
						Me,
						De,
						Re;
					if (this.tokens.links) {
						const je = Object.keys(this.tokens.links);
						if (je.length > 0)
							for (
								;
								(Me = this.tokenizer.rules.inline.reflinkSearch.exec(Ae)) !=
								null;
							)
								je.includes(Me[0].slice(Me[0].lastIndexOf("[") + 1, -1)) &&
									(Ae =
										Ae.slice(0, Me.index) +
										"[" +
										"a".repeat(Me[0].length - 2) +
										"]" +
										Ae.slice(
											this.tokenizer.rules.inline.reflinkSearch.lastIndex,
										));
					}
					for (
						;
						(Me = this.tokenizer.rules.inline.blockSkip.exec(Ae)) != null;
					)
						Ae =
							Ae.slice(0, Me.index) +
							"[" +
							"a".repeat(Me[0].length - 2) +
							"]" +
							Ae.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
					for (
						;
						(Me = this.tokenizer.rules.inline.anyPunctuation.exec(Ae)) != null;
					)
						Ae =
							Ae.slice(0, Me.index) +
							"++" +
							Ae.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
					for (; Be; )
						if (
							(De || (Re = ""),
							(De = !1),
							!(
								this.options.extensions &&
								this.options.extensions.inline &&
								this.options.extensions.inline.some((je) =>
									(ke = je.call({ lexer: this }, Be, Se))
										? ((Be = Be.substring(ke.raw.length)), Se.push(ke), !0)
										: !1,
								)
							))
						) {
							if ((ke = this.tokenizer.escape(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.tag(Be))) {
								(Be = Be.substring(ke.raw.length)),
									(Ue = Se[Se.length - 1]),
									Ue && ke.type === "text" && Ue.type === "text"
										? ((Ue.raw += ke.raw), (Ue.text += ke.text))
										: Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.link(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.reflink(Be, this.tokens.links))) {
								(Be = Be.substring(ke.raw.length)),
									(Ue = Se[Se.length - 1]),
									Ue && ke.type === "text" && Ue.type === "text"
										? ((Ue.raw += ke.raw), (Ue.text += ke.text))
										: Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.emStrong(Be, Ae, Re))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.codespan(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.br(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.del(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if ((ke = this.tokenizer.autolink(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if (!this.state.inLink && (ke = this.tokenizer.url(Be))) {
								(Be = Be.substring(ke.raw.length)), Se.push(ke);
								continue;
							}
							if (
								((qe = Be),
								this.options.extensions && this.options.extensions.startInline)
							) {
								let je = 1 / 0;
								const Ve = Be.slice(1);
								let Ze;
								this.options.extensions.startInline.forEach((et) => {
									(Ze = et.call({ lexer: this }, Ve)),
										typeof Ze == "number" && Ze >= 0 && (je = Math.min(je, Ze));
								}),
									je < 1 / 0 && je >= 0 && (qe = Be.substring(0, je + 1));
							}
							if ((ke = this.tokenizer.inlineText(qe))) {
								(Be = Be.substring(ke.raw.length)),
									ke.raw.slice(-1) !== "_" && (Re = ke.raw.slice(-1)),
									(De = !0),
									(Ue = Se[Se.length - 1]),
									Ue && Ue.type === "text"
										? ((Ue.raw += ke.raw), (Ue.text += ke.text))
										: Se.push(ke);
								continue;
							}
							if (Be) {
								const je = "Infinite loop on byte: " + Be.charCodeAt(0);
								if (this.options.silent) {
									console.error(je);
									break;
								} else throw new Error(je);
							}
						}
					return Se;
				}
			}
			class fe {
				options;
				parser;
				constructor(Be) {
					this.options = Be || ce.defaults;
				}
				space(Be) {
					return "";
				}
				code({ text: Be, lang: Se, escaped: ke }) {
					const Ue = (Se || "").match(/^\S*/)?.[0],
						qe =
							Be.replace(/\n$/, "") +
							`
`;
					return Ue
						? '<pre><code class="language-' +
								r(Ue) +
								'">' +
								(ke ? qe : r(qe, !0)) +
								`</code></pre>
`
						: "<pre><code>" +
								(ke ? qe : r(qe, !0)) +
								`</code></pre>
`;
				}
				blockquote({ tokens: Be }) {
					return `<blockquote>
${this.parser.parse(Be)}</blockquote>
`;
				}
				html({ text: Be }) {
					return Be;
				}
				heading({ tokens: Be, depth: Se }) {
					return `<h${Se}>${this.parser.parseInline(Be)}</h${Se}>
`;
				}
				hr(Be) {
					return `<hr>
`;
				}
				list(Be) {
					const Se = Be.ordered,
						ke = Be.start;
					let Ue = "";
					for (let Me = 0; Me < Be.items.length; Me++) {
						const De = Be.items[Me];
						Ue += this.listitem(De);
					}
					const qe = Se ? "ol" : "ul",
						Ae = Se && ke !== 1 ? ' start="' + ke + '"' : "";
					return (
						"<" +
						qe +
						Ae +
						`>
` +
						Ue +
						"</" +
						qe +
						`>
`
					);
				}
				listitem(Be) {
					let Se = "";
					if (Be.task) {
						const ke = this.checkbox({ checked: !!Be.checked });
						Be.loose
							? Be.tokens.length > 0 && Be.tokens[0].type === "paragraph"
								? ((Be.tokens[0].text = ke + " " + Be.tokens[0].text),
									Be.tokens[0].tokens &&
										Be.tokens[0].tokens.length > 0 &&
										Be.tokens[0].tokens[0].type === "text" &&
										(Be.tokens[0].tokens[0].text =
											ke + " " + Be.tokens[0].tokens[0].text))
								: Be.tokens.unshift({
										type: "text",
										raw: ke + " ",
										text: ke + " ",
									})
							: (Se += ke + " ");
					}
					return (
						(Se += this.parser.parse(Be.tokens, !!Be.loose)),
						`<li>${Se}</li>
`
					);
				}
				checkbox({ checked: Be }) {
					return (
						"<input " +
						(Be ? 'checked="" ' : "") +
						'disabled="" type="checkbox">'
					);
				}
				paragraph({ tokens: Be }) {
					return `<p>${this.parser.parseInline(Be)}</p>
`;
				}
				table(Be) {
					let Se = "",
						ke = "";
					for (let qe = 0; qe < Be.header.length; qe++)
						ke += this.tablecell(Be.header[qe]);
					Se += this.tablerow({ text: ke });
					let Ue = "";
					for (let qe = 0; qe < Be.rows.length; qe++) {
						const Ae = Be.rows[qe];
						ke = "";
						for (let Me = 0; Me < Ae.length; Me++) ke += this.tablecell(Ae[Me]);
						Ue += this.tablerow({ text: ke });
					}
					return (
						Ue && (Ue = `<tbody>${Ue}</tbody>`),
						`<table>
<thead>
` +
							Se +
							`</thead>
` +
							Ue +
							`</table>
`
					);
				}
				tablerow({ text: Be }) {
					return `<tr>
${Be}</tr>
`;
				}
				tablecell(Be) {
					const Se = this.parser.parseInline(Be.tokens),
						ke = Be.header ? "th" : "td";
					return (
						(Be.align ? `<${ke} align="${Be.align}">` : `<${ke}>`) +
						Se +
						`</${ke}>
`
					);
				}
				strong({ tokens: Be }) {
					return `<strong>${this.parser.parseInline(Be)}</strong>`;
				}
				em({ tokens: Be }) {
					return `<em>${this.parser.parseInline(Be)}</em>`;
				}
				codespan({ text: Be }) {
					return `<code>${Be}</code>`;
				}
				br(Be) {
					return "<br>";
				}
				del({ tokens: Be }) {
					return `<del>${this.parser.parseInline(Be)}</del>`;
				}
				link({ href: Be, title: Se, tokens: ke }) {
					const Ue = this.parser.parseInline(ke),
						qe = h(Be);
					if (qe === null) return Ue;
					Be = qe;
					let Ae = '<a href="' + Be + '"';
					return (
						Se && (Ae += ' title="' + Se + '"'), (Ae += ">" + Ue + "</a>"), Ae
					);
				}
				image({ href: Be, title: Se, text: ke }) {
					const Ue = h(Be);
					if (Ue === null) return ke;
					Be = Ue;
					let qe = `<img src="${Be}" alt="${ke}"`;
					return Se && (qe += ` title="${Se}"`), (qe += ">"), qe;
				}
				text(Be) {
					return "tokens" in Be && Be.tokens
						? this.parser.parseInline(Be.tokens)
						: Be.text;
				}
			}
			class me {
				strong({ text: Be }) {
					return Be;
				}
				em({ text: Be }) {
					return Be;
				}
				codespan({ text: Be }) {
					return Be;
				}
				del({ text: Be }) {
					return Be;
				}
				html({ text: Be }) {
					return Be;
				}
				text({ text: Be }) {
					return Be;
				}
				link({ text: Be }) {
					return "" + Be;
				}
				image({ text: Be }) {
					return "" + Be;
				}
				br() {
					return "";
				}
			}
			class ve {
				options;
				renderer;
				textRenderer;
				constructor(Be) {
					(this.options = Be || ce.defaults),
						(this.options.renderer = this.options.renderer || new fe()),
						(this.renderer = this.options.renderer),
						(this.renderer.options = this.options),
						(this.renderer.parser = this),
						(this.textRenderer = new me());
				}
				static parse(Be, Se) {
					return new ve(Se).parse(Be);
				}
				static parseInline(Be, Se) {
					return new ve(Se).parseInline(Be);
				}
				parse(Be, Se = !0) {
					let ke = "";
					for (let Ue = 0; Ue < Be.length; Ue++) {
						const qe = Be[Ue];
						if (
							this.options.extensions &&
							this.options.extensions.renderers &&
							this.options.extensions.renderers[qe.type]
						) {
							const Me = qe,
								De = this.options.extensions.renderers[Me.type].call(
									{ parser: this },
									Me,
								);
							if (
								De !== !1 ||
								![
									"space",
									"hr",
									"heading",
									"code",
									"table",
									"blockquote",
									"list",
									"html",
									"paragraph",
									"text",
								].includes(Me.type)
							) {
								ke += De || "";
								continue;
							}
						}
						const Ae = qe;
						switch (Ae.type) {
							case "space": {
								ke += this.renderer.space(Ae);
								continue;
							}
							case "hr": {
								ke += this.renderer.hr(Ae);
								continue;
							}
							case "heading": {
								ke += this.renderer.heading(Ae);
								continue;
							}
							case "code": {
								ke += this.renderer.code(Ae);
								continue;
							}
							case "table": {
								ke += this.renderer.table(Ae);
								continue;
							}
							case "blockquote": {
								ke += this.renderer.blockquote(Ae);
								continue;
							}
							case "list": {
								ke += this.renderer.list(Ae);
								continue;
							}
							case "html": {
								ke += this.renderer.html(Ae);
								continue;
							}
							case "paragraph": {
								ke += this.renderer.paragraph(Ae);
								continue;
							}
							case "text": {
								let Me = Ae,
									De = this.renderer.text(Me);
								for (; Ue + 1 < Be.length && Be[Ue + 1].type === "text"; )
									(Me = Be[++Ue]),
										(De +=
											`
` + this.renderer.text(Me));
								Se
									? (ke += this.renderer.paragraph({
											type: "paragraph",
											raw: De,
											text: De,
											tokens: [{ type: "text", raw: De, text: De }],
										}))
									: (ke += De);
								continue;
							}
							default: {
								const Me = 'Token with "' + Ae.type + '" type was not found.';
								if (this.options.silent) return console.error(Me), "";
								throw new Error(Me);
							}
						}
					}
					return ke;
				}
				parseInline(Be, Se) {
					Se = Se || this.renderer;
					let ke = "";
					for (let Ue = 0; Ue < Be.length; Ue++) {
						const qe = Be[Ue];
						if (
							this.options.extensions &&
							this.options.extensions.renderers &&
							this.options.extensions.renderers[qe.type]
						) {
							const Me = this.options.extensions.renderers[qe.type].call(
								{ parser: this },
								qe,
							);
							if (
								Me !== !1 ||
								![
									"escape",
									"html",
									"link",
									"image",
									"strong",
									"em",
									"codespan",
									"br",
									"del",
									"text",
								].includes(qe.type)
							) {
								ke += Me || "";
								continue;
							}
						}
						const Ae = qe;
						switch (Ae.type) {
							case "escape": {
								ke += Se.text(Ae);
								break;
							}
							case "html": {
								ke += Se.html(Ae);
								break;
							}
							case "link": {
								ke += Se.link(Ae);
								break;
							}
							case "image": {
								ke += Se.image(Ae);
								break;
							}
							case "strong": {
								ke += Se.strong(Ae);
								break;
							}
							case "em": {
								ke += Se.em(Ae);
								break;
							}
							case "codespan": {
								ke += Se.codespan(Ae);
								break;
							}
							case "br": {
								ke += Se.br(Ae);
								break;
							}
							case "del": {
								ke += Se.del(Ae);
								break;
							}
							case "text": {
								ke += Se.text(Ae);
								break;
							}
							default: {
								const Me = 'Token with "' + Ae.type + '" type was not found.';
								if (this.options.silent) return console.error(Me), "";
								throw new Error(Me);
							}
						}
					}
					return ke;
				}
			}
			class ge {
				options;
				constructor(Be) {
					this.options = Be || ce.defaults;
				}
				static passThroughHooks = new Set([
					"preprocess",
					"postprocess",
					"processAllTokens",
				]);
				preprocess(Be) {
					return Be;
				}
				postprocess(Be) {
					return Be;
				}
				processAllTokens(Be) {
					return Be;
				}
			}
			class be {
				defaults = e();
				options = this.setOptions;
				parse = this.parseMarkdown(ue.lex, ve.parse);
				parseInline = this.parseMarkdown(ue.lexInline, ve.parseInline);
				Parser = ve;
				Renderer = fe;
				TextRenderer = me;
				Lexer = ue;
				Tokenizer = b;
				Hooks = ge;
				constructor(...Be) {
					this.use(...Be);
				}
				walkTokens(Be, Se) {
					let ke = [];
					for (const Ue of Be)
						switch (((ke = ke.concat(Se.call(this, Ue))), Ue.type)) {
							case "table": {
								const qe = Ue;
								for (const Ae of qe.header)
									ke = ke.concat(this.walkTokens(Ae.tokens, Se));
								for (const Ae of qe.rows)
									for (const Me of Ae)
										ke = ke.concat(this.walkTokens(Me.tokens, Se));
								break;
							}
							case "list": {
								const qe = Ue;
								ke = ke.concat(this.walkTokens(qe.items, Se));
								break;
							}
							default: {
								const qe = Ue;
								this.defaults.extensions?.childTokens?.[qe.type]
									? this.defaults.extensions.childTokens[qe.type].forEach(
											(Ae) => {
												const Me = qe[Ae].flat(1 / 0);
												ke = ke.concat(this.walkTokens(Me, Se));
											},
										)
									: qe.tokens &&
										(ke = ke.concat(this.walkTokens(qe.tokens, Se)));
							}
						}
					return ke;
				}
				use(...Be) {
					const Se = this.defaults.extensions || {
						renderers: {},
						childTokens: {},
					};
					return (
						Be.forEach((ke) => {
							const Ue = { ...ke };
							if (
								((Ue.async = this.defaults.async || Ue.async || !1),
								ke.extensions &&
									(ke.extensions.forEach((qe) => {
										if (!qe.name) throw new Error("extension name required");
										if ("renderer" in qe) {
											const Ae = Se.renderers[qe.name];
											Ae
												? (Se.renderers[qe.name] = function (...Me) {
														let De = qe.renderer.apply(this, Me);
														return De === !1 && (De = Ae.apply(this, Me)), De;
													})
												: (Se.renderers[qe.name] = qe.renderer);
										}
										if ("tokenizer" in qe) {
											if (
												!qe.level ||
												(qe.level !== "block" && qe.level !== "inline")
											)
												throw new Error(
													"extension level must be 'block' or 'inline'",
												);
											const Ae = Se[qe.level];
											Ae
												? Ae.unshift(qe.tokenizer)
												: (Se[qe.level] = [qe.tokenizer]),
												qe.start &&
													(qe.level === "block"
														? Se.startBlock
															? Se.startBlock.push(qe.start)
															: (Se.startBlock = [qe.start])
														: qe.level === "inline" &&
															(Se.startInline
																? Se.startInline.push(qe.start)
																: (Se.startInline = [qe.start])));
										}
										"childTokens" in qe &&
											qe.childTokens &&
											(Se.childTokens[qe.name] = qe.childTokens);
									}),
									(Ue.extensions = Se)),
								ke.renderer)
							) {
								const qe = this.defaults.renderer || new fe(this.defaults);
								for (const Ae in ke.renderer) {
									if (!(Ae in qe))
										throw new Error(`renderer '${Ae}' does not exist`);
									if (["options", "parser"].includes(Ae)) continue;
									const Me = Ae,
										De = ke.renderer[Me],
										Re = qe[Me];
									qe[Me] = (...je) => {
										let Ve = De.apply(qe, je);
										return Ve === !1 && (Ve = Re.apply(qe, je)), Ve || "";
									};
								}
								Ue.renderer = qe;
							}
							if (ke.tokenizer) {
								const qe = this.defaults.tokenizer || new b(this.defaults);
								for (const Ae in ke.tokenizer) {
									if (!(Ae in qe))
										throw new Error(`tokenizer '${Ae}' does not exist`);
									if (["options", "rules", "lexer"].includes(Ae)) continue;
									const Me = Ae,
										De = ke.tokenizer[Me],
										Re = qe[Me];
									qe[Me] = (...je) => {
										let Ve = De.apply(qe, je);
										return Ve === !1 && (Ve = Re.apply(qe, je)), Ve;
									};
								}
								Ue.tokenizer = qe;
							}
							if (ke.hooks) {
								const qe = this.defaults.hooks || new ge();
								for (const Ae in ke.hooks) {
									if (!(Ae in qe))
										throw new Error(`hook '${Ae}' does not exist`);
									if (Ae === "options") continue;
									const Me = Ae,
										De = ke.hooks[Me],
										Re = qe[Me];
									ge.passThroughHooks.has(Ae)
										? (qe[Me] = (je) => {
												if (this.defaults.async)
													return Promise.resolve(De.call(qe, je)).then((Ze) =>
														Re.call(qe, Ze),
													);
												const Ve = De.call(qe, je);
												return Re.call(qe, Ve);
											})
										: (qe[Me] = (...je) => {
												let Ve = De.apply(qe, je);
												return Ve === !1 && (Ve = Re.apply(qe, je)), Ve;
											});
								}
								Ue.hooks = qe;
							}
							if (ke.walkTokens) {
								const qe = this.defaults.walkTokens,
									Ae = ke.walkTokens;
								Ue.walkTokens = function (Me) {
									let De = [];
									return (
										De.push(Ae.call(this, Me)),
										qe && (De = De.concat(qe.call(this, Me))),
										De
									);
								};
							}
							this.defaults = { ...this.defaults, ...Ue };
						}),
						this
					);
				}
				setOptions(Be) {
					return (this.defaults = { ...this.defaults, ...Be }), this;
				}
				lexer(Be, Se) {
					return ue.lex(Be, Se ?? this.defaults);
				}
				parser(Be, Se) {
					return ve.parse(Be, Se ?? this.defaults);
				}
				parseMarkdown(Be, Se) {
					return (Ue, qe) => {
						const Ae = { ...qe },
							Me = { ...this.defaults, ...Ae },
							De = this.onError(!!Me.silent, !!Me.async);
						if (this.defaults.async === !0 && Ae.async === !1)
							return De(
								new Error(
									"marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
								),
							);
						if (typeof Ue > "u" || Ue === null)
							return De(
								new Error("marked(): input parameter is undefined or null"),
							);
						if (typeof Ue != "string")
							return De(
								new Error(
									"marked(): input parameter is of type " +
										Object.prototype.toString.call(Ue) +
										", string expected",
								),
							);
						if ((Me.hooks && (Me.hooks.options = Me), Me.async))
							return Promise.resolve(Me.hooks ? Me.hooks.preprocess(Ue) : Ue)
								.then((Re) => Be(Re, Me))
								.then((Re) => (Me.hooks ? Me.hooks.processAllTokens(Re) : Re))
								.then((Re) =>
									Me.walkTokens
										? Promise.all(this.walkTokens(Re, Me.walkTokens)).then(
												() => Re,
											)
										: Re,
								)
								.then((Re) => Se(Re, Me))
								.then((Re) => (Me.hooks ? Me.hooks.postprocess(Re) : Re))
								.catch(De);
						try {
							Me.hooks && (Ue = Me.hooks.preprocess(Ue));
							let Re = Be(Ue, Me);
							Me.hooks && (Re = Me.hooks.processAllTokens(Re)),
								Me.walkTokens && this.walkTokens(Re, Me.walkTokens);
							let je = Se(Re, Me);
							return Me.hooks && (je = Me.hooks.postprocess(je)), je;
						} catch (Re) {
							return De(Re);
						}
					};
				}
				onError(Be, Se) {
					return (ke) => {
						if (
							((ke.message += `
Please report this to https://github.com/markedjs/marked.`),
							Be)
						) {
							const Ue =
								"<p>An error occurred:</p><pre>" +
								r(ke.message + "", !0) +
								"</pre>";
							return Se ? Promise.resolve(Ue) : Ue;
						}
						if (Se) return Promise.reject(ke);
						throw ke;
					};
				}
			}
			const Ce = new be();
			function Le(Ie, Be) {
				return Ce.parse(Ie, Be);
			}
			(Le.options = Le.setOptions =
				function (Ie) {
					return (
						Ce.setOptions(Ie), (Le.defaults = Ce.defaults), t(Le.defaults), Le
					);
				}),
				(Le.getDefaults = e),
				(Le.defaults = ce.defaults),
				(Le.use = function (...Ie) {
					return Ce.use(...Ie), (Le.defaults = Ce.defaults), t(Le.defaults), Le;
				}),
				(Le.walkTokens = function (Ie, Be) {
					return Ce.walkTokens(Ie, Be);
				}),
				(Le.parseInline = Ce.parseInline),
				(Le.Parser = ve),
				(Le.parser = ve.parse),
				(Le.Renderer = fe),
				(Le.TextRenderer = me),
				(Le.Lexer = ue),
				(Le.lexer = ue.lex),
				(Le.Tokenizer = b),
				(Le.Hooks = ge),
				(Le.parse = Le);
			const Fe = Le.options,
				Oe = Le.setOptions,
				xe = Le.use,
				He = Le.walkTokens,
				Ke = Le.parseInline,
				Je = Le,
				Te = ve.parse,
				Ee = ue.lex;
			(ce.Hooks = ge),
				(ce.Lexer = ue),
				(ce.Marked = be),
				(ce.Parser = ve),
				(ce.Renderer = fe),
				(ce.TextRenderer = me),
				(ce.Tokenizer = b),
				(ce.getDefaults = e),
				(ce.lexer = Ee),
				(ce.marked = Le),
				(ce.options = Fe),
				(ce.parse = Je),
				(ce.parseInline = Ke),
				(ce.parser = Te),
				(ce.setOptions = Oe),
				(ce.use = xe),
				(ce.walkTokens = He);
		}),
		