define(de[3050], he([1, 0, 3, 77, 184, 112]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$w2c = void 0);
			let C = class extends t.$1c {
				constructor(m, r) {
					super(), (this.a = r);
					const u = (0, i.observableFromEvent)(
						this,
						r.onSoundEnabledChanged(w.$Twb.onDebugBreak),
						() => r.isSoundEnabled(w.$Twb.onDebugBreak),
					);
					this.D(
						(0, i.autorunWithStore)((a, h) => {
							if (!u.read(a)) return;
							const c = new Map();
							h.add(
								(0, t.$Yc)(() => {
									c.forEach((n) => n.dispose()), c.clear();
								}),
							),
								h.add(m.onDidNewSession((n) => c.set(n, this.b(n)))),
								h.add(
									m.onDidEndSession(({ session: n }) => {
										c.get(n)?.dispose(), c.delete(n);
									}),
								),
								m
									.getModel()
									.getSessions()
									.forEach((n) => c.set(n, this.b(n)));
						}),
					);
				}
				b(m) {
					return m.onDidChangeState((r) => {
						const u = m.getStoppedDetails();
						u &&
							u.reason === "breakpoint" &&
							this.a.playSignal(w.$Twb.onDebugBreak);
					});
				}
			};
			(e.$w2c = C), (e.$w2c = C = Ne([j(0, E.$75), j(1, w.$Owb)], C));
		}),
		define(
			de[796],
			he([1, 0, 24, 6, 3, 210, 17, 64, 4, 34, 51, 35, 26, 68, 352, 112, 2426]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iGc = e.$gGc = e.$fGc = e.$eGc = e.$dGc = e.$cGc = void 0),
					(e.$hGc = s),
					(e.$cGc = (0, u.$wP)(
						"editor.stackFrameHighlightBackground",
						{
							dark: "#ffff0033",
							light: "#ffff6673",
							hcDark: "#ffff0033",
							hcLight: "#ffff6673",
						},
						(0, m.localize)(5263, null),
					)),
					(e.$dGc = (0, u.$wP)(
						"editor.focusedStackFrameHighlightBackground",
						{
							dark: "#7abd7a4d",
							light: "#cee7ce73",
							hcDark: "#7abd7a4d",
							hcLight: "#cee7ce73",
						},
						(0, m.localize)(5264, null),
					));
				const p = d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					o = {
						description: "top-stack-frame-margin",
						glyphMarginClassName: h.ThemeIcon.asClassName(n.$dKb),
						glyphMargin: { position: d.GlyphMarginLane.Right },
						zIndex: 9999,
						stickiness: p,
						overviewRuler: {
							position: d.OverviewRulerLane.Full,
							color: (0, a.$jP)(e.$cGc),
						},
					},
					f = {
						description: "focused-stack-frame-margin",
						glyphMarginClassName: h.ThemeIcon.asClassName(n.$eKb),
						glyphMargin: { position: d.GlyphMarginLane.Right },
						zIndex: 9999,
						stickiness: p,
						overviewRuler: {
							position: d.OverviewRulerLane.Full,
							color: (0, a.$jP)(e.$dGc),
						},
					};
				(e.$eGc = {
					description: "top-stack-frame-decoration",
					isWholeLine: !0,
					className: "debug-top-stack-frame-line",
					stickiness: p,
				}),
					(e.$fGc = {
						description: "focused-stack-frame-decoration",
						isWholeLine: !0,
						className: "debug-focused-stack-frame-line",
						stickiness: p,
					});
				const b = (y) => ({
					description: "top-stack-frame-inline-decoration",
					before: {
						content: "\uEB8B",
						inlineClassName: y
							? "debug-top-stack-frame-column start-of-line"
							: "debug-top-stack-frame-column",
						inlineClassNameAffectsLetterSpacing: !0,
					},
				});
				e.$gGc = b;
				function s(y, $, v) {
					const S = [],
						I = new C.$iL(
							y.range.startLineNumber,
							y.range.startColumn,
							y.range.startLineNumber,
							E.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						T = new C.$iL(
							y.range.startLineNumber,
							y.range.startColumn,
							y.range.startLineNumber,
							y.range.startColumn + 1,
						),
						P = y.thread.getTopStackFrame();
					return (
						y.getId() === P?.getId()
							? ($ && S.push({ options: o, range: T }),
								S.push({ options: e.$eGc, range: I }),
								y.range.startColumn > 1 &&
									S.push({ options: (0, e.$gGc)(v), range: I }))
							: ($ && S.push({ options: f, range: T }),
								S.push({ options: e.$fGc, range: I })),
						S
					);
				}
				let l = class extends w.$1c {
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = this.b.createDecorationsCollection());
						const T = () => this.a.set(this.h());
						this.D(
							i.Event.any(
								this.c.getViewModel().onDidFocusStackFrame,
								this.c.getModel().onDidChangeCallStack,
							)(() => {
								T();
							}),
						),
							this.D(
								this.b.onDidChangeModel((P) => {
									P.newModelUrl && T();
								}),
							),
							T();
					}
					h() {
						const $ = this.b;
						if (!$.hasModel()) return [];
						const v = this.c.getViewModel().focusedStackFrame,
							S = [];
						return (
							this.c
								.getModel()
								.getSessions()
								.forEach((I) => {
									const T = I === v?.thread.session;
									I.getAllThreads().forEach((P) => {
										if (P.stopped) {
											const k = P.getCallStack(),
												L = [];
											k.length > 0 &&
												(v && !v.equals(k[0]) && L.push(v), L.push(k[0])),
												L.forEach((D) => {
													if (
														D &&
														this.f.extUri.isEqual(
															D.source.uri,
															$.getModel()?.uri,
														)
													) {
														if (
															D.range.startLineNumber >
																$.getModel()?.getLineCount() ||
															D.range.startLineNumber < 1
														) {
															this.g.warn(
																`CallStackEditorContribution: invalid stack frame line number: ${D.range.startLineNumber}`,
															);
															return;
														}
														const M =
															$.getModel().getLineFirstNonWhitespaceColumn(
																D.range.startLineNumber,
															) >= D.range.startColumn;
														S.push(...s(D, T, M));
													}
												});
										}
									});
								}),
							(0, t.$Qb)(
								S,
								(I) =>
									`${I.options.className} ${I.options.glyphMarginClassName} ${I.range.startLineNumber} ${I.range.startColumn}`,
							)
						);
					}
					dispose() {
						super.dispose(), this.a.clear();
					}
				};
				(e.$iGc = l),
					(e.$iGc = l = Ne([j(1, g.$75), j(2, c.$Vl), j(3, r.$ik)], l));
			},
		),
		define(
			de[3051],
			he([1, 0, 76, 6, 3, 201, 229, 22, 112]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VQc = void 0);
				const r = /range=([0-9]+):([0-9]+)/;
				class u {
					constructor(c) {
						(this.d = c),
							(this.a = 0),
							(this.b = new Map()),
							(this.c = new i.$re()),
							(this.onDidChangeCapabilities = i.Event.None),
							(this.onDidChangeFile = this.c.event),
							(this.capabilities =
								0 |
								d.FileSystemProviderCapabilities.PathCaseSensitive |
								d.FileSystemProviderCapabilities.FileOpenReadWriteClose),
							c.onDidEndSession(({ session: n }) => {
								for (const [g, p] of this.b) p.session === n && this.close(g);
							});
					}
					watch(c, n) {
						if (n.recursive) return (0, w.$Yc)(() => {});
						const { session: g, memoryReference: p, offset: o } = this.f(c),
							f = new w.$Zc();
						return (
							f.add(
								g.onDidChangeState(() => {
									(g.state === m.State.Running ||
										g.state === m.State.Inactive) &&
										this.c.fire([
											{ type: d.FileChangeType.DELETED, resource: c },
										]);
								}),
							),
							f.add(
								g.onDidInvalidateMemory((b) => {
									b.body.memoryReference === p &&
										((o &&
											(b.body.offset >= o.toOffset ||
												b.body.offset + b.body.count < o.fromOffset)) ||
											this.c.fire([
												{ resource: c, type: d.FileChangeType.UPDATED },
											]));
								}),
							),
							f
						);
					}
					stat(c) {
						const { readOnly: n } = this.f(c);
						return Promise.resolve({
							type: d.FileType.File,
							mtime: 0,
							ctime: 0,
							size: 0,
							permissions: n ? d.FilePermission.Readonly : void 0,
						});
					}
					mkdir() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					readdir() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					delete() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					rename() {
						throw (0, d.$yl)(
							"Not allowed",
							d.FileSystemProviderErrorCode.NoPermissions,
						);
					}
					open(c, n) {
						const { session: g, memoryReference: p, offset: o } = this.f(c),
							f = this.a++;
						let b = g.getMemory(p);
						return (
							o && (b = new a(b, o)),
							this.b.set(f, { session: g, region: b }),
							Promise.resolve(f)
						);
					}
					close(c) {
						return (
							this.b.get(c)?.region.dispose(),
							this.b.delete(c),
							Promise.resolve()
						);
					}
					async writeFile(c, n) {
						const { offset: g } = this.f(c);
						if (!g)
							throw (0, d.$yl)(
								"Range must be present to read a file",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const p = await this.open(c, { create: !1 });
						try {
							await this.write(p, g.fromOffset, n, 0, n.length);
						} finally {
							this.close(p);
						}
					}
					async readFile(c) {
						const { offset: n } = this.f(c);
						if (!n)
							throw (0, d.$yl)(
								"Range must be present to read a file",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const g = new Uint8Array(n.toOffset - n.fromOffset),
							p = await this.open(c, { create: !1 });
						try {
							return await this.read(p, n.fromOffset, g, 0, g.length), g;
						} finally {
							this.close(p);
						}
					}
					async read(c, n, g, p, o) {
						const f = this.b.get(c);
						if (!f)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						const b = await f.region.read(n, o);
						let s = 0;
						for (const l of b)
							switch (l.type) {
								case m.MemoryRangeType.Unreadable:
									return s;
								case m.MemoryRangeType.Error:
									if (s > 0) return s;
									throw (0, d.$yl)(
										l.error,
										d.FileSystemProviderErrorCode.Unknown,
									);
								case m.MemoryRangeType.Valid: {
									const y = Math.max(0, n - l.offset),
										$ = l.data.slice(
											y,
											Math.min(l.data.byteLength, y + (o - s)),
										);
									g.set($.buffer, p + s), (s += $.byteLength);
									break;
								}
								default:
									(0, C.$kd)(l);
							}
						return s;
					}
					write(c, n, g, p, o) {
						const f = this.b.get(c);
						if (!f)
							throw (0, d.$yl)(
								"No file with that descriptor open",
								d.FileSystemProviderErrorCode.Unavailable,
							);
						return f.region.write(n, t.$Te.wrap(g).slice(p, p + o));
					}
					f(c) {
						if (c.scheme !== m.$55)
							throw (0, d.$yl)(
								`Cannot open file with scheme ${c.scheme}`,
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						const n = this.d.getModel().getSession(c.authority);
						if (!n)
							throw (0, d.$yl)(
								"Debug session not found",
								d.FileSystemProviderErrorCode.FileNotFound,
							);
						let g;
						const p = r.exec(c.query);
						p && (g = { fromOffset: Number(p[1]), toOffset: Number(p[2]) });
						const [, o] = c.path.split("/");
						return {
							session: n,
							offset: g,
							readOnly: !n.capabilities.supportsWriteMemoryRequest,
							sessionId: c.authority,
							memoryReference: decodeURIComponent(o),
						};
					}
				}
				e.$VQc = u;
				class a extends w.$1c {
					constructor(c, n) {
						super(),
							(this.c = c),
							(this.range = n),
							(this.a = new i.$re()),
							(this.onDidInvalidate = this.a.event),
							(this.b = this.range.toOffset - this.range.fromOffset),
							(this.writable = c.writable),
							this.D(c),
							this.D(
								c.onDidInvalidate((g) => {
									const p = (0, E.$Zm)(g.fromOffset - n.fromOffset, 0, this.b),
										o = (0, E.$Zm)(g.toOffset - n.fromOffset, 0, this.b);
									o > p && this.a.fire({ fromOffset: p, toOffset: o });
								}),
							);
					}
					read(c, n) {
						if (c < 0) throw new RangeError(`Invalid fromOffset: ${c}`);
						return this.c.read(
							this.range.fromOffset + c,
							this.range.fromOffset + Math.min(n, this.b),
						);
					}
					write(c, n) {
						return this.c.write(this.range.fromOffset + c, n);
					}
				}
			},
		),
		