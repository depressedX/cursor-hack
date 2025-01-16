define(
		de[44],
		he([1, 0, 4, 28, 9, 3, 5, 30, 22, 23, 163, 50, 111]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.EditorsOrder =
					e.CloseDirection =
					e.$A1 =
					e.EditorCloseMethod =
					e.SideBySideEditor =
					e.GroupModelChangeKind =
					e.EditorCloseContext =
					e.$q1 =
					e.EditorInputCapabilities =
					e.$p1 =
					e.SaveReason =
					e.Verbosity =
					e.EditorPaneSelectionCompareResult =
					e.EditorPaneSelectionChangeReason =
					e.$e1 =
					e.$d1 =
					e.$c1 =
					e.$b1 =
					e.$a1 =
						void 0),
				(e.$f1 = g),
				(e.$g1 = p),
				(e.$h1 = o),
				(e.$i1 = f),
				(e.$j1 = b),
				(e.$k1 = s),
				(e.$l1 = l),
				(e.$m1 = y),
				(e.$n1 = $),
				(e.$o1 = v),
				(e.$r1 = L),
				(e.$s1 = M),
				(e.$t1 = N),
				(e.$u1 = A),
				(e.$v1 = R),
				(e.$w1 = O),
				(e.$x1 = B),
				(e.$y1 = U),
				(e.$z1 = V),
				(e.$B1 = J),
				(e.$C1 = X),
				(e.$D1 = Y),
				(e.$E1 = ie),
				(h = xi(h)),
				(e.$a1 = {
					EditorPane: "workbench.contributions.editors",
					EditorFactory: "workbench.contributions.editor.inputFactories",
				}),
				(e.$b1 = {
					id: "default",
					displayName: (0, t.localize)(4074, null),
					providerDisplayName: (0, t.localize)(4075, null),
				}),
				(e.$c1 = "workbench.editor.sidebysideEditor"),
				(e.$d1 = "workbench.editors.textDiffEditor"),
				(e.$e1 = "workbench.editors.binaryResourceDiffEditor");
			var c;
			(function (ne) {
				(ne[(ne.PROGRAMMATIC = 1)] = "PROGRAMMATIC"),
					(ne[(ne.USER = 2)] = "USER"),
					(ne[(ne.EDIT = 3)] = "EDIT"),
					(ne[(ne.NAVIGATION = 4)] = "NAVIGATION"),
					(ne[(ne.JUMP = 5)] = "JUMP");
			})(c || (e.EditorPaneSelectionChangeReason = c = {}));
			var n;
			(function (ne) {
				(ne[(ne.IDENTICAL = 1)] = "IDENTICAL"),
					(ne[(ne.SIMILAR = 2)] = "SIMILAR"),
					(ne[(ne.DIFFERENT = 3)] = "DIFFERENT");
			})(n || (e.EditorPaneSelectionCompareResult = n = {}));
			function g(ne) {
				const ee = ne;
				return (
					!!ee &&
					typeof ee.getSelection == "function" &&
					!!ee.onDidChangeSelection
				);
			}
			function p(ne) {
				const ee = ne;
				return (
					!!ee &&
					typeof ee.getScrollPosition == "function" &&
					typeof ee.setScrollPosition == "function" &&
					!!ee.onDidChangeScroll
				);
			}
			function o(ne, ee, _) {
				for (const te of _.visibleEditorPanes)
					if (te.group.id === ee && ne.matches(te.input))
						return te.getViewState();
			}
			function f(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return w.URI.isUri(ee?.resource);
			}
			function b(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return ee?.original !== void 0 && ee.modified !== void 0;
			}
			function s(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return !ee || (ee.resources && !Array.isArray(ee.resources))
					? !1
					: !!ee.resources || !!ee.multiDiffSource;
			}
			function l(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return (
					Array.isArray(ee?.resources) &&
					ee.resources.every((_) => w.URI.isUri(_))
				);
			}
			function y(ne) {
				if (L(ne) || b(ne)) return !1;
				const ee = ne;
				return ee?.primary !== void 0 && ee.secondary !== void 0;
			}
			function $(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return ee
					? ee.resource === void 0 ||
							ee.resource.scheme === r.Schemas.untitled ||
							ee.forceUntitled === !0
					: !1;
			}
			function v(ne) {
				if (L(ne)) return !1;
				const ee = ne;
				return (
					w.URI.isUri(ee?.base?.resource) &&
					w.URI.isUri(ee?.input1?.resource) &&
					w.URI.isUri(ee?.input2?.resource) &&
					w.URI.isUri(ee?.result?.resource)
				);
			}
			var S;
			(function (ne) {
				(ne[(ne.SHORT = 0)] = "SHORT"),
					(ne[(ne.MEDIUM = 1)] = "MEDIUM"),
					(ne[(ne.LONG = 2)] = "LONG");
			})(S || (e.Verbosity = S = {}));
			var I;
			(function (ne) {
				(ne[(ne.EXPLICIT = 1)] = "EXPLICIT"),
					(ne[(ne.AUTO = 2)] = "AUTO"),
					(ne[(ne.FOCUS_CHANGE = 3)] = "FOCUS_CHANGE"),
					(ne[(ne.WINDOW_CHANGE = 4)] = "WINDOW_CHANGE");
			})(I || (e.SaveReason = I = {}));
			class T {
				constructor() {
					this.a = new Map();
				}
				registerSource(ee, _) {
					let te = this.a.get(ee);
					return (
						te || ((te = { source: ee, label: _ }), this.a.set(ee, te)),
						te.source
					);
				}
				getSourceLabel(ee) {
					return this.a.get(ee)?.label ?? ee;
				}
			}
			e.$p1 = new T();
			var P;
			(function (ne) {
				(ne[(ne.None = 0)] = "None"),
					(ne[(ne.Readonly = 2)] = "Readonly"),
					(ne[(ne.Untitled = 4)] = "Untitled"),
					(ne[(ne.Singleton = 8)] = "Singleton"),
					(ne[(ne.RequiresTrust = 16)] = "RequiresTrust"),
					(ne[(ne.CanSplitInGroup = 32)] = "CanSplitInGroup"),
					(ne[(ne.ForceDescription = 64)] = "ForceDescription"),
					(ne[(ne.CanDropIntoEditor = 128)] = "CanDropIntoEditor"),
					(ne[(ne.MultipleEditors = 256)] = "MultipleEditors"),
					(ne[(ne.Scratchpad = 512)] = "Scratchpad");
			})(P || (e.EditorInputCapabilities = P = {}));
			class k extends E.$1c {}
			e.$q1 = k;
			function L(ne) {
				return ne instanceof k;
			}
			function D(ne) {
				const ee = ne;
				return w.URI.isUri(ee?.preferredResource);
			}
			function M(ne) {
				const ee = ne;
				return L(ee?.primary) && L(ee?.secondary);
			}
			function N(ne) {
				const ee = ne;
				return L(ee?.modified) && L(ee?.original);
			}
			function A(ne, ee, _, te, Q) {
				return ie(
					te,
					[
						(0, a.$wj)({
							id: "workbench.action.openLargeFile",
							label: (0, t.localize)(4076, null),
							run: () => {
								const Z = { ..._, limits: { size: Number.MAX_VALUE } };
								ne.openEditor(ee, Z);
							},
						}),
						(0, a.$wj)({
							id: "workbench.action.configureEditorLargeFileConfirmation",
							label: (0, t.localize)(4077, null),
							run: () =>
								Q.openUserSettings({
									query: "workbench.editorLargeFileConfirmation",
								}),
						}),
					],
					{ forceMessage: !0, forceSeverity: h.default.Warning },
				);
			}
			function R(ne) {
				return L(ne?.editor);
			}
			function O(ne) {
				const ee = ne;
				return R(ne) && ee?.group !== void 0;
			}
			function B(ne) {
				const ee = ne;
				return typeof ee?.groupId == "number" && L(ee.editor);
			}
			function U(ne) {
				return typeof ne?.groupId == "number";
			}
			var z;
			(function (ne) {
				(ne[(ne.UNKNOWN = 0)] = "UNKNOWN"),
					(ne[(ne.REPLACE = 1)] = "REPLACE"),
					(ne[(ne.MOVE = 2)] = "MOVE"),
					(ne[(ne.UNPIN = 3)] = "UNPIN");
			})(z || (e.EditorCloseContext = z = {}));
			var F;
			(function (ne) {
				(ne[(ne.GROUP_ACTIVE = 0)] = "GROUP_ACTIVE"),
					(ne[(ne.GROUP_INDEX = 1)] = "GROUP_INDEX"),
					(ne[(ne.GROUP_LABEL = 2)] = "GROUP_LABEL"),
					(ne[(ne.GROUP_LOCKED = 3)] = "GROUP_LOCKED"),
					(ne[(ne.EDITORS_SELECTION = 4)] = "EDITORS_SELECTION"),
					(ne[(ne.EDITOR_OPEN = 5)] = "EDITOR_OPEN"),
					(ne[(ne.EDITOR_CLOSE = 6)] = "EDITOR_CLOSE"),
					(ne[(ne.EDITOR_MOVE = 7)] = "EDITOR_MOVE"),
					(ne[(ne.EDITOR_ACTIVE = 8)] = "EDITOR_ACTIVE"),
					(ne[(ne.EDITOR_LABEL = 9)] = "EDITOR_LABEL"),
					(ne[(ne.EDITOR_CAPABILITIES = 10)] = "EDITOR_CAPABILITIES"),
					(ne[(ne.EDITOR_PIN = 11)] = "EDITOR_PIN"),
					(ne[(ne.EDITOR_TRANSIENT = 12)] = "EDITOR_TRANSIENT"),
					(ne[(ne.EDITOR_STICKY = 13)] = "EDITOR_STICKY"),
					(ne[(ne.EDITOR_DIRTY = 14)] = "EDITOR_DIRTY"),
					(ne[(ne.EDITOR_WILL_DISPOSE = 15)] = "EDITOR_WILL_DISPOSE");
			})(F || (e.GroupModelChangeKind = F = {}));
			var x;
			(function (ne) {
				(ne[(ne.PRIMARY = 1)] = "PRIMARY"),
					(ne[(ne.SECONDARY = 2)] = "SECONDARY"),
					(ne[(ne.BOTH = 3)] = "BOTH"),
					(ne[(ne.ANY = 4)] = "ANY");
			})(x || (e.SideBySideEditor = x = {}));
			class H {
				getOriginalUri(ee, _) {
					if (!ee) return;
					if (v(ee)) return e.$A1.getOriginalUri(ee.result, _);
					if (_?.supportSideBySide) {
						const { primary: Q, secondary: Z } = this.a(ee);
						if (Q && Z) {
							if (_?.supportSideBySide === x.BOTH)
								return {
									primary: this.getOriginalUri(Q, {
										filterByScheme: _.filterByScheme,
									}),
									secondary: this.getOriginalUri(Z, {
										filterByScheme: _.filterByScheme,
									}),
								};
							if (_?.supportSideBySide === x.ANY)
								return (
									this.getOriginalUri(Q, {
										filterByScheme: _.filterByScheme,
									}) ??
									this.getOriginalUri(Z, { filterByScheme: _.filterByScheme })
								);
							ee = _.supportSideBySide === x.PRIMARY ? Q : Z;
						}
					}
					if (b(ee) || s(ee) || y(ee) || v(ee) || l(ee)) return;
					const te = D(ee) ? ee.preferredResource : ee.resource;
					return !te || !_ || !_.filterByScheme
						? te
						: this.b(te, _.filterByScheme);
				}
				a(ee) {
					return M(ee) || y(ee)
						? { primary: ee.primary, secondary: ee.secondary }
						: N(ee) || b(ee)
							? { primary: ee.modified, secondary: ee.original }
							: { primary: void 0, secondary: void 0 };
				}
				getCanonicalUri(ee, _) {
					if (!ee) return;
					if (v(ee)) return e.$A1.getCanonicalUri(ee.result, _);
					if (_?.supportSideBySide) {
						const { primary: Q, secondary: Z } = this.a(ee);
						if (Q && Z) {
							if (_?.supportSideBySide === x.BOTH)
								return {
									primary: this.getCanonicalUri(Q, {
										filterByScheme: _.filterByScheme,
									}),
									secondary: this.getCanonicalUri(Z, {
										filterByScheme: _.filterByScheme,
									}),
								};
							if (_?.supportSideBySide === x.ANY)
								return (
									this.getCanonicalUri(Q, {
										filterByScheme: _.filterByScheme,
									}) ??
									this.getCanonicalUri(Z, { filterByScheme: _.filterByScheme })
								);
							ee = _.supportSideBySide === x.PRIMARY ? Q : Z;
						}
					}
					if (b(ee) || s(ee) || y(ee) || v(ee) || l(ee)) return;
					const te = ee.resource;
					return !te || !_ || !_.filterByScheme
						? te
						: this.b(te, _.filterByScheme);
				}
				b(ee, _) {
					if (Array.isArray(_)) {
						if (_.some((te) => ee.scheme === te)) return ee;
					} else if (_ === ee.scheme) return ee;
				}
			}
			var q;
			(function (ne) {
				(ne[(ne.UNKNOWN = 0)] = "UNKNOWN"),
					(ne[(ne.KEYBOARD = 1)] = "KEYBOARD"),
					(ne[(ne.MOUSE = 2)] = "MOUSE");
			})(q || (e.EditorCloseMethod = q = {}));
			function V(ne, ee, _, te) {
				if (!ne.isSticky(ee)) return !1;
				switch (te.preventPinnedEditorClose) {
					case "keyboardAndMouse":
						return _ === q.MOUSE || _ === q.KEYBOARD;
					case "mouse":
						return _ === q.MOUSE;
					case "keyboard":
						return _ === q.KEYBOARD;
				}
				return !1;
			}
			e.$A1 = new H();
			var G;
			(function (ne) {
				(ne[(ne.LEFT = 0)] = "LEFT"), (ne[(ne.RIGHT = 1)] = "RIGHT");
			})(G || (e.CloseDirection = G = {}));
			class K {
				constructor() {
					(this.c = new Map()), (this.d = new Map());
				}
				start(ee) {
					const _ = (this.a = ee.get(C.$Li));
					for (const [te, Q] of this.c) this.e(te, Q, _);
					this.c.clear();
				}
				e(ee, _, te) {
					const Q = te.createInstance(_);
					this.d.set(ee, Q);
				}
				registerFileEditorFactory(ee) {
					if (this.b)
						throw new Error("Can only register one file editor factory.");
					this.b = ee;
				}
				getFileEditorFactory() {
					return (0, i.$wg)(this.b);
				}
				registerEditorSerializer(ee, _) {
					if (this.c.has(ee) || this.d.has(ee))
						throw new Error(
							`A editor serializer with type ID '${ee}' was already registered.`,
						);
					return (
						this.a ? this.e(ee, _, this.a) : this.c.set(ee, _),
						(0, E.$Yc)(() => {
							this.c.delete(ee), this.d.delete(ee);
						})
					);
				}
				getEditorSerializer(ee) {
					return this.d.get(typeof ee == "string" ? ee : ee.typeId);
				}
			}
			d.$Io.add(e.$a1.EditorFactory, new K());
			async function J(ne, ee, _) {
				return !ne || !ne.length
					? []
					: await Promise.all(
							ne.map(async (te) => {
								const Q = w.URI.revive(te.fileUri);
								if (!Q) {
									_.info(
										"Cannot resolve the path because it is not valid.",
										te,
									);
									return;
								}
								if (!(await ee.canHandleResource(Q))) {
									_.info(
										"Cannot resolve the path because it cannot be handled",
										te,
									);
									return;
								}
								let se = te.exists,
									re = te.type;
								if (typeof se != "boolean" || typeof re != "number")
									try {
										(re = (await ee.stat(Q)).isDirectory
											? m.FileType.Directory
											: m.FileType.Unknown),
											(se = !0);
									} catch (oe) {
										_.error(oe), (se = !1);
									}
								if (!se && te.openOnlyIfExists) {
									_.info(
										"Cannot resolve the path because it does not exist",
										te,
									);
									return;
								}
								if (re === m.FileType.Directory) {
									_.info(
										"Cannot resolve the path because it is a directory",
										te,
									);
									return;
								}
								const le = { ...te.options, pinned: !0 };
								return se
									? { resource: Q, options: le }
									: { resource: Q, options: le, forceUntitled: !0 };
							}),
						);
			}
			var W;
			(function (ne) {
				(ne[(ne.MOST_RECENTLY_ACTIVE = 0)] = "MOST_RECENTLY_ACTIVE"),
					(ne[(ne.SEQUENTIAL = 1)] = "SEQUENTIAL");
			})(W || (e.EditorsOrder = W = {}));
			function X(ne) {
				const ee = ne;
				if (!ee) return !1;
				const _ = ee;
				if (_.modified) return X(_.modified);
				const te = ee;
				return !!(
					te.contributionsState &&
					te.viewState &&
					Array.isArray(te.cursorState)
				);
			}
			function Y(ne) {
				return (0, u.$yj)(ne);
			}
			function ie(ne, ee, _) {
				const te = (0, u.$zj)(ne, ee);
				return (
					(te.forceMessage = _?.forceMessage),
					(te.forceSeverity = _?.forceSeverity),
					(te.allowDialog = _?.allowDialog),
					te
				);
			}
		},
	),
		