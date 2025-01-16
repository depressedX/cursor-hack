define(de[786], he([1, 0, 6, 3, 17, 547]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$l2b = e.FindOptionOverride = void 0);
			var C;
			(function (r) {
				(r[(r.NotSet = 0)] = "NotSet"),
					(r[(r.True = 1)] = "True"),
					(r[(r.False = 2)] = "False");
			})(C || (e.FindOptionOverride = C = {}));
			function d(r, u) {
				return r === C.True ? !0 : r === C.False ? !1 : u;
			}
			class m extends i.$1c {
				get searchString() {
					return this.a;
				}
				get replaceString() {
					return this.b;
				}
				get isRevealed() {
					return this.c;
				}
				get isReplaceRevealed() {
					return this.f;
				}
				get isRegex() {
					return d(this.h, this.g);
				}
				get wholeWord() {
					return d(this.m, this.j);
				}
				get matchCase() {
					return d(this.q, this.n);
				}
				get preserveCase() {
					return d(this.s, this.r);
				}
				get actualIsRegex() {
					return this.g;
				}
				get actualWholeWord() {
					return this.j;
				}
				get actualMatchCase() {
					return this.n;
				}
				get actualPreserveCase() {
					return this.r;
				}
				get searchScope() {
					return this.t;
				}
				get matchesPosition() {
					return this.u;
				}
				get matchesCount() {
					return this.w;
				}
				get currentMatch() {
					return this.y;
				}
				get isSearching() {
					return this.C;
				}
				get filters() {
					return this.F;
				}
				constructor() {
					super(),
						(this.G = this.D(new t.$re())),
						(this.onFindReplaceStateChange = this.G.event),
						(this.a = ""),
						(this.b = ""),
						(this.c = !1),
						(this.f = !1),
						(this.g = !1),
						(this.h = C.NotSet),
						(this.j = !1),
						(this.m = C.NotSet),
						(this.n = !1),
						(this.q = C.NotSet),
						(this.r = !1),
						(this.s = C.NotSet),
						(this.t = null),
						(this.u = 0),
						(this.w = 0),
						(this.y = null),
						(this.z = !0),
						(this.C = !1),
						(this.F = null);
				}
				changeMatchInfo(u, a, h) {
					const c = {
						moveCursor: !1,
						updateHistory: !1,
						searchString: !1,
						replaceString: !1,
						isRevealed: !1,
						isReplaceRevealed: !1,
						isRegex: !1,
						wholeWord: !1,
						matchCase: !1,
						preserveCase: !1,
						searchScope: !1,
						matchesPosition: !1,
						matchesCount: !1,
						currentMatch: !1,
						loop: !1,
						isSearching: !1,
						filters: !1,
					};
					let n = !1;
					a === 0 && (u = 0),
						u > a && (u = a),
						this.u !== u && ((this.u = u), (c.matchesPosition = !0), (n = !0)),
						this.w !== a && ((this.w = a), (c.matchesCount = !0), (n = !0)),
						typeof h < "u" &&
							(w.$iL.equalsRange(this.y, h) ||
								((this.y = h), (c.currentMatch = !0), (n = !0))),
						n && this.G.fire(c);
				}
				change(u, a, h = !0) {
					const c = {
						moveCursor: a,
						updateHistory: h,
						searchString: !1,
						replaceString: !1,
						isRevealed: !1,
						isReplaceRevealed: !1,
						isRegex: !1,
						wholeWord: !1,
						matchCase: !1,
						preserveCase: !1,
						searchScope: !1,
						matchesPosition: !1,
						matchesCount: !1,
						currentMatch: !1,
						loop: !1,
						isSearching: !1,
						filters: !1,
					};
					let n = !1;
					const g = this.isRegex,
						p = this.wholeWord,
						o = this.matchCase,
						f = this.preserveCase;
					typeof u.searchString < "u" &&
						this.a !== u.searchString &&
						((this.a = u.searchString), (c.searchString = !0), (n = !0)),
						typeof u.replaceString < "u" &&
							this.b !== u.replaceString &&
							((this.b = u.replaceString), (c.replaceString = !0), (n = !0)),
						typeof u.isRevealed < "u" &&
							this.c !== u.isRevealed &&
							((this.c = u.isRevealed), (c.isRevealed = !0), (n = !0)),
						typeof u.isReplaceRevealed < "u" &&
							this.f !== u.isReplaceRevealed &&
							((this.f = u.isReplaceRevealed),
							(c.isReplaceRevealed = !0),
							(n = !0)),
						typeof u.isRegex < "u" && (this.g = u.isRegex),
						typeof u.wholeWord < "u" && (this.j = u.wholeWord),
						typeof u.matchCase < "u" && (this.n = u.matchCase),
						typeof u.preserveCase < "u" && (this.r = u.preserveCase),
						typeof u.searchScope < "u" &&
							(u.searchScope?.every((b) =>
								this.t?.some((s) => !w.$iL.equalsRange(s, b)),
							) ||
								((this.t = u.searchScope), (c.searchScope = !0), (n = !0))),
						typeof u.loop < "u" &&
							this.z !== u.loop &&
							((this.z = u.loop), (c.loop = !0), (n = !0)),
						typeof u.isSearching < "u" &&
							this.C !== u.isSearching &&
							((this.C = u.isSearching), (c.isSearching = !0), (n = !0)),
						typeof u.filters < "u" &&
							(this.F ? this.F.update(u.filters) : (this.F = u.filters),
							(c.filters = !0),
							(n = !0)),
						(this.h =
							typeof u.isRegexOverride < "u" ? u.isRegexOverride : C.NotSet),
						(this.m =
							typeof u.wholeWordOverride < "u"
								? u.wholeWordOverride
								: C.NotSet),
						(this.q =
							typeof u.matchCaseOverride < "u"
								? u.matchCaseOverride
								: C.NotSet),
						(this.s =
							typeof u.preserveCaseOverride < "u"
								? u.preserveCaseOverride
								: C.NotSet),
						g !== this.isRegex && ((n = !0), (c.isRegex = !0)),
						p !== this.wholeWord && ((n = !0), (c.wholeWord = !0)),
						o !== this.matchCase && ((n = !0), (c.matchCase = !0)),
						f !== this.preserveCase && ((n = !0), (c.preserveCase = !0)),
						n && this.G.fire(c);
				}
				canNavigateBack() {
					return this.H() || this.matchesPosition !== 1;
				}
				canNavigateForward() {
					return this.H() || this.matchesPosition < this.matchesCount;
				}
				H() {
					return this.z || this.matchesCount >= E.$j2b;
				}
			}
			e.$l2b = m;
		}),
		define(
			de[961],
			he([
				1, 0, 7, 127, 268, 277, 235, 15, 14, 29, 27, 3, 12, 37, 56, 38, 17, 547,
				4, 91, 413, 664, 21, 51, 79, 35, 26, 212, 28, 106, 95, 2296,
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
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i7b =
						e.$h7b =
						e.$g7b =
						e.$f7b =
						e.$e7b =
						e.$d7b =
						e.$c7b =
						e.$b7b =
						e.$a7b =
						e.$_6b =
							void 0),
					(t = mt(t)),
					(h = mt(h)),
					(c = mt(c)),
					(f = mt(f));
				const D = (0, v.$$O)(
						"find-collapsed",
						m.$ak.chevronRight,
						f.localize(1020, null),
					),
					M = (0, v.$$O)(
						"find-expanded",
						m.$ak.chevronDown,
						f.localize(1021, null),
					);
				(e.$_6b = (0, v.$$O)(
					"find-selection",
					m.$ak.selection,
					f.localize(1022, null),
				)),
					(e.$a7b = (0, v.$$O)(
						"find-replace",
						m.$ak.replace,
						f.localize(1023, null),
					)),
					(e.$b7b = (0, v.$$O)(
						"find-replace-all",
						m.$ak.replaceAll,
						f.localize(1024, null),
					)),
					(e.$c7b = (0, v.$$O)(
						"find-previous-match",
						m.$ak.arrowUp,
						f.localize(1025, null),
					)),
					(e.$d7b = (0, v.$$O)(
						"find-next-match",
						m.$ak.arrowDown,
						f.localize(1026, null),
					));
				const N = f.localize(1027, null),
					A = f.localize(1028, null),
					R = f.localize(1029, null),
					O = f.localize(1030, null),
					B = f.localize(1031, null),
					U = f.localize(1032, null),
					z = f.localize(1033, null),
					F = f.localize(1034, null),
					x = f.localize(1035, null),
					H = f.localize(1036, null),
					q = f.localize(1037, null),
					V = f.localize(1038, null),
					G = f.localize(1039, null, o.$j2b);
				(e.$e7b = f.localize(1040, null)), (e.$f7b = f.localize(1041, null));
				const K = 419,
					W = 275 - 54;
				let X = 69;
				const Y = 33,
					ie = "ctrlEnterReplaceAll.windows.donotask",
					ne = h.$m ? u.KeyMod.WinCtrl : u.KeyMod.CtrlCmd;
				class ee {
					constructor(re) {
						(this.afterLineNumber = re),
							(this.heightInPx = Y),
							(this.suppressMouseDown = !1),
							(this.domNode = document.createElement("div")),
							(this.domNode.className = "dock-find-viewzone");
					}
				}
				e.$g7b = ee;
				function _(se, re, le) {
					const oe = !!re.match(/\n/);
					if (le && oe && le.selectionStart > 0) {
						se.stopPropagation();
						return;
					}
				}
				function te(se, re, le) {
					const oe = !!re.match(/\n/);
					if (le && oe && le.selectionEnd < le.value.length) {
						se.stopPropagation();
						return;
					}
				}
				class Q extends C.$Uhb {
					static {
						this.a = "editor.contrib.findWidget";
					}
					constructor(re, le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						super(),
							(this.ib = me),
							(this.jb = ve),
							(this.y = null),
							(this.sb = []),
							(this.b = re),
							(this.g = le),
							(this.c = oe),
							(this.h = ae),
							(this.n = pe),
							(this.r = $e),
							(this.s = ue),
							(this.t = fe),
							(this.Z = !!ue.getBoolean(ie, y.StorageScope.PROFILE)),
							(this.W = !1),
							(this.X = !1),
							(this.Y = !1),
							(this.hb = new d.$Jh(500)),
							this.D((0, a.$Yc)(() => this.hb.cancel())),
							this.D(this.c.onFindReplaceStateChange((ge) => this.lb(ge))),
							this.Fb(),
							this.rb(),
							this.yb(),
							this.J.inputBox.layout(),
							this.D(
								this.b.onDidChangeConfiguration((ge) => {
									if (
										(ge.hasChanged(g.EditorOption.readOnly) &&
											(this.b.getOption(g.EditorOption.readOnly) &&
												this.c.change({ isReplaceRevealed: !1 }, !1),
											this.rb()),
										ge.hasChanged(g.EditorOption.layoutInfo) && this.yb(),
										ge.hasChanged(g.EditorOption.accessibilitySupport) &&
											this.Gb(),
										ge.hasChanged(g.EditorOption.find))
									) {
										const be = this.b.getOption(g.EditorOption.find).loop;
										this.c.change({ loop: be }, !1);
										const Ce = this.b.getOption(
											g.EditorOption.find,
										).addExtraSpaceOnTop;
										Ce && !this.db && ((this.db = new ee(0)), this.wb()),
											!Ce && this.db && this.xb();
									}
								}),
							),
							this.Gb(),
							this.D(
								this.b.onDidChangeCursorSelection(() => {
									this.W && this.qb();
								}),
							),
							this.D(
								this.b.onDidFocusEditorWidget(async () => {
									if (this.W) {
										const ge = await this.g.getGlobalBufferTerm();
										ge &&
											ge !== this.c.searchString &&
											(this.c.change({ searchString: ge }, !1),
											this.J.select());
									}
								}),
							),
							(this.ab = o.$b2b.bindTo($e)),
							(this.$ = this.D(t.$dhb(this.J.inputBox.inputElement))),
							this.D(
								this.$.onDidFocus(() => {
									this.ab.set(!0), this.Ab();
								}),
							),
							this.D(
								this.$.onDidBlur(() => {
									this.ab.set(!1);
								}),
							),
							(this.cb = o.$c2b.bindTo($e)),
							(this.bb = this.D(t.$dhb(this.L.inputBox.inputElement))),
							this.D(
								this.bb.onDidFocus(() => {
									this.cb.set(!0), this.Ab();
								}),
							),
							this.D(
								this.bb.onDidBlur(() => {
									this.cb.set(!1);
								}),
							),
							this.b.addOverlayWidget(this),
							this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop &&
								(this.db = new ee(0)),
							this.D(
								this.b.onDidChangeModel(() => {
									this.W && (this.eb = void 0);
								}),
							),
							this.D(
								this.b.onDidScrollChange((ge) => {
									if (ge.scrollTopChanged) {
										this.vb();
										return;
									}
									setTimeout(() => {
										this.vb();
									}, 0);
								}),
							);
					}
					getId() {
						return Q.a;
					}
					getDomNode() {
						return this.w;
					}
					getPosition() {
						return this.W
							? {
									preference:
										n.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
								}
							: null;
					}
					lb(re) {
						if (re.searchString) {
							try {
								(this.Y = !0), this.J.setValue(this.c.searchString);
							} finally {
								this.Y = !1;
							}
							this.rb();
						}
						if (
							(re.replaceString &&
								(this.L.inputBox.value = this.c.replaceString),
							re.isRevealed && (this.c.isRevealed ? this.tb() : this.ub(!0)),
							re.isReplaceRevealed &&
								(this.c.isReplaceRevealed
									? !this.b.getOption(g.EditorOption.readOnly) &&
										!this.X &&
										((this.X = !0),
										(this.L.width = t.$vgb(this.J.domNode)),
										this.rb(),
										this.L.inputBox.layout())
									: this.X && ((this.X = !1), this.rb())),
							(re.isRevealed || re.isReplaceRevealed) &&
								(this.c.isRevealed || this.c.isReplaceRevealed) &&
								this.zb() &&
								this.wb(),
							re.isRegex && this.J.setRegex(this.c.isRegex),
							re.wholeWord && this.J.setWholeWords(this.c.wholeWord),
							re.matchCase && this.J.setCaseSensitive(this.c.matchCase),
							re.preserveCase && this.L.setPreserveCase(this.c.preserveCase),
							re.searchScope &&
								(this.c.searchScope
									? (this.Q.checked = !0)
									: (this.Q.checked = !1),
								this.qb()),
							re.searchString || re.matchesCount || re.matchesPosition)
						) {
							const le =
								this.c.searchString.length > 0 && this.c.matchesCount === 0;
							this.w.classList.toggle("no-results", le), this.ob(), this.rb();
						}
						(re.searchString || re.currentMatch) && this.vb(),
							re.updateHistory && this.mb(),
							re.loop && this.rb();
					}
					mb() {
						this.hb.trigger(this.nb.bind(this)).then(void 0, r.$4);
					}
					nb() {
						this.c.searchString && this.J.inputBox.addToHistory(),
							this.c.replaceString && this.L.inputBox.addToHistory();
					}
					ob() {
						(this.N.style.minWidth = X + "px"),
							this.c.matchesCount >= o.$j2b
								? (this.N.title = G)
								: (this.N.title = ""),
							this.N.firstChild?.remove();
						let re;
						if (this.c.matchesCount > 0) {
							let le = String(this.c.matchesCount);
							this.c.matchesCount >= o.$j2b && (le += "+");
							let oe = String(this.c.matchesPosition);
							oe === "0" && (oe = "?"), (re = c.$kf(e.$e7b, oe, le));
						} else re = e.$f7b;
						this.N.appendChild(document.createTextNode(re)),
							(0, i.$oib)(
								this.pb(re, this.c.currentMatch, this.c.searchString),
							),
							(X = Math.max(X, this.N.clientWidth));
					}
					pb(re, le, oe) {
						if (re === e.$f7b)
							return oe === ""
								? f.localize(1042, null, re)
								: f.localize(1043, null, re, oe);
						if (le) {
							const ae = f.localize(
									1044,
									null,
									re,
									oe,
									le.startLineNumber + ":" + le.startColumn,
								),
								pe = this.b.getModel();
							return pe &&
								le.startLineNumber <= pe.getLineCount() &&
								le.startLineNumber >= 1
								? `${pe.getLineContent(le.startLineNumber)}, ${ae}`
								: ae;
						}
						return f.localize(1045, null, re, oe);
					}
					qb() {
						const re = this.b.getSelection(),
							le = re
								? re.startLineNumber !== re.endLineNumber ||
									re.startColumn !== re.endColumn
								: !1,
							oe = this.Q.checked;
						this.W && (oe || le) ? this.Q.enable() : this.Q.disable();
					}
					rb() {
						this.J.setEnabled(this.W),
							this.L.setEnabled(this.W && this.X),
							this.qb(),
							this.R.setEnabled(this.W);
						const re = this.c.searchString.length > 0,
							le = !!this.c.matchesCount;
						this.O.setEnabled(this.W && re && le && this.c.canNavigateBack()),
							this.P.setEnabled(
								this.W && re && le && this.c.canNavigateForward(),
							),
							this.S.setEnabled(this.W && this.X && re),
							this.U.setEnabled(this.W && this.X && re),
							this.w.classList.toggle("replaceToggled", this.X),
							this.M.setExpanded(this.X);
						const oe = !this.b.getOption(g.EditorOption.readOnly);
						this.M.setEnabled(this.W && oe);
					}
					tb() {
						if (
							(this.sb.forEach((re) => {
								clearTimeout(re);
							}),
							(this.sb = []),
							!this.W)
						) {
							this.W = !0;
							const re = this.b.getSelection();
							switch (
								this.b.getOption(g.EditorOption.find).autoFindInSelection
							) {
								case "always":
									this.Q.checked = !0;
									break;
								case "never":
									this.Q.checked = !1;
									break;
								case "multiline": {
									const oe = !!re && re.startLineNumber !== re.endLineNumber;
									this.Q.checked = oe;
									break;
								}
								default:
									break;
							}
							this.yb(),
								this.rb(),
								this.sb.push(
									setTimeout(() => {
										this.w.classList.add("visible"),
											this.w.setAttribute("aria-hidden", "false");
									}, 0),
								),
								this.sb.push(
									setTimeout(() => {
										this.J.validate();
									}, 200),
								),
								this.b.layoutOverlayWidget(this);
							let le = !0;
							if (
								this.b.getOption(g.EditorOption.find)
									.seedSearchStringFromSelection &&
								re
							) {
								const oe = this.b.getDomNode();
								if (oe) {
									const ae = t.$tgb(oe),
										pe = this.b.getScrolledVisiblePosition(
											re.getStartPosition(),
										),
										$e = ae.left + (pe ? pe.left : 0),
										ye = pe ? pe.top : 0;
									if (this.db && ye < this.db.heightInPx) {
										re.endLineNumber > re.startLineNumber && (le = !1);
										const ue = t.$qgb(this.w).left;
										$e > ue && (le = !1);
										const fe = this.b.getScrolledVisiblePosition(
											re.getEndPosition(),
										);
										ae.left + (fe ? fe.left : 0) > ue && (le = !1);
									}
								}
							}
							this.wb(le);
						}
					}
					ub(re) {
						this.sb.forEach((le) => {
							clearTimeout(le);
						}),
							(this.sb = []),
							this.W &&
								((this.W = !1),
								this.rb(),
								this.w.classList.remove("visible"),
								this.w.setAttribute("aria-hidden", "true"),
								this.J.clearMessage(),
								re && this.b.focus(),
								this.b.layoutOverlayWidget(this),
								this.xb());
					}
					vb(re) {
						if (!this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop) {
							this.xb();
							return;
						}
						if (!this.W) return;
						const oe = this.db;
						this.eb !== void 0 ||
							!oe ||
							this.b.changeViewZones((ae) => {
								(oe.heightInPx = this.getHeight()),
									(this.eb = ae.addZone(oe)),
									this.b.setScrollTop(
										re || this.b.getScrollTop() + oe.heightInPx,
									);
							});
					}
					wb(re = !0) {
						if (
							!this.W ||
							!this.b.getOption(g.EditorOption.find).addExtraSpaceOnTop
						)
							return;
						this.db === void 0 && (this.db = new ee(0));
						const oe = this.db;
						this.b.changeViewZones((ae) => {
							if (this.eb !== void 0) {
								const pe = this.getHeight();
								if (pe === oe.heightInPx) return;
								const $e = pe - oe.heightInPx;
								(oe.heightInPx = pe),
									ae.layoutZone(this.eb),
									re && this.b.setScrollTop(this.b.getScrollTop() + $e);
								return;
							} else {
								let pe = this.getHeight();
								if (
									((pe -= this.b.getOption(g.EditorOption.padding).top),
									pe <= 0)
								)
									return;
								(oe.heightInPx = pe),
									(this.eb = ae.addZone(oe)),
									re && this.b.setScrollTop(this.b.getScrollTop() + pe);
							}
						});
					}
					xb() {
						this.b.changeViewZones((re) => {
							this.eb !== void 0 &&
								(re.removeZone(this.eb),
								(this.eb = void 0),
								this.db &&
									(this.b.setScrollTop(
										this.b.getScrollTop() - this.db.heightInPx,
									),
									(this.db = void 0)));
						});
					}
					yb() {
						if (!this.W || !this.w.isConnected) return;
						const re = this.b.getLayoutInfo();
						if (re.contentWidth <= 0) {
							this.w.classList.add("hiddenEditor");
							return;
						} else
							this.w.classList.contains("hiddenEditor") &&
								this.w.classList.remove("hiddenEditor");
						const oe = re.width,
							ae = re.minimap.minimapWidth;
						let pe = !1,
							$e = !1,
							ye = !1;
						if (this.gb && t.$vgb(this.w) > K) {
							(this.w.style.maxWidth = `${oe - 28 - ae - 15}px`),
								(this.L.width = t.$vgb(this.J.domNode));
							return;
						}
						if (
							(K + 28 + ae >= oe && ($e = !0),
							K + 28 + ae - X >= oe && (ye = !0),
							K + 28 + ae - X >= oe + 50 && (pe = !0),
							this.w.classList.toggle("collapsed-find-widget", pe),
							this.w.classList.toggle("narrow-find-widget", ye),
							this.w.classList.toggle("reduced-find-widget", $e),
							!ye && !pe && (this.w.style.maxWidth = `${oe - 28 - ae - 15}px`),
							this.J.layout({
								collapsedFindWidget: pe,
								narrowFindWidget: ye,
								reducedFindWidget: $e,
							}),
							this.gb)
						) {
							const ue = this.J.inputBox.element.clientWidth;
							ue > 0 && (this.L.width = ue);
						} else this.X && (this.L.width = t.$vgb(this.J.domNode));
					}
					getHeight() {
						let re = 0;
						return (
							(re += 4),
							(re += this.J.inputBox.height + 2),
							this.X && ((re += 4), (re += this.L.inputBox.height + 2)),
							(re += 4),
							re
						);
					}
					zb() {
						const re = this.getHeight();
						return this.y !== null && this.y === re
							? !1
							: ((this.y = re),
								(this.w.style.height = `${re}px`),
								this.jb(re),
								!0);
					}
					focusFindInput() {
						this.J.select(), this.J.focus();
					}
					focusFindInputWithoutSelecting() {
						this.J.focus();
					}
					isActive() {
						return this.w.contains(t.getWindow(this.w).document.activeElement);
					}
					focusReplaceInput() {
						this.L.select(), this.L.focus();
					}
					highlightFindOptions() {
						this.J.highlightFindOptions();
					}
					Ab() {
						if (this.b.hasModel() && this.Q.checked) {
							const re = this.b.getSelections();
							re
								.map((le) => {
									le.endColumn === 1 &&
										le.endLineNumber > le.startLineNumber &&
										(le = le.setEndPosition(
											le.endLineNumber - 1,
											this.b.getModel().getLineMaxColumn(le.endLineNumber - 1),
										));
									const oe = this.c.currentMatch;
									return le.startLineNumber !== le.endLineNumber &&
										!p.$iL.equalsRange(le, oe)
										? le
										: null;
								})
								.filter((le) => !!le),
								re.length && this.c.change({ searchScope: re }, !0);
						}
					}
					Bb(re) {
						re.middleButton && re.stopPropagation();
					}
					Cb(re) {
						if (re.equals(ne | u.KeyCode.Enter))
							if (this.n.dispatchEvent(re, re.target)) {
								re.preventDefault();
								return;
							} else {
								this.J.inputBox.insertAtCursor(`
`),
									re.preventDefault();
								return;
							}
						if (re.equals(u.KeyCode.Tab)) {
							this.X ? this.L.focus() : this.J.focusOnCaseSensitive(),
								re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.CtrlCmd | u.KeyCode.DownArrow)) {
							this.b.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyCode.UpArrow))
							return _(
								re,
								this.J.getValue(),
								this.J.domNode.querySelector("textarea"),
							);
						if (re.equals(u.KeyCode.DownArrow))
							return te(
								re,
								this.J.getValue(),
								this.J.domNode.querySelector("textarea"),
							);
					}
					Db(re) {
						if (re.equals(ne | u.KeyCode.Enter))
							if (this.n.dispatchEvent(re, re.target)) {
								re.preventDefault();
								return;
							} else {
								h.$l &&
									h.$p &&
									!this.Z &&
									(this.t.info(f.localize(1046, null)),
									(this.Z = !0),
									this.s.store(
										ie,
										!0,
										y.StorageScope.PROFILE,
										y.StorageTarget.USER,
									)),
									this.L.inputBox.insertAtCursor(`
`),
									re.preventDefault();
								return;
							}
						if (re.equals(u.KeyCode.Tab)) {
							this.J.focusOnCaseSensitive(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.Shift | u.KeyCode.Tab)) {
							this.J.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyMod.CtrlCmd | u.KeyCode.DownArrow)) {
							this.b.focus(), re.preventDefault();
							return;
						}
						if (re.equals(u.KeyCode.UpArrow))
							return _(
								re,
								this.L.inputBox.value,
								this.L.inputBox.element.querySelector("textarea"),
							);
						if (re.equals(u.KeyCode.DownArrow))
							return te(
								re,
								this.L.inputBox.value,
								this.L.inputBox.element.querySelector("textarea"),
							);
					}
					getVerticalSashLeft(re) {
						return 0;
					}
					Eb(re) {
						const le = this.n.lookupKeybinding(re);
						return le ? ` (${le.getLabel()})` : "";
					}
					Fb() {
						(this.J = this.D(
							new s.$WCb(
								null,
								this.h,
								{
									width: W,
									label: A,
									placeholder: R,
									appendCaseSensitiveLabel: this.Eb(
										o.$i2b.ToggleCaseSensitiveCommand,
									),
									appendWholeWordsLabel: this.Eb(o.$i2b.ToggleWholeWordCommand),
									appendRegexLabel: this.Eb(o.$i2b.ToggleRegexCommand),
									validation: (me) => {
										if (me.length === 0 || !this.J.getRegex()) return null;
										try {
											return new RegExp(me, "gu"), null;
										} catch (ve) {
											return { content: ve.message };
										}
									},
									flexibleHeight: !0,
									flexibleWidth: !0,
									flexibleMaxHeight: 118,
									showCommonFindToggles: !0,
									showHistoryHint: () => (0, l.$NMb)(this.n),
									inputBoxStyles: k.$wyb,
									toggleStyles: k.$pyb,
								},
								this.r,
							),
						)),
							this.J.setRegex(!!this.c.isRegex),
							this.J.setCaseSensitive(!!this.c.matchCase),
							this.J.setWholeWords(!!this.c.wholeWord),
							this.D(this.J.onKeyDown((me) => this.Cb(me))),
							this.D(
								this.J.inputBox.onDidChange(() => {
									this.Y ||
										this.c.change({ searchString: this.J.getValue() }, !0);
								}),
							),
							this.D(
								this.J.onDidOptionChange(() => {
									this.c.change(
										{
											isRegex: this.J.getRegex(),
											wholeWord: this.J.getWholeWords(),
											matchCase: this.J.getCaseSensitive(),
										},
										!0,
									);
								}),
							),
							this.D(
								this.J.onCaseSensitiveKeyDown((me) => {
									me.equals(u.KeyMod.Shift | u.KeyCode.Tab) &&
										this.X &&
										(this.L.focus(), me.preventDefault());
								}),
							),
							this.D(
								this.J.onRegexKeyDown((me) => {
									me.equals(u.KeyCode.Tab) &&
										this.X &&
										(this.L.focusOnPreserve(), me.preventDefault());
								}),
							),
							this.D(
								this.J.inputBox.onDidHeightChange((me) => {
									this.zb() && this.wb();
								}),
							),
							h.$n && this.D(this.J.onMouseDown((me) => this.Bb(me))),
							(this.N = document.createElement("div")),
							(this.N.className = "matchesCount"),
							this.ob();
						const oe = this.D((0, L.$dib)());
						(this.O = this.D(
							new Z(
								{
									label: O + this.Eb(o.$i2b.PreviousMatchFindAction),
									icon: e.$c7b,
									hoverDelegate: oe,
									onTrigger: () => {
										(0, P.$wg)(this.b.getAction(o.$i2b.PreviousMatchFindAction))
											.run()
											.then(void 0, r.$4);
									},
								},
								this.ib,
							),
						)),
							(this.P = this.D(
								new Z(
									{
										label: B + this.Eb(o.$i2b.NextMatchFindAction),
										icon: e.$d7b,
										hoverDelegate: oe,
										onTrigger: () => {
											(0, P.$wg)(this.b.getAction(o.$i2b.NextMatchFindAction))
												.run()
												.then(void 0, r.$4);
										},
									},
									this.ib,
								),
							));
						const ae = document.createElement("div");
						(ae.className = "find-part"), ae.appendChild(this.J.domNode);
						const pe = document.createElement("div");
						(pe.className = "find-actions"),
							ae.appendChild(pe),
							pe.appendChild(this.N),
							pe.appendChild(this.O.domNode),
							pe.appendChild(this.P.domNode),
							(this.Q = this.D(
								new w.$8ib({
									icon: e.$_6b,
									title: U + this.Eb(o.$i2b.ToggleSearchScopeCommand),
									isChecked: !1,
									hoverDelegate: oe,
									inputActiveOptionBackground: (0, $.$rP)($.$YR),
									inputActiveOptionBorder: (0, $.$rP)($.$WR),
									inputActiveOptionForeground: (0, $.$rP)($.$ZR),
								}),
							)),
							this.D(
								this.Q.onChange(() => {
									if (this.Q.checked) {
										if (this.b.hasModel()) {
											let me = this.b.getSelections();
											(me = me
												.map(
													(ve) => (
														ve.endColumn === 1 &&
															ve.endLineNumber > ve.startLineNumber &&
															(ve = ve.setEndPosition(
																ve.endLineNumber - 1,
																this.b
																	.getModel()
																	.getLineMaxColumn(ve.endLineNumber - 1),
															)),
														ve.isEmpty() ? null : ve
													),
												)
												.filter((ve) => !!ve)),
												me.length && this.c.change({ searchScope: me }, !0);
										}
									} else this.c.change({ searchScope: null }, !0);
								}),
							),
							pe.appendChild(this.Q.domNode),
							(this.R = this.D(
								new Z(
									{
										label: z + this.Eb(o.$i2b.CloseFindWidgetCommand),
										icon: v.$bP,
										hoverDelegate: oe,
										onTrigger: () => {
											this.c.change({ isRevealed: !1, searchScope: null }, !1);
										},
										onKeyDown: (me) => {
											me.equals(u.KeyCode.Tab) &&
												this.X &&
												(this.S.isEnabled() ? this.S.focus() : this.b.focus(),
												me.preventDefault());
										},
									},
									this.ib,
								),
							)),
							(this.L = this.D(
								new s.$XCb(
									null,
									void 0,
									{
										label: F,
										placeholder: x,
										appendPreserveCaseLabel: this.Eb(
											o.$i2b.TogglePreserveCaseCommand,
										),
										history: [],
										flexibleHeight: !0,
										flexibleWidth: !0,
										flexibleMaxHeight: 118,
										showHistoryHint: () => (0, l.$NMb)(this.n),
										inputBoxStyles: k.$wyb,
										toggleStyles: k.$pyb,
									},
									this.r,
									!0,
								),
							)),
							this.L.setPreserveCase(!!this.c.preserveCase),
							this.D(this.L.onKeyDown((me) => this.Db(me))),
							this.D(
								this.L.inputBox.onDidChange(() => {
									this.c.change({ replaceString: this.L.inputBox.value }, !1);
								}),
							),
							this.D(
								this.L.inputBox.onDidHeightChange((me) => {
									this.X && this.zb() && this.wb();
								}),
							),
							this.D(
								this.L.onDidOptionChange(() => {
									this.c.change({ preserveCase: this.L.getPreserveCase() }, !0);
								}),
							),
							this.D(
								this.L.onPreserveCaseKeyDown((me) => {
									me.equals(u.KeyCode.Tab) &&
										(this.O.isEnabled()
											? this.O.focus()
											: this.P.isEnabled()
												? this.P.focus()
												: this.Q.enabled
													? this.Q.focus()
													: this.R.isEnabled() && this.R.focus(),
										me.preventDefault());
								}),
							);
						const $e = this.D((0, L.$dib)());
						(this.S = this.D(
							new Z(
								{
									label: H + this.Eb(o.$i2b.ReplaceOneAction),
									icon: e.$a7b,
									hoverDelegate: $e,
									onTrigger: () => {
										this.g.replace();
									},
									onKeyDown: (me) => {
										me.equals(u.KeyMod.Shift | u.KeyCode.Tab) &&
											(this.R.focus(), me.preventDefault());
									},
								},
								this.ib,
							),
						)),
							(this.U = this.D(
								new Z(
									{
										label: q + this.Eb(o.$i2b.ReplaceAllAction),
										icon: e.$b7b,
										hoverDelegate: $e,
										onTrigger: () => {
											this.g.replaceAll();
										},
									},
									this.ib,
								),
							));
						const ye = document.createElement("div");
						(ye.className = "replace-part"), ye.appendChild(this.L.domNode);
						const ue = document.createElement("div");
						(ue.className = "replace-actions"),
							ye.appendChild(ue),
							ue.appendChild(this.S.domNode),
							ue.appendChild(this.U.domNode),
							(this.M = this.D(
								new Z(
									{
										label: V,
										className: "codicon toggle left",
										onTrigger: () => {
											this.c.change({ isReplaceRevealed: !this.X }, !1),
												this.X &&
													((this.L.width = t.$vgb(this.J.domNode)),
													this.L.inputBox.layout()),
												this.wb();
										},
									},
									this.ib,
								),
							)),
							this.M.setExpanded(this.X),
							(this.w = document.createElement("div")),
							(this.w.className = "editor-widget find-widget"),
							this.w.setAttribute("aria-hidden", "true"),
							(this.w.ariaLabel = N),
							(this.w.role = "dialog"),
							(this.w.style.width = `${K}px`),
							this.w.appendChild(this.M.domNode),
							this.w.appendChild(ae),
							this.w.appendChild(this.R.domNode),
							this.w.appendChild(ye),
							(this.fb = this.D(
								new E.Sash(this.w, this, {
									orientation: E.Orientation.VERTICAL,
									size: 2,
								}),
							)),
							(this.gb = !1);
						let fe = K;
						this.D(
							this.fb.onDidStart(() => {
								fe = t.$vgb(this.w);
							}),
						),
							this.D(
								this.fb.onDidChange((me) => {
									this.gb = !0;
									const ve = fe + me.startX - me.currentX;
									if (ve < K) return;
									const ge = parseFloat(t.$ngb(this.w).maxWidth) || 0;
									ve > ge ||
										((this.w.style.width = `${ve}px`),
										this.X && (this.L.width = t.$vgb(this.J.domNode)),
										this.J.inputBox.layout(),
										this.zb());
								}),
							),
							this.D(
								this.fb.onDidReset(() => {
									const me = t.$vgb(this.w);
									if (me < K) return;
									let ve = K;
									if (!this.gb || me === K) {
										const ge = this.b.getLayoutInfo();
										(ve = ge.width - 28 - ge.minimap.minimapWidth - 15),
											(this.gb = !0);
									}
									(this.w.style.width = `${ve}px`),
										this.X && (this.L.width = t.$vgb(this.J.domNode)),
										this.J.inputBox.layout();
								}),
							);
					}
					Gb() {
						const re = this.b.getOption(g.EditorOption.accessibilitySupport);
						this.J.setFocusInputOnOptionClick(
							re !== b.AccessibilitySupport.Enabled,
						);
					}
					getViewState() {
						let re = !1;
						return (
							this.db &&
								this.eb &&
								(re = this.db.heightInPx > this.b.getScrollTop()),
							{ widgetViewZoneVisible: re, scrollTop: this.b.getScrollTop() }
						);
					}
					setViewState(re) {
						re && re.widgetViewZoneVisible && this.vb(re.scrollTop);
					}
				}
				e.$h7b = Q;
				class Z extends C.$Uhb {
					constructor(re, le) {
						super(), (this.a = re);
						let oe = "button";
						this.a.className && (oe = oe + " " + this.a.className),
							this.a.icon &&
								(oe = oe + " " + I.ThemeIcon.asClassName(this.a.icon)),
							(this.b = document.createElement("div")),
							(this.b.tabIndex = 0),
							(this.b.className = oe),
							this.b.setAttribute("role", "button"),
							this.b.setAttribute("aria-label", this.a.label),
							this.D(
								le.setupManagedHover(
									re.hoverDelegate ?? (0, L.$cib)("element"),
									this.b,
									this.a.label,
								),
							),
							this.f(this.b, (ae) => {
								this.a.onTrigger(), ae.preventDefault();
							}),
							this.u(this.b, (ae) => {
								if (ae.equals(u.KeyCode.Space) || ae.equals(u.KeyCode.Enter)) {
									this.a.onTrigger(), ae.preventDefault();
									return;
								}
								this.a.onKeyDown?.(ae);
							});
					}
					get domNode() {
						return this.b;
					}
					isEnabled() {
						return this.b.tabIndex >= 0;
					}
					focus() {
						this.b.focus();
					}
					setEnabled(re) {
						this.b.classList.toggle("disabled", !re),
							this.b.setAttribute("aria-disabled", String(!re)),
							(this.b.tabIndex = re ? 0 : -1);
					}
					setExpanded(re) {
						this.b.setAttribute("aria-expanded", String(!!re)),
							re
								? (this.b.classList.remove(...I.ThemeIcon.asClassNameArray(D)),
									this.b.classList.add(...I.ThemeIcon.asClassNameArray(M)))
								: (this.b.classList.remove(...I.ThemeIcon.asClassNameArray(M)),
									this.b.classList.add(...I.ThemeIcon.asClassNameArray(D)));
					}
				}
				(e.$i7b = Z),
					(0, S.$oP)((se, re) => {
						const le = se.getColor($.$CQ);
						le &&
							re.addRule(
								`.monaco-editor .findMatch { border: 1px ${((0, T.$gP))(se.type) ? "dotted" : "solid"} ${le}; box-sizing: border-box; }`,
							);
						const oe = se.getColor($.$DQ);
						oe &&
							re.addRule(
								`.monaco-editor .findScope { border: 1px ${((0, T.$gP))(se.type) ? "dashed" : "solid"} ${oe}; }`,
							);
						const ae = se.getColor($.$OP);
						ae &&
							re.addRule(
								`.monaco-editor .find-widget { border: 1px solid ${ae}; }`,
							);
						const pe = se.getColor($.$xQ);
						pe &&
							re.addRule(`.monaco-editor .findMatchInline { color: ${pe}; }`);
						const $e = se.getColor($.$zQ);
						$e &&
							re.addRule(
								`.monaco-editor .currentFindMatchInline { color: ${$e}; }`,
							);
					});
			},
		),
		define(
			de[1219],
			he([1, 0, 14, 64, 122, 4, 51, 79, 35, 26]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WNb = e.$VNb = e.$UNb = e.$TNb = e.$SNb = void 0);
				const u = (0, C.$wP)(
					"editor.foldBackground",
					{
						light: (0, C.$BP)(C.$rQ, 0.3),
						dark: (0, C.$BP)(C.$rQ, 0.3),
						hcDark: null,
						hcLight: null,
					},
					(0, E.localize)(1066, null),
					!0,
				);
				(0, C.$wP)(
					"editor.foldPlaceholderForeground",
					{ light: "#808080", dark: "#808080", hcDark: null, hcLight: null },
					(0, E.localize)(1067, null),
				),
					(0, C.$wP)(
						"editorGutter.foldingControlForeground",
						C.$MP,
						(0, E.localize)(1068, null),
					),
					(e.$SNb = (0, d.$$O)(
						"folding-expanded",
						t.$ak.chevronDown,
						(0, E.localize)(1069, null),
					)),
					(e.$TNb = (0, d.$$O)(
						"folding-collapsed",
						t.$ak.chevronRight,
						(0, E.localize)(1070, null),
					)),
					(e.$UNb = (0, d.$$O)(
						"folding-manual-collapsed",
						e.$TNb,
						(0, E.localize)(1071, null),
					)),
					(e.$VNb = (0, d.$$O)(
						"folding-manual-expanded",
						e.$SNb,
						(0, E.localize)(1072, null),
					));
				const a = { color: (0, m.$jP)(u), position: i.MinimapPosition.Inline },
					h = (0, E.localize)(1073, null),
					c = (0, E.localize)(1074, null);
				class n {
					static {
						this.a = w.$eY.register({
							description: "folding-collapsed-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$TNb),
						});
					}
					static {
						this.b = w.$eY.register({
							description: "folding-collapsed-highlighted-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$TNb),
						});
					}
					static {
						this.c = w.$eY.register({
							description: "folding-manually-collapsed-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$UNb),
						});
					}
					static {
						this.d = w.$eY.register({
							description:
								"folding-manually-collapsed-highlighted-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$UNb),
						});
					}
					static {
						this.e = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
						});
					}
					static {
						this.f = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
						});
					}
					static {
						this.g = w.$eY.register({
							description: "folding-expanded-visual-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName:
								"alwaysShowFoldIcons " + r.ThemeIcon.asClassName(e.$SNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.h = w.$eY.register({
							description: "folding-expanded-auto-hide-visual-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$SNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.i = w.$eY.register({
							description: "folding-manually-expanded-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName:
								"alwaysShowFoldIcons " + r.ThemeIcon.asClassName(e.$VNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.j = w.$eY.register({
							description:
								"folding-manually-expanded-auto-hide-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$VNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.k = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
						});
					}
					static {
						this.l = w.$eY.register({
							description: "folding-hidden-range-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
					}
					constructor(p, o) {
						(this.m = p),
							(this.n = o),
							(this.showFoldingControls = "mouseover"),
							(this.showFoldingHighlights = !0);
					}
					getDecorationOption(p, o, f) {
						return o
							? n.l
							: this.showFoldingControls === "never"
								? p
									? this.showFoldingHighlights
										? n.f
										: n.e
									: n.k
								: p
									? f
										? this.showFoldingHighlights
											? n.d
											: n.c
										: this.showFoldingHighlights
											? n.b
											: n.a
									: this.showFoldingControls === "mouseover"
										? f
											? n.j
											: n.h
										: f
											? n.i
											: n.g;
					}
					changeDecorations(p) {
						return this.m.changeDecorations(p);
					}
					removeDecorations(p) {
						this.m.removeDecorations(p);
					}
				}
				e.$WNb = n;
			},
		),
		define(
			de[350],
			he([
				1, 0, 15, 33, 29, 27, 3, 37, 28, 491, 56, 46, 38, 98, 71, 74, 152, 1551,
				2584, 752, 4, 8, 43, 1219, 659, 660, 40, 391, 162, 69, 6, 31, 9, 67, 10,
				45, 2297,
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
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Nb = e.$ZNb = void 0),
					(e.$2Nb = x),
					(m = mt(m)),
					(s = mt(s));
				const B = new l.$5j("foldingEnabled", !1);
				let U = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.ID = "editor.contrib.folding";
					}
					static get(pe) {
						return pe.getContribution(O.ID);
					}
					static getFoldingRangeProviders(pe, $e) {
						const ye = pe.foldingRangeProvider.ordered($e);
						return O.c?.(ye, $e) ?? ye;
					}
					static setFoldingRangeProviderSelector(pe) {
						return (
							(O.c = pe),
							{
								dispose: () => {
									O.c = void 0;
								},
							}
						);
					}
					constructor(pe, $e, ye, ue, fe, me, ve) {
						super(),
							(this.M = $e),
							(this.N = ye),
							(this.O = me),
							(this.P = ve),
							(this.J = this.D(new C.$Zc())),
							(this.f = pe),
							(this._foldingLimitReporter = new z(pe));
						const ge = this.f.getOptions();
						(this.g = ge.get(h.EditorOption.folding)),
							(this.h =
								ge.get(h.EditorOption.foldingStrategy) !== "indentation"),
							(this.j = ge.get(h.EditorOption.unfoldOnClickAfterEndOfLine)),
							(this.m = !1),
							(this.q = !1),
							(this.n = ge.get(h.EditorOption.foldingImportsByDefault)),
							(this.G = fe.for(ve.foldingRangeProvider, "Folding", {
								min: 200,
							})),
							(this.u = null),
							(this.w = null),
							(this.y = null),
							(this.z = null),
							(this.C = null),
							(this.F = null),
							(this.I = null),
							(this.L = null),
							(this.t = new $.$WNb(pe, me)),
							(this.t.showFoldingControls = ge.get(
								h.EditorOption.showFoldingControls,
							)),
							(this.t.showFoldingHighlights = ge.get(
								h.EditorOption.foldingHighlight,
							)),
							(this.H = B.bindTo(this.M)),
							this.H.set(this.g),
							this.D(this.f.onDidChangeModel(() => this.Q())),
							this.D(
								this.f.onDidChangeConfiguration((be) => {
									if (
										(be.hasChanged(h.EditorOption.folding) &&
											((this.g = this.f
												.getOptions()
												.get(h.EditorOption.folding)),
											this.H.set(this.g),
											this.Q()),
										be.hasChanged(h.EditorOption.foldingMaximumRegions) &&
											this.Q(),
										be.hasChanged(h.EditorOption.showFoldingControls) ||
											be.hasChanged(h.EditorOption.foldingHighlight))
									) {
										const Ce = this.f.getOptions();
										(this.t.showFoldingControls = Ce.get(
											h.EditorOption.showFoldingControls,
										)),
											(this.t.showFoldingHighlights = Ce.get(
												h.EditorOption.foldingHighlight,
											)),
											this.triggerFoldingModelChanged();
									}
									be.hasChanged(h.EditorOption.foldingStrategy) &&
										((this.h =
											this.f
												.getOptions()
												.get(h.EditorOption.foldingStrategy) !== "indentation"),
										this.R()),
										be.hasChanged(h.EditorOption.unfoldOnClickAfterEndOfLine) &&
											(this.j = this.f
												.getOptions()
												.get(h.EditorOption.unfoldOnClickAfterEndOfLine)),
										be.hasChanged(h.EditorOption.foldingImportsByDefault) &&
											(this.n = this.f
												.getOptions()
												.get(h.EditorOption.foldingImportsByDefault));
								}),
							),
							this.Q();
					}
					get limitReporter() {
						return this._foldingLimitReporter;
					}
					saveViewState() {
						const pe = this.f.getModel();
						if (!pe || !this.g || pe.isTooLargeForTokenization()) return {};
						if (this.u) {
							const $e = this.u.getMemento(),
								ye = this.y ? this.y.id : void 0;
							return {
								collapsedRegions: $e,
								lineCount: pe.getLineCount(),
								provider: ye,
								foldedImports: this.q,
							};
						}
					}
					restoreViewState(pe) {
						const $e = this.f.getModel();
						if (
							!(!$e || !this.g || $e.isTooLargeForTokenization() || !this.w) &&
							pe &&
							((this.q = !!pe.foldedImports),
							pe.collapsedRegions && pe.collapsedRegions.length > 0 && this.u)
						) {
							this.m = !0;
							try {
								this.u.applyMemento(pe.collapsedRegions);
							} finally {
								this.m = !1;
							}
						}
					}
					Q() {
						this.J.clear();
						const pe = this.f.getModel();
						!this.g ||
							!pe ||
							pe.isTooLargeForTokenization() ||
							((this.q = !1),
							(this.u = new o.$CNb(pe, this.t)),
							this.J.add(this.u),
							(this.w = new f.$ONb(this.u)),
							this.J.add(this.w),
							this.J.add(this.w.onDidChange(($e) => this.W($e))),
							(this.F = new t.$Jh(this.G.get(pe))),
							(this.I = new t.$Yh(() => this.Y(), 200)),
							this.J.add(this.I),
							this.J.add(
								this.P.foldingRangeProvider.onDidChange(() => this.R()),
							),
							this.J.add(
								this.f.onDidChangeModelLanguageConfiguration(() => this.R()),
							),
							this.J.add(this.f.onDidChangeModelContent(($e) => this.U($e))),
							this.J.add(this.f.onDidChangeCursorPosition(() => this.X())),
							this.J.add(this.f.onMouseDown(($e) => this.Z($e))),
							this.J.add(this.f.onMouseUp(($e) => this.$($e))),
							this.J.add({
								dispose: () => {
									this.z && (this.z.cancel(), (this.z = null)),
										this.F?.cancel(),
										(this.F = null),
										(this.u = null),
										(this.C = null),
										(this.w = null),
										(this.I = null),
										this.y?.dispose(),
										(this.y = null);
								},
							}),
							this.triggerFoldingModelChanged());
					}
					R() {
						this.y?.dispose(),
							(this.y = null),
							this.triggerFoldingModelChanged();
					}
					S(pe) {
						if (this.y) return this.y;
						const $e = new b.$PNb(pe, this.N, this._foldingLimitReporter);
						if (((this.y = $e), this.h && this.u)) {
							const ye = O.getFoldingRangeProviders(this.P, pe);
							ye.length > 0 &&
								(this.y = new S.$XNb(
									pe,
									ye,
									() => this.triggerFoldingModelChanged(),
									this._foldingLimitReporter,
									$e,
								));
						}
						return this.y;
					}
					getFoldingModel() {
						return this.C;
					}
					U(pe) {
						this.w?.notifyChangeModelContent(pe),
							this.triggerFoldingModelChanged();
					}
					triggerFoldingModelChanged() {
						this.F &&
							(this.z && (this.z.cancel(), (this.z = null)),
							(this.C = this.F.trigger(() => {
								const pe = this.u;
								if (!pe) return null;
								const $e = new P.$le(),
									ye = this.S(pe.textModel),
									ue = (this.z = (0, t.$zh)((fe) => ye.compute(fe)));
								return ue.then((fe) => {
									if (fe && ue === this.z) {
										let me;
										if (this.n && !this.q) {
											const be = fe.setCollapsedAllOfType(
												g.$jM.Imports.value,
												!0,
											);
											be && ((me = r.$uwb.capture(this.f)), (this.q = be));
										}
										const ve = this.f.getSelections();
										pe.update(fe, x(ve)), me?.restore(this.f);
										const ge = this.G.update(pe.textModel, $e.elapsed());
										this.F && (this.F.defaultDelay = ge);
									}
									return pe;
								});
							}).then(void 0, (pe) => ((0, w.$4)(pe), null))));
					}
					W(pe) {
						if (this.w && pe.length && !this.m) {
							const $e = this.f.getSelections();
							$e && this.w.adjustSelections($e) && this.f.setSelections($e);
						}
						this.f.setHiddenAreas(pe, this);
					}
					X() {
						this.w && this.w.hasRanges() && this.I.schedule();
					}
					Y() {
						const pe = this.getFoldingModel();
						pe &&
							pe
								.then(($e) => {
									if ($e) {
										const ye = this.f.getSelections();
										if (ye && ye.length > 0) {
											const ue = [];
											for (const fe of ye) {
												const me = fe.selectionStartLineNumber;
												this.w &&
													this.w.isHidden(me) &&
													ue.push(
														...$e.getAllRegionsAtLine(
															me,
															(ve) => ve.isCollapsed && me > ve.startLineNumber,
														),
													);
											}
											ue.length &&
												($e.toggleCollapseState(ue),
												this.reveal(ye[0].getPosition()));
										}
									}
								})
								.then(void 0, w.$4);
					}
					Z(pe) {
						if (
							((this.L = null),
							!this.w ||
								!pe.target ||
								!pe.target.range ||
								(!pe.event.leftButton && !pe.event.middleButton))
						)
							return;
						const $e = pe.target.range;
						let ye = !1;
						switch (pe.target.type) {
							case u.MouseTargetType.GUTTER_LINE_DECORATIONS: {
								const ue = pe.target.detail,
									fe = pe.target.element.offsetLeft;
								if (ue.offsetX - fe < 4) return;
								ye = !0;
								break;
							}
							case u.MouseTargetType.CONTENT_EMPTY: {
								if (
									this.j &&
									this.w.hasRanges() &&
									!pe.target.detail.isAfterLines
								)
									break;
								return;
							}
							case u.MouseTargetType.CONTENT_TEXT: {
								if (this.w.hasRanges()) {
									const ue = this.f.getModel();
									if (
										ue &&
										$e.startColumn === ue.getLineMaxColumn($e.startLineNumber)
									)
										break;
								}
								return;
							}
							default:
								return;
						}
						this.L = { lineNumber: $e.startLineNumber, iconClicked: ye };
					}
					$(pe) {
						const $e = this.u;
						if (!$e || !this.L || !pe.target) return;
						const ye = this.L.lineNumber,
							ue = this.L.iconClicked,
							fe = pe.target.range;
						if (!fe || fe.startLineNumber !== ye) return;
						if (ue) {
							if (pe.target.type !== u.MouseTargetType.GUTTER_LINE_DECORATIONS)
								return;
						} else {
							const ve = this.f.getModel();
							if (!ve || fe.startColumn !== ve.getLineMaxColumn(ye)) return;
						}
						const me = $e.getRegionAtLine(ye);
						if (me && me.startLineNumber === ye) {
							const ve = me.isCollapsed;
							if (ue || ve) {
								const ge = pe.event.altKey;
								let be = [];
								if (ge) {
									const Ce = (Fe) => !Fe.containedBy(me) && !me.containedBy(Fe),
										Le = $e.getRegionsInside(null, Ce);
									for (const Fe of Le) Fe.isCollapsed && be.push(Fe);
									be.length === 0 && (be = Le);
								} else {
									const Ce = pe.event.middleButton || pe.event.shiftKey;
									if (Ce)
										for (const Le of $e.getRegionsInside(me))
											Le.isCollapsed === ve && be.push(Le);
									(ve || !Ce || be.length === 0) && be.push(me);
								}
								$e.toggleCollapseState(be),
									this.reveal({ lineNumber: ye, column: 1 });
							}
						}
					}
					reveal(pe) {
						this.f.revealPositionInCenterIfOutsideViewport(
							pe,
							c.ScrollType.Smooth,
						);
					}
				};
				(e.$ZNb = U),
					(e.$ZNb =
						U =
						O =
							Ne(
								[
									j(1, l.$6j),
									j(2, p.$aN),
									j(3, I.$4N),
									j(4, T.$PBb),
									j(5, R.$0zb),
									j(6, k.$k3),
								],
								U,
							));
				class z {
					constructor(pe) {
						(this.c = pe),
							(this.d = new L.$re()),
							(this.onDidChange = this.d.event),
							(this.f = 0),
							(this.g = !1);
					}
					get limit() {
						return this.c
							.getOptions()
							.get(h.EditorOption.foldingMaximumRegions);
					}
					get computed() {
						return this.f;
					}
					get limited() {
						return this.g;
					}
					update(pe, $e) {
						(pe !== this.f || $e !== this.g) &&
							((this.f = pe), (this.g = $e), this.d.fire());
					}
				}
				e.$1Nb = z;
				class F extends a.$itb {
					runEditorCommand(pe, $e, ye) {
						const ue = pe.get(p.$aN),
							fe = U.get($e);
						if (!fe) return;
						const me = fe.getFoldingModel();
						if (me)
							return (
								this.w(pe, $e),
								me.then((ve) => {
									if (ve) {
										this.invoke(fe, ve, $e, ye, ue);
										const ge = $e.getSelection();
										ge && fe.reveal(ge.getStartPosition());
									}
								})
							);
					}
					d(pe) {
						const $e = pe.getSelections();
						return $e ? $e.map((ye) => ye.startLineNumber) : [];
					}
					h(pe, $e) {
						return pe && pe.selectionLines
							? pe.selectionLines.map((ye) => ye + 1)
							: this.d($e);
					}
					run(pe, $e) {}
				}
				function x(ae) {
					return !ae || ae.length === 0
						? { startsInside: () => !1 }
						: {
								startsInside(pe, $e) {
									for (const ye of ae) {
										const ue = ye.startLineNumber;
										if (ue >= pe && ue <= $e) return !0;
									}
									return !1;
								},
							};
				}
				function H(ae) {
					if (!m.$sg(ae)) {
						if (!m.$ng(ae)) return !1;
						const pe = ae;
						if (
							(!m.$sg(pe.levels) && !m.$pg(pe.levels)) ||
							(!m.$sg(pe.direction) && !m.$lg(pe.direction)) ||
							(!m.$sg(pe.selectionLines) &&
								(!Array.isArray(pe.selectionLines) ||
									!pe.selectionLines.every(m.$pg)))
						)
							return !1;
					}
					return !0;
				}
				class q extends F {
					constructor() {
						super({
							id: "editor.unfold",
							label: s.localize(1047, null),
							alias: "Unfold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketRight,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.BracketRight,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: "Unfold the content in the editor",
								args: [
									{
										name: "Unfold editor argument",
										description: `Property-value pairs that can be passed through this argument:
						* 'levels': Number of levels to unfold. If not set, defaults to 1.
						* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
						* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.
						`,
										constraint: H,
										schema: {
											type: "object",
											properties: {
												levels: { type: "number", default: 1 },
												direction: {
													type: "string",
													enum: ["up", "down"],
													default: "down",
												},
												selectionLines: {
													type: "array",
													items: { type: "number" },
												},
											},
										},
									},
								],
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						const fe = (ue && ue.levels) || 1,
							me = this.h(ue, ye);
						ue && ue.direction === "up"
							? (0, o.$FNb)($e, !1, fe, me)
							: (0, o.$ENb)($e, !1, fe, me);
					}
				}
				class V extends F {
					constructor() {
						super({
							id: "editor.unfoldRecursively",
							label: s.localize(1048, null),
							alias: "Unfold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyCode.BracketRight,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.BracketRight,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						(0, o.$ENb)($e, !1, Number.MAX_VALUE, this.d(ye));
					}
				}
				class G extends F {
					constructor() {
						super({
							id: "editor.fold",
							label: s.localize(1049, null),
							alias: "Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketLeft,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.BracketLeft,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: "Fold the content in the editor",
								args: [
									{
										name: "Fold editor argument",
										description: `Property-value pairs that can be passed through this argument:
							* 'levels': Number of levels to fold.
							* 'direction': If 'up', folds given number of levels up otherwise folds down.
							* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
							If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
						`,
										constraint: H,
										schema: {
											type: "object",
											properties: {
												levels: { type: "number" },
												direction: { type: "string", enum: ["up", "down"] },
												selectionLines: {
													type: "array",
													items: { type: "number" },
												},
											},
										},
									},
								],
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						const fe = this.h(ue, ye),
							me = ue && ue.levels,
							ve = ue && ue.direction;
						typeof me != "number" && typeof ve != "string"
							? (0, o.$GNb)($e, !0, fe)
							: ve === "up"
								? (0, o.$FNb)($e, !0, me || 1, fe)
								: (0, o.$ENb)($e, !0, me || 1, fe);
					}
				}
				class K extends F {
					constructor() {
						super({
							id: "editor.toggleFold",
							label: s.localize(1050, null),
							alias: "Toggle Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$DNb)($e, 1, ue);
					}
				}
				class J extends F {
					constructor() {
						super({
							id: "editor.foldRecursively",
							label: s.localize(1051, null),
							alias: "Fold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyCode.BracketLeft,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.BracketLeft,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$ENb)($e, !0, Number.MAX_VALUE, ue);
					}
				}
				class W extends F {
					constructor() {
						super({
							id: "editor.toggleFoldRecursively",
							label: s.localize(1052, null),
							alias: "Toggle Fold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$DNb)($e, Number.MAX_VALUE, ue);
					}
				}
				class X extends F {
					constructor() {
						super({
							id: "editor.foldAllBlockComments",
							label: s.localize(1053, null),
							alias: "Fold All Block Comments",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Slash),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Slash,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Comment.value, !0);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).comments;
							if (ve && ve.blockCommentStartToken) {
								const ge = new RegExp(
									"^\\s*" + (0, d.$of)(ve.blockCommentStartToken),
								);
								(0, o.$JNb)($e, ge, !0);
							}
						}
					}
				}
				class Y extends F {
					constructor() {
						super({
							id: "editor.foldAllMarkerRegions",
							label: s.localize(1054, null),
							alias: "Fold All Regions",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit8),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit8,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Region.value, !0);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).foldingRules;
							if (ve && ve.markers && ve.markers.start) {
								const ge = new RegExp(ve.markers.start);
								(0, o.$JNb)($e, ge, !0);
							}
						}
					}
				}
				class ie extends F {
					constructor() {
						super({
							id: "editor.unfoldAllMarkerRegions",
							label: s.localize(1055, null),
							alias: "Unfold All Regions",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit9),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit9,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Region.value, !1);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).foldingRules;
							if (ve && ve.markers && ve.markers.start) {
								const ge = new RegExp(ve.markers.start);
								(0, o.$JNb)($e, ge, !1);
							}
						}
					}
				}
				class ne extends F {
					constructor() {
						super({
							id: "editor.foldAllExcept",
							label: s.localize(1056, null),
							alias: "Fold All Except Selected",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Minus),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Minus,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$INb)($e, !0, ue);
					}
				}
				class ee extends F {
					constructor() {
						super({
							id: "editor.unfoldAllExcept",
							label: s.localize(1057, null),
							alias: "Unfold All Except Selected",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Equal),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Equal,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$INb)($e, !1, ue);
					}
				}
				class _ extends F {
					constructor() {
						super({
							id: "editor.foldAll",
							label: s.localize(1058, null),
							alias: "Fold All",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit0),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit0,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						(0, o.$ENb)($e, !0);
					}
				}
				class te extends F {
					constructor() {
						super({
							id: "editor.unfoldAll",
							label: s.localize(1059, null),
							alias: "Unfold All",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyJ),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyJ),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						(0, o.$ENb)($e, !1);
					}
				}
				class Q extends F {
					static {
						this.j = "editor.foldLevel";
					}
					static {
						this.ID = (pe) => Q.j + pe;
					}
					k() {
						return parseInt(this.id.substr(Q.j.length));
					}
					invoke(pe, $e, ye) {
						(0, o.$HNb)($e, this.k(), !0, this.d(ye));
					}
				}
				class Z extends F {
					constructor() {
						super({
							id: "editor.gotoParentFold",
							label: s.localize(1060, null),
							alias: "Go to Parent Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$LNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class se extends F {
					constructor() {
						super({
							id: "editor.gotoPreviousFold",
							label: s.localize(1061, null),
							alias: "Go to Previous Folding Range",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$MNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class re extends F {
					constructor() {
						super({
							id: "editor.gotoNextFold",
							label: s.localize(1062, null),
							alias: "Go to Next Folding Range",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$NNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class le extends F {
					constructor() {
						super({
							id: "editor.createFoldingRangeFromSelection",
							label: s.localize(1063, null),
							alias: "Create Folding Range from Selection",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Comma),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Comma,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = [],
							fe = ye.getSelections();
						if (fe) {
							for (const me of fe) {
								let ve = me.endLineNumber;
								me.endColumn === 1 && --ve,
									ve > me.startLineNumber &&
										(ue.push({
											startLineNumber: me.startLineNumber,
											endLineNumber: ve,
											type: void 0,
											isCollapsed: !0,
											source: v.FoldSource.userDefined,
										}),
										ye.setSelection({
											startLineNumber: me.startLineNumber,
											startColumn: 1,
											endLineNumber: me.startLineNumber,
											endColumn: 1,
										}));
							}
							if (ue.length > 0) {
								ue.sort((ve, ge) => ve.startLineNumber - ge.startLineNumber);
								const me = v.$ANb.sanitizeAndMerge(
									$e.regions,
									ue,
									ye.getModel()?.getLineCount(),
								);
								$e.updatePost(v.$ANb.fromFoldRanges(me));
							}
						}
					}
				}
				class oe extends F {
					constructor() {
						super({
							id: "editor.removeManualFoldingRanges",
							label: s.localize(1064, null),
							alias: "Remove Manual Folding Ranges",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Period),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Period,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = ye.getSelections();
						if (ue) {
							const fe = [];
							for (const me of ue) {
								const { startLineNumber: ve, endLineNumber: ge } = me;
								fe.push(
									ge >= ve
										? { startLineNumber: ve, endLineNumber: ge }
										: { endLineNumber: ge, startLineNumber: ve },
								);
							}
							$e.removeManualRanges(fe), pe.triggerFoldingModelChanged();
						}
					}
				}
				(0, a.$qtb)(U.ID, U, a.EditorContributionInstantiation.Eager),
					(0, a.$ntb)(q),
					(0, a.$ntb)(V),
					(0, a.$ntb)(G),
					(0, a.$ntb)(J),
					(0, a.$ntb)(W),
					(0, a.$ntb)(_),
					(0, a.$ntb)(te),
					(0, a.$ntb)(X),
					(0, a.$ntb)(Y),
					(0, a.$ntb)(ie),
					(0, a.$ntb)(ne),
					(0, a.$ntb)(ee),
					(0, a.$ntb)(K),
					(0, a.$ntb)(Z),
					(0, a.$ntb)(se),
					(0, a.$ntb)(re),
					(0, a.$ntb)(le),
					(0, a.$ntb)(oe);
				for (let ae = 1; ae <= 7; ae++)
					(0, a.$ptb)(
						new Q({
							id: Q.ID(ae),
							label: s.localize(1065, null, ae),
							alias: `Fold Level ${ae}`,
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | (E.KeyCode.Digit0 + ae),
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | (E.KeyCode.Digit0 + ae),
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
					);
				D.$fk.registerCommand(
					"_executeFoldingRangeProvider",
					async function (ae, ...pe) {
						const [$e] = pe;
						if (!($e instanceof M.URI)) throw (0, w.$$)();
						const ye = ae.get(k.$k3),
							ue = ae.get(N.$QO).getModel($e);
						if (!ue) throw (0, w.$$)();
						const fe = ae.get(A.$gj);
						if (!fe.getValue("editor.folding", { resource: $e })) return [];
						const me = ae.get(p.$aN),
							ve = fe.getValue("editor.foldingStrategy", { resource: $e }),
							ge = {
								get limit() {
									return fe.getValue("editor.foldingMaximumRegions", {
										resource: $e,
									});
								},
								update: (Oe, xe) => {},
							},
							be = new b.$PNb(ue, me, ge);
						let Ce = be;
						if (ve !== "indentation") {
							const Oe = U.getFoldingRangeProviders(ye, ue);
							Oe.length && (Ce = new S.$XNb(ue, Oe, () => {}, ge, be));
						}
						const Le = await Ce.compute(i.CancellationToken.None),
							Fe = [];
						try {
							if (Le)
								for (let Oe = 0; Oe < Le.length; Oe++) {
									const xe = Le.getType(Oe);
									Fe.push({
										start: Le.getStartLineNumber(Oe),
										end: Le.getEndLineNumber(Oe),
										kind: xe ? g.$jM.fromValue(xe) : void 0,
									});
								}
							return Fe;
						} finally {
							Ce.dispose();
						}
					},
				);
			},
		),
		define(
			de[1689],
			he([1, 0, 46, 65, 8, 5, 375, 84, 309, 184]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zbc = e.$ybc = void 0),
					(e.$ybc = new w.$5j("commentEditorFocused", !1));
				let u = class extends m.$3yb {
					constructor(h, c, n, g, p, o, f) {
						const b = {
							originalEditor: {
								isSimpleWidget: !0,
								contributions:
									t.EditorExtensionsRegistry.getSomeEditorContributions([
										C.$2Mb.ID,
									]),
							},
							modifiedEditor: {
								isSimpleWidget: !0,
								contributions:
									t.EditorExtensionsRegistry.getSomeEditorContributions([
										C.$2Mb.ID,
									]),
							},
						};
						super(h, c, b, g, n, f, o, p);
					}
					db() {
						return t.EditorExtensionsRegistry.getEditorActions();
					}
					static getEditorOptions(h) {
						return {
							renderSideBySide: !1,
							renderMarginRevertIcon: !1,
							originalEditable: !1,
							diffCodeLens: !1,
							renderOverviewRuler: !1,
							readOnly: !0,
							wordWrap: "off",
							glyphMargin: !1,
							lineDecorationsWidth: 0,
							lineNumbersMinChars: 0,
							lineNumbers: "off",
							folding: !1,
							fontFamily: h.getValue("editor.fontFamily"),
							scrollbar: {
								vertical: "hidden",
								horizontal: "auto",
								verticalScrollbarSize: 0,
								handleMouseWheel: !0,
								alwaysConsumeMouseWheel: !1,
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								horizontalScrollbarSize: 10,
							},
							scrollBeyondLastLine: !1,
							renderLineHighlight: "none",
							renderWhitespace: "none",
							minimap: { enabled: !1 },
							quickSuggestions: !1,
							automaticLayout: !0,
							automaticLayoutIgnoreHeight: !0,
							guides: { indentation: !1 },
						};
					}
				};
				(e.$zbc = u),
					(e.$zbc = u =
						Ne(
							[
								j(2, E.$Li),
								j(3, w.$6j),
								j(4, d.$bO),
								j(5, r.$Owb),
								j(6, i.$dtb),
							],
							u,
						));
			},
		),
		define(
			de[2913],
			he([1, 0, 15, 29, 27, 439, 46, 17, 104, 71, 122, 200, 4, 43, 2586, 2302]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }), (h = mt(h));
				let p = class {
					static {
						g = this;
					}
					static {
						this.ID = "editor.contrib.inPlaceReplaceController";
					}
					static get(s) {
						return s.getContribution(g.ID);
					}
					static {
						this.a = u.$eY.register({
							description: "in-place-replace",
							className: "valueSetReplacement",
						});
					}
					constructor(s, l) {
						(this.b = s),
							(this.c = l),
							(this.d = this.b.createDecorationsCollection());
					}
					dispose() {}
					run(s, l) {
						this.e?.cancel();
						const y = this.b.getSelection(),
							$ = this.b.getModel();
						if (!$ || !y) return;
						let v = y;
						if (v.startLineNumber !== v.endLineNumber) return;
						const S = new E.$Mzb(
								this.b,
								E.CodeEditorStateFlag.Value | E.CodeEditorStateFlag.Position,
							),
							I = $.uri;
						return this.c.canNavigateValueSet(I)
							? ((this.e = (0, t.$zh)((T) => this.c.navigateValueSet(I, v, l))),
								this.e
									.then((T) => {
										if (!T || !T.range || !T.value || !S.validate(this.b))
											return;
										const P = d.$iL.lift(T.range);
										let k = T.range;
										const L = T.value.length - (v.endColumn - v.startColumn);
										(k = {
											startLineNumber: k.startLineNumber,
											startColumn: k.startColumn,
											endLineNumber: k.endLineNumber,
											endColumn: k.startColumn + T.value.length,
										}),
											L > 1 &&
												(v = new m.$kL(
													v.startLineNumber,
													v.startColumn,
													v.endLineNumber,
													v.endColumn + L - 1,
												));
										const D = new n.$Nic(P, v, T.value);
										this.b.pushUndoStop(),
											this.b.executeCommand(s, D),
											this.b.pushUndoStop(),
											this.d.set([{ range: k, options: g.a }]),
											this.f?.cancel(),
											(this.f = (0, t.$Nh)(350)),
											this.f.then(() => this.d.clear()).catch(i.$4);
									})
									.catch(i.$4))
							: Promise.resolve(void 0);
					}
				};
				p = g = Ne([j(1, a.$Cxb)], p);
				class o extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inPlaceReplace.up",
							label: h.localize(1269, null),
							alias: "Replace with Previous Value",
							precondition: r.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: r.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.Comma,
								weight: c.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(s, l) {
						const y = p.get(l);
						return y ? y.run(this.id, !1) : Promise.resolve(void 0);
					}
				}
				class f extends C.$itb {
					constructor() {
						super({
							id: "editor.action.inPlaceReplace.down",
							label: h.localize(1270, null),
							alias: "Replace with Next Value",
							precondition: r.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: r.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.Period,
								weight: c.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(s, l) {
						const y = p.get(l);
						return y ? y.run(this.id, !0) : Promise.resolve(void 0);
					}
				}
				(0, C.$qtb)(p.ID, p, C.EditorContributionInstantiation.Lazy),
					(0, C.$ntb)(o),
					(0, C.$ntb)(f);
			},
		),
		define(
			de[2914],
			he([1, 0, 3, 77, 48, 17, 61, 64, 533, 290, 947, 753, 608, 2306]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ejc = e.$Djc = void 0),
					(e.$Djc = "inline-edit");
				let c = class extends t.$1c {
					constructor(g, p, o) {
						super(),
							(this.c = g),
							(this.model = p),
							(this.f = o),
							(this.a = (0, i.observableValue)(this, !1)),
							(this.b = (0, i.observableFromEvent)(
								this,
								this.c.onDidChangeModel,
								() => this.c.getModel(),
							)),
							(this.g = (0, i.derived)(this, (f) => {
								if (this.a.read(f)) return;
								const b = this.b.read(f);
								if (b !== this.model.targetTextModel.read(f)) return;
								const s = this.model.ghostText.read(f);
								if (!s) return;
								let l = this.model.range?.read(f);
								l &&
									l.startLineNumber === l.endLineNumber &&
									l.startColumn === l.endColumn &&
									(l = void 0);
								const y =
										(l ? l.startLineNumber === l.endLineNumber : !0) &&
										s.parts.length === 1 &&
										s.parts[0].lines.length === 1,
									$ =
										s.parts.length === 1 &&
										s.parts[0].lines.every((M) => M.length === 0),
									v = [],
									S = [];
								function I(M, N) {
									if (S.length > 0) {
										const A = S[S.length - 1];
										N &&
											A.decorations.push(
												new m.$Fub(
													A.content.length + 1,
													A.content.length + 1 + M[0].length,
													N,
													r.InlineDecorationType.Regular,
												),
											),
											(A.content += M[0]),
											(M = M.slice(1));
									}
									for (const A of M)
										S.push({
											content: A,
											decorations: N
												? [
														new m.$Fub(
															1,
															A.length + 1,
															N,
															r.InlineDecorationType.Regular,
														),
													]
												: [],
										});
								}
								const T = b.getLineContent(s.lineNumber);
								let P,
									k = 0;
								if (!$ && (y || !l)) {
									for (const M of s.parts) {
										let N = M.lines;
										l && !y && (I(N, e.$Djc), (N = [])),
											P === void 0
												? (v.push({
														column: M.column,
														text: N[0],
														preview: M.preview,
													}),
													(N = N.slice(1)))
												: I([T.substring(k, M.column - 1)], void 0),
											N.length > 0 &&
												(I(N, e.$Djc),
												P === void 0 && M.column <= T.length && (P = M.column)),
											(k = M.column - 1);
									}
									P !== void 0 && I([T.substring(k)], void 0);
								}
								const L = P !== void 0 ? new a.$xCb(P, T.length + 1) : void 0,
									D = y || !l ? s.lineNumber : l.endLineNumber - 1;
								return {
									inlineTexts: v,
									additionalLines: S,
									hiddenRange: L,
									lineNumber: D,
									additionalReservedLineCount:
										this.model.minReservedLineCount.read(f),
									targetTextModel: b,
									range: l,
									isSingleLine: y,
									isPureRemove: $,
								};
							})),
							(this.h = (0, i.derived)(this, (f) => {
								const b = this.g.read(f);
								if (!b) return [];
								const s = [];
								if (
									(b.hiddenRange &&
										s.push({
											range: b.hiddenRange.toRange(b.lineNumber),
											options: {
												inlineClassName: "inline-edit-hidden",
												description: "inline-edit-hidden",
											},
										}),
									b.range)
								) {
									const l = [];
									if (b.isSingleLine) l.push(b.range);
									else if (!b.isPureRemove) {
										const y = b.range.endLineNumber - b.range.startLineNumber;
										for (let $ = 0; $ < y; $++) {
											const v = b.range.startLineNumber + $,
												S =
													b.targetTextModel.getLineFirstNonWhitespaceColumn(v),
												I = b.targetTextModel.getLineLastNonWhitespaceColumn(v),
												T = new E.$iL(v, S, v, I);
											l.push(T);
										}
									}
									for (const y of l) s.push({ range: y, options: h.$Sxb });
								}
								if (b.range && !b.isSingleLine && b.isPureRemove) {
									const l = new E.$iL(
										b.range.startLineNumber,
										1,
										b.range.endLineNumber - 1,
										1,
									);
									s.push({ range: l, options: h.$Mxb });
								}
								for (const l of b.inlineTexts)
									s.push({
										range: E.$iL.fromPositions(
											new w.$hL(b.lineNumber, l.column),
										),
										options: {
											description: e.$Djc,
											after: {
												content: l.text,
												inlineClassName: l.preview
													? "inline-edit-decoration-preview"
													: "inline-edit-decoration",
												cursorStops: d.InjectedTextCursorStops.Left,
											},
											showIfCollapsed: !0,
										},
									});
								return s;
							})),
							(this.j = this.D(
								new u.$K1b(
									this.c,
									this.f.languageIdCodec,
									(0, i.derived)((f) => {
										const b = this.g.read(f);
										return b && !b.isPureRemove && (b.isSingleLine || !b.range)
											? {
													lineNumber: b.lineNumber,
													additionalLines: b.additionalLines,
													minReservedLineCount: b.additionalReservedLineCount,
													targetTextModel: b.targetTextModel,
												}
											: void 0;
									}),
								),
							)),
							this.D(
								(0, t.$Yc)(() => {
									this.a.set(!0, void 0);
								}),
							),
							this.D((0, a.$yCb)(this.c, this.h));
					}
					ownsViewZone(g) {
						return this.j.viewZoneId === g;
					}
				};
				(e.$Ejc = c), (e.$Ejc = c = Ne([j(2, C.$nM)], c));
			},
		),
		define(
			de[2915],
			he([
				1, 0, 7, 33, 3, 77, 319, 9, 542, 281, 953, 608, 38, 48, 17, 172, 122,
				67, 5, 2308,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b, s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ijc = void 0);
				function* l(S, I, T = 1) {
					I === void 0 && ([I, S] = [S, 0]);
					for (let P = S; P < I; P += T) yield P;
				}
				function y(S) {
					const I = S[0].match(/^\s*/)?.[0] ?? "",
						T = I.length;
					return {
						text: S.map((P) => P.replace(new RegExp("^" + I), "")),
						shift: T,
					};
				}
				let $ = class extends w.$1c {
					static {
						b = this;
					}
					static {
						this.a = 0;
					}
					static b() {
						return d.URI.from({
							scheme: "inline-edit-widget",
							path: new Date().toString() + String(b.a++),
						});
					}
					constructor(I, T, P, k, L) {
						super(),
							(this.r = I),
							(this.s = T),
							(this.u = P),
							(this.w = k),
							(this.y = L),
							(this.c = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (
									!M ||
									M.text.length === 0 ||
									(M.range.startLineNumber === M.range.endLineNumber &&
										!(
											M.range.startColumn === M.range.endColumn &&
											M.range.startColumn === 1
										))
								)
									return null;
								const N = this.r.getModel();
								if (!N) return null;
								const A = Array.from(
										l(M.range.startLineNumber, M.range.endLineNumber + 1),
									),
									R = A.map((F) => N.getLineLastNonWhitespaceColumn(F)),
									O = Math.max(...R),
									B = A[R.indexOf(O)],
									U = new c.$hL(B, O);
								return { top: M.range.startLineNumber, left: U };
							})),
							(this.f = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (!M) return { text: "", shift: 0 };
								const N = y(
									M.text.split(`
`),
								);
								return {
									text: N.text.join(`
`),
									shift: N.shift,
								};
							})),
							(this.g = (0, C.$Yd)(() =>
								this.y.createModel("", null, b.b()),
							).keepObserved(this.B)),
							(this.h = (0, C.$Yd)(() =>
								this.y.createModel("", null, b.b()),
							).keepObserved(this.B)),
							(this.j = (0, E.derived)(
								this,
								(D) => this.q.read(D)?.promiseResult.read(D)?.data,
							)),
							(this.q = (0, E.derived)(this, (D) => {
								const M = this.s.read(D);
								if (!M) return;
								const N = this.r.getModel();
								if (!N) return;
								const A = y(
										N.getValueInRange(M.range).split(`
`),
									).text.join(`
`),
									R = y(
										M.text.split(`
`),
									).text.join(`
`);
								this.g.get().setValue(A), this.h.get().setValue(R);
								const O = this.w.createDiffProvider({
									diffAlgorithm: "advanced",
								});
								return E.ObservablePromise.fromFn(async () => {
									const B = await O.computeDiff(
										this.g.get(),
										this.h.get(),
										{
											computeMoves: !1,
											ignoreTrimWhitespace: !1,
											maxComputationTimeMs: 1e3,
										},
										i.CancellationToken.None,
									);
									if (!B.identical) return B.changes;
								});
							})),
							this.D(
								(0, E.autorunWithStore)((D, M) => {
									if (!this.s.read(D) || this.c.get() === null) return;
									const A = M.add(
										this.u.createInstance(
											v,
											this.r,
											this.c,
											this.f.map((R) => R.text),
											this.f.map((R) => R.shift),
											this.j,
										),
									);
									I.addOverlayWidget(A),
										M.add((0, w.$Yc)(() => I.removeOverlayWidget(A)));
								}),
							);
					}
				};
				(e.$Ijc = $),
					(e.$Ijc = $ = b = Ne([j(2, f.$Li), j(3, u.$Dxb), j(4, o.$QO)], $));
				let v = class extends w.$1c {
					static {
						s = this;
					}
					static {
						this.a = !1;
					}
					static get dropDownVisible() {
						return this.a;
					}
					static {
						this.id = 0;
					}
					constructor(I, T, P, k, L, D) {
						super(),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.F = k),
							(this.G = L),
							(this.H = D),
							(this.b = `InlineEditSideBySideContentWidget${s.id++}`),
							(this.allowEditorOverflow = !1),
							(this.c = (0, t.$)("div.inlineEditSideBySide", void 0)),
							(this.f = (0, E.observableSignalFromEvent)(
								"editor.onDidScrollChange",
								this.y.onDidScrollChange,
							)),
							(this.g = this.D(
								this.H.createInstance(
									r.$wDb,
									this.c,
									{
										glyphMargin: !1,
										lineNumbers: "off",
										minimap: { enabled: !1 },
										guides: {
											indentation: !1,
											bracketPairs: !1,
											bracketPairsHorizontal: !1,
											highlightActiveIndentation: !1,
										},
										folding: !1,
										selectOnLineNumbers: !1,
										selectionHighlight: !1,
										columnSelection: !1,
										overviewRulerBorder: !1,
										overviewRulerLanes: 0,
										lineDecorationsWidth: 0,
										lineNumbersMinChars: 0,
										scrollbar: {
											vertical: "hidden",
											horizontal: "hidden",
											alwaysConsumeMouseWheel: !1,
											handleMouseWheel: !1,
										},
										readOnly: !0,
										wordWrap: "off",
										wordWrapOverride1: "off",
										wordWrapOverride2: "off",
										wrappingIndent: "none",
										wrappingStrategy: void 0,
									},
									{ contributions: [], isSimpleWidget: !0 },
									this.y,
								),
							)),
							(this.h = (0, m.$Uwb)(this.g)),
							(this.j = (0, m.$Uwb)(this.y)),
							(this.q = this.D(
								this.H.createInstance(
									p.$$X,
									"",
									this.y.getModel()?.getLanguageId() ?? g.$0M,
									p.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								),
							)),
							(this.r = (0, E.derived)((M) => {
								const N = this.C.read(M);
								N && this.q.setValue(N);
							}).recomputeInitiallyAndOnChange(this.B)),
							(this.s = (0, E.derived)(this, (M) => {
								this.r.read(M);
								const N = this.z.read(M);
								if (!N) return { org: [], mod: [] };
								const A = this.G.read(M);
								if (!A) return { org: [], mod: [] };
								const R = [],
									O = [];
								if (
									A.length === 1 &&
									A[0].innerChanges[0].modifiedRange.equalsRange(
										this.q.getFullModelRange(),
									)
								)
									return { org: [], mod: [] };
								const B = this.F.get(),
									U = (z) =>
										new n.$iL(
											z.startLineNumber + N.top - 1,
											z.startColumn + B,
											z.endLineNumber + N.top - 1,
											z.endColumn + B,
										);
								for (const z of A)
									if (
										(z.original.isEmpty ||
											R.push({
												range: U(z.original.toInclusiveRange()),
												options: a.$Mxb,
											}),
										z.modified.isEmpty ||
											O.push({
												range: z.modified.toInclusiveRange(),
												options: a.$Lxb,
											}),
										z.modified.isEmpty || z.original.isEmpty)
									)
										z.original.isEmpty ||
											R.push({
												range: U(z.original.toInclusiveRange()),
												options: a.$Txb,
											}),
											z.modified.isEmpty ||
												O.push({
													range: z.modified.toInclusiveRange(),
													options: a.$Qxb,
												});
									else
										for (const F of z.innerChanges || [])
											z.original.contains(F.originalRange.startLineNumber) &&
												R.push({
													range: U(F.originalRange),
													options: F.originalRange.isEmpty() ? a.$Uxb : a.$Sxb,
												}),
												z.modified.contains(F.modifiedRange.startLineNumber) &&
													O.push({
														range: F.modifiedRange,
														options: F.modifiedRange.isEmpty()
															? a.$Rxb
															: a.$Pxb,
													});
								return { org: R, mod: O };
							})),
							(this.u = (0, E.derived)(this, (M) => this.s.read(M).org)),
							(this.w = (0, E.derived)(this, (M) => this.s.read(M).mod)),
							this.g.setModel(this.q),
							this.D(this.j.setDecorations(this.u)),
							this.D(this.h.setDecorations(this.w)),
							this.D(
								(0, E.autorun)((M) => {
									const N = this.h.contentWidth.read(M),
										A =
											this.C.read(M).split(`
`).length - 1,
										R = this.y.getOption(h.EditorOption.lineHeight) * A;
									N <= 0 || this.g.layout({ height: R, width: N });
								}),
							),
							this.D(
								(0, E.autorun)((M) => {
									this.z.read(M), this.y.layoutOverlayWidget(this);
								}),
							),
							this.D(
								(0, E.autorun)((M) => {
									this.f.read(M),
										this.z.read(M) && this.y.layoutOverlayWidget(this);
								}),
							);
					}
					getId() {
						return this.b;
					}
					getDomNode() {
						return this.c;
					}
					getPosition() {
						const I = this.z.get();
						if (!I) return null;
						const T = this.y.getLayoutInfo(),
							P = this.y.getScrolledVisiblePosition(new c.$hL(I.top, 1));
						if (!P) return null;
						const k = P.top - 1,
							L = this.y.getOffsetForColumn(I.left.lineNumber, I.left.column);
						return { preference: { left: T.contentLeft + L + 10, top: k } };
					}
				};
				v = s = Ne([j(5, f.$Li)], v);
			},
		),
		define(
			de[1690],
			he([
				1, 0, 3, 77, 188, 48, 17, 2914, 8, 5, 74, 69, 33, 917, 31, 2894, 38, 7,
				10, 29, 319, 2915, 953, 67,
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
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jjc = void 0);
				let S = class extends t.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.contrib.inlineEditController";
					}
					static {
						this.inlineEditVisibleKey = "inlineEditVisible";
					}
					static {
						this.inlineEditVisibleContext = new m.$5j(
							this.inlineEditVisibleKey,
							!1,
						);
					}
					static {
						this.cursorAtInlineEditKey = "cursorAtInlineEdit";
					}
					static {
						this.cursorAtInlineEditContext = new m.$5j(
							this.cursorAtInlineEditKey,
							!1,
						);
					}
					static get(P) {
						return P.getContribution(v.ID);
					}
					constructor(P, k, L, D, M, N, A, R) {
						super(),
							(this.editor = P),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = R),
							(this.a = v.inlineEditVisibleContext.bindTo(this.r)),
							(this.b = v.cursorAtInlineEditContext.bindTo(this.r)),
							(this.c = (0, i.observableValue)(this, void 0)),
							(this.f = (0, s.$Yd)(this.c, (x) => {
								const H = this.c.read(x);
								if (!H) return;
								const q = H.range.endLineNumber,
									V = H.range.endColumn,
									G =
										H.text.endsWith(`
`) &&
										!(
											H.range.startLineNumber === H.range.endLineNumber &&
											H.range.startColumn === H.range.endColumn
										)
											? H.text.slice(0, -1)
											: H.text,
									K = new c.$BCb(q, [new c.$CCb(V, G, !1)]),
									J =
										H.range.startLineNumber === H.range.endLineNumber &&
										K.parts.length === 1 &&
										K.parts[0].lines.length === 1,
									W = H.text === "";
								return !J && !W
									? void 0
									: this.q.createInstance(d.$Ejc, this.editor, {
											ghostText: (0, i.constObservable)(K),
											minReservedLineCount: (0, i.constObservable)(0),
											targetTextModel: (0, i.constObservable)(
												this.editor.getModel() ?? void 0,
											),
											range: (0, i.constObservable)(H.range),
										});
							})),
							(this.j = (0, i.observableValue)(this, !1)),
							(this.m = (0, i.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() => this.editor.getOption(p.EditorOption.inlineEdit).enabled,
							)),
							(this.n = (0, i.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(p.EditorOption.inlineEdit).fontFamily,
							));
						const O = (0, i.observableSignalFromEvent)(
							"InlineEditController.modelContentChangedSignal",
							P.onDidChangeModelContent,
						);
						this.D(
							(0, i.autorun)((x) => {
								this.m.read(x) && (O.read(x), !this.j.read(x) && this.G(P, !0));
							}),
						);
						const B = (0, i.observableFromEvent)(
							this,
							P.onDidChangeCursorPosition,
							() => P.getPosition(),
						);
						this.D(
							(0, i.autorun)((x) => {
								if (!this.m.read(x)) return;
								const H = B.read(x);
								H && this.z(H);
							}),
						),
							this.D(
								(0, i.autorun)((x) => {
									const H = this.c.read(x);
									if ((this.b.set(!1), !H)) {
										this.a.set(!1);
										return;
									}
									this.a.set(!0);
									const q = P.getPosition();
									q && this.z(q);
								}),
							);
						const U = (0, i.observableSignalFromEvent)(
							"InlineEditController.editorBlurSignal",
							P.onDidBlurEditorWidget,
						);
						this.D(
							(0, i.autorun)(async (x) => {
								this.m.read(x) &&
									(U.read(x),
									!(
										this.u.getValue(
											"editor.experimentalInlineEdit.keepOnBlur",
										) || P.getOption(p.EditorOption.inlineEdit).keepOnBlur
									) &&
										(this.g?.dispose(!0),
										(this.g = void 0),
										await this.clear(!1)));
							}),
						);
						const z = (0, i.observableSignalFromEvent)(
							"InlineEditController.editorFocusSignal",
							P.onDidFocusEditorText,
						);
						this.D(
							(0, i.autorun)((x) => {
								this.m.read(x) && (z.read(x), this.G(P, !0));
							}),
						);
						const F = this.D((0, o.$Qgb)());
						this.D(
							(0, i.autorun)((x) => {
								const H = this.n.read(x);
								F.setStyle(
									H === "" || H === "default"
										? ""
										: `
.monaco-editor .inline-edit-decoration,
.monaco-editor .inline-edit-decoration-preview,
.monaco-editor .inline-edit {
	font-family: ${H};
}`,
								);
							}),
						),
							this.D(new g.$Fjc(this.editor, this.f, this.q)),
							this.D(new l.$Ijc(this.editor, this.c, this.q, this.w, this.y));
					}
					z(P) {
						if (!this.c) {
							this.b.set(!1);
							return;
						}
						const k = this.c.get();
						if (!k) {
							this.b.set(!1);
							return;
						}
						this.b.set(C.$iL.containsPosition(k.range, P));
					}
					C(P, k) {
						if (
							k.text.includes(`
`) &&
							k.range.startLineNumber !== k.range.endLineNumber &&
							k.range.startColumn !== k.range.endColumn
						) {
							if (k.range.startColumn !== 1) return !1;
							const D = k.range.endLineNumber,
								M = k.range.endColumn,
								N = P.getModel()?.getLineLength(D) ?? 0;
							if (M !== N + 1) return !1;
						}
						return !0;
					}
					async F(P, k) {
						this.g && this.g.dispose(!0);
						const L = P.getModel();
						if (!L) return;
						const D = L.getVersionId(),
							M = this.s.inlineEditProvider.all(L);
						if (M.length === 0) return;
						const N = M[0];
						this.g = new h.$Ce();
						const A = this.g.token,
							R = k
								? u.InlineEditTriggerKind.Automatic
								: u.InlineEditTriggerKind.Invoke;
						if (
							(k && (await I(50, A)),
							A.isCancellationRequested ||
								L.isDisposed() ||
								L.getVersionId() !== D)
						)
							return;
						const B = await N.provideInlineEdit(L, { triggerKind: R }, A);
						if (
							B &&
							!(
								A.isCancellationRequested ||
								L.isDisposed() ||
								L.getVersionId() !== D
							) &&
							this.C(P, B)
						)
							return B;
					}
					async G(P, k) {
						this.b.set(!1), await this.clear();
						const L = await this.F(P, k);
						L && this.c.set(L, void 0);
					}
					async trigger() {
						await this.G(this.editor, !1);
					}
					async jumpBack() {
						this.h &&
							(this.editor.setPosition(this.h),
							this.editor.revealPositionInCenterIfOutsideViewport(this.h));
					}
					async accept() {
						this.j.set(!0, void 0);
						const P = this.c.get();
						if (!P) return;
						let k = P.text;
						P.text.startsWith(`
`) && (k = P.text.substring(1)),
							this.editor.pushUndoStop(),
							this.editor.executeEdits("acceptCurrent", [
								w.$jL.replace(C.$iL.lift(P.range), k),
							]),
							P.accepted &&
								(await this.t
									.executeCommand(
										P.accepted.id,
										...(P.accepted.arguments || []),
									)
									.then(void 0, b.$5)),
							this.H(P),
							(0, i.transaction)((L) => {
								this.c.set(void 0, L), this.j.set(!1, L);
							});
					}
					jumpToCurrent() {
						this.h = this.editor.getSelection()?.getStartPosition();
						const P = this.c.get();
						if (!P) return;
						const k = E.$hL.lift({
							lineNumber: P.range.startLineNumber,
							column: P.range.startColumn,
						});
						this.editor.setPosition(k),
							this.editor.revealPositionInCenterIfOutsideViewport(k);
					}
					async clear(P = !0) {
						const k = this.c.get();
						k &&
							k?.rejected &&
							P &&
							(await this.t
								.executeCommand(k.rejected.id, ...(k.rejected.arguments || []))
								.then(void 0, b.$5)),
							k && this.H(k),
							this.c.set(void 0, void 0);
					}
					H(P) {
						const k = this.editor.getModel();
						if (!k) return;
						const L = this.s.inlineEditProvider.all(k);
						L.length !== 0 && L[0].freeInlineEdit(P);
					}
					shouldShowHoverAt(P) {
						const k = this.c.get(),
							L = this.f.get();
						if (!k || !L) return !1;
						const D = k,
							M = L.model;
						if (
							C.$iL.containsPosition(D.range, P.getStartPosition()) ||
							C.$iL.containsPosition(D.range, P.getEndPosition())
						)
							return !0;
						const A = M.ghostText.get();
						return A
							? A.parts.some((R) =>
									P.containsPosition(new E.$hL(A.lineNumber, R.column)),
								)
							: !1;
					}
					shouldShowHoverAtViewZone(P) {
						return this.f.get()?.ownsViewZone(P) ?? !1;
					}
				};
				(e.$Jjc = S),
					(e.$Jjc =
						S =
						v =
							Ne(
								[
									j(1, r.$Li),
									j(2, m.$6j),
									j(3, a.$k3),
									j(4, n.$ek),
									j(5, f.$gj),
									j(6, y.$Dxb),
									j(7, $.$QO),
								],
								S,
							));
				function I(T, P) {
					return new Promise((k) => {
						let L;
						const D = setTimeout(() => {
							L && L.dispose(), k();
						}, T);
						P &&
							(L = P.onCancellationRequested(() => {
								clearTimeout(D), L && L.dispose(), k();
							}));
					});
				}
			},
		),
		define(
			de[2916],
			he([1, 0, 27, 46, 71, 2587, 1690, 11, 8, 43]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ojc = e.$Njc = e.$Mjc = e.$Ljc = e.$Kjc = void 0);
				class u extends i.$itb {
					constructor() {
						super({
							id: E.$yjc,
							label: "Accept Inline Edit",
							alias: "Accept Inline Edit",
							precondition: m.$Kj.and(
								w.EditorContextKeys.writable,
								C.$Jjc.inlineEditVisibleContext,
							),
							kbOpts: [
								{
									weight: r.KeybindingWeight.EditorContrib + 1,
									primary: t.KeyCode.Tab,
									kbExpr: m.$Kj.and(
										w.EditorContextKeys.writable,
										C.$Jjc.inlineEditVisibleContext,
										C.$Jjc.cursorAtInlineEditContext,
									),
								},
							],
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Accept",
									group: "primary",
									order: 1,
								},
							],
						});
					}
					async run(p, o) {
						await C.$Jjc.get(o)?.accept();
					}
				}
				e.$Kjc = u;
				class a extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							m.$Kj.not(C.$Jjc.inlineEditVisibleKey),
						);
						super({
							id: "editor.action.inlineEdit.trigger",
							label: "Trigger Inline Edit",
							alias: "Trigger Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 1,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.trigger();
					}
				}
				e.$Ljc = a;
				class h extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.inlineEditVisibleContext,
							m.$Kj.not(C.$Jjc.cursorAtInlineEditKey),
						);
						super({
							id: E.$Bjc,
							label: "Jump to Inline Edit",
							alias: "Jump to Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 1,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Jump To Edit",
									group: "primary",
									order: 3,
									when: p,
								},
							],
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.jumpToCurrent();
					}
				}
				e.$Mjc = h;
				class c extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.cursorAtInlineEditContext,
						);
						super({
							id: E.$Cjc,
							label: "Jump Back from Inline Edit",
							alias: "Jump Back from Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 10,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Jump Back",
									group: "primary",
									order: 3,
									when: p,
								},
							],
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.jumpBack();
					}
				}
				e.$Njc = c;
				class n extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.inlineEditVisibleContext,
						);
						super({
							id: E.$Ajc,
							label: "Reject Inline Edit",
							alias: "Reject Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib,
								primary: t.KeyCode.Escape,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Reject",
									group: "secondary",
									order: 2,
								},
							],
						});
					}
					async run(p, o) {
						await C.$Jjc.get(o)?.clear();
					}
				}
				e.$Ojc = n;
			},
		),
		