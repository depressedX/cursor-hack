define(de[2948], he([1, 0, 15, 6, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hvc = void 0);
			class E extends w.$1c {
				constructor() {
					super(...arguments),
						(this.dialogs = []),
						(this.a = this.D(new i.$re())),
						(this.onWillShowDialog = this.a.event),
						(this.b = this.D(new i.$re())),
						(this.onDidShowDialog = this.b.event);
				}
				show(d) {
					const m = new t.$0h(),
						r = {
							args: d,
							close: (u) => {
								this.dialogs.splice(0, 1),
									u instanceof Error ? m.error(u) : m.complete(u),
									this.b.fire();
							},
						};
					return this.dialogs.push(r), this.a.fire(), { item: r, result: m.p };
				}
			}
			e.$hvc = E;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
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
		define(
			de[100],
			he([1, 0, 3, 4, 8, 19, 61, 22, 67, 23, 44, 12]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BQb =
						e.$zQb =
						e.$yQb =
						e.$xQb =
						e.$wQb =
						e.$vQb =
						e.$uQb =
						e.$tQb =
						e.$sQb =
						e.$rQb =
						e.$qQb =
						e.$pQb =
						e.$oQb =
						e.$nQb =
						e.$mQb =
						e.$lQb =
						e.$kQb =
						e.$jQb =
						e.$iQb =
						e.$hQb =
						e.$gQb =
						e.$fQb =
						e.$eQb =
						e.$dQb =
						e.$cQb =
						e.$bQb =
						e.$aQb =
						e.$_Pb =
						e.$$Pb =
						e.$0Pb =
						e.$9Pb =
						e.$8Pb =
						e.$7Pb =
						e.$6Pb =
						e.$5Pb =
						e.$4Pb =
						e.$3Pb =
						e.$2Pb =
						e.$1Pb =
						e.$ZPb =
						e.$YPb =
						e.$XPb =
						e.$WPb =
						e.$VPb =
						e.$UPb =
						e.$TPb =
						e.$SPb =
						e.$RPb =
						e.$QPb =
						e.$PPb =
						e.$OPb =
						e.$NPb =
						e.$MPb =
						e.$LPb =
						e.$KPb =
						e.$JPb =
						e.$IPb =
						e.$HPb =
						e.$GPb =
						e.$FPb =
						e.$EPb =
						e.$DPb =
						e.$CPb =
						e.$BPb =
						e.$APb =
						e.$zPb =
						e.$yPb =
						e.$xPb =
						e.$wPb =
							void 0),
					(e.$AQb = c),
					(e.$CQb = g),
					(e.$wPb = new w.$5j("workbenchState", void 0, {
						type: "string",
						description: (0, i.localize)(4004, null),
					})),
					(e.$xPb = new w.$5j(
						"workspaceFolderCount",
						0,
						(0, i.localize)(4005, null),
					)),
					(e.$yPb = new w.$5j("openFolderWorkspaceSupport", !0, !0)),
					(e.$zPb = new w.$5j("enterMultiRootWorkspaceSupport", !0, !0)),
					(e.$APb = new w.$5j("emptyWorkspaceSupport", !0, !0)),
					(e.$BPb = new w.$5j(
						"dirtyWorkingCopies",
						!1,
						(0, i.localize)(4006, null),
					)),
					(e.$CPb = new w.$5j("remoteName", "", (0, i.localize)(4007, null))),
					(e.$DPb = new w.$5j(
						"virtualWorkspace",
						"",
						(0, i.localize)(4008, null),
					)),
					(e.$EPb = new w.$5j(
						"temporaryWorkspace",
						!1,
						(0, i.localize)(4009, null),
					)),
					(e.$FPb = new w.$5j("isFullscreen", !1, (0, i.localize)(4010, null))),
					(e.$GPb = new w.$5j(
						"isAuxiliaryWindowFocusedContext",
						!1,
						(0, i.localize)(4011, null),
					)),
					(e.$HPb = new w.$5j("hasWebFileSystemAccess", !1, !0)),
					(e.$IPb = new w.$5j(
						"embedderIdentifier",
						void 0,
						(0, i.localize)(4012, null),
					)),
					(e.$JPb = new w.$5j(
						"activeEditorIsDirty",
						!1,
						(0, i.localize)(4013, null),
					)),
					(e.$KPb = new w.$5j(
						"activeEditorIsNotPreview",
						!1,
						(0, i.localize)(4014, null),
					)),
					(e.$LPb = new w.$5j(
						"activeEditorIsFirstInGroup",
						!1,
						(0, i.localize)(4015, null),
					)),
					(e.$MPb = new w.$5j(
						"activeEditorIsLastInGroup",
						!1,
						(0, i.localize)(4016, null),
					)),
					(e.$NPb = new w.$5j(
						"activeEditorIsPinned",
						!1,
						(0, i.localize)(4017, null),
					)),
					(e.$OPb = new w.$5j(
						"activeEditorIsReadonly",
						!1,
						(0, i.localize)(4018, null),
					)),
					(e.$PPb = new w.$5j(
						"activeCompareEditorCanSwap",
						!1,
						(0, i.localize)(4019, null),
					)),
					(e.$QPb = new w.$5j(
						"activeEditorCanToggleReadonly",
						!0,
						(0, i.localize)(4020, null),
					)),
					(e.$RPb = new w.$5j(
						"activeEditorCanRevert",
						!1,
						(0, i.localize)(4021, null),
					)),
					(e.$SPb = new w.$5j("activeEditorCanSplitInGroup", !0)),
					(e.$TPb = new w.$5j("activeEditor", null, {
						type: "string",
						description: (0, i.localize)(4022, null),
					})),
					(e.$UPb = new w.$5j(
						"activeEditorAvailableEditorIds",
						"",
						(0, i.localize)(4023, null),
					)),
					(e.$VPb = new w.$5j(
						"textCompareEditorVisible",
						!1,
						(0, i.localize)(4024, null),
					)),
					(e.$WPb = new w.$5j(
						"textCompareEditorActive",
						!1,
						(0, i.localize)(4025, null),
					)),
					(e.$XPb = new w.$5j(
						"sideBySideEditorActive",
						!1,
						(0, i.localize)(4026, null),
					)),
					(e.$YPb = new w.$5j(
						"groupEditorsCount",
						0,
						(0, i.localize)(4027, null),
					)),
					(e.$ZPb = new w.$5j(
						"activeEditorGroupEmpty",
						!1,
						(0, i.localize)(4028, null),
					)),
					(e.$1Pb = new w.$5j(
						"activeEditorGroupIndex",
						0,
						(0, i.localize)(4029, null),
					)),
					(e.$2Pb = new w.$5j(
						"activeEditorGroupLast",
						!1,
						(0, i.localize)(4030, null),
					)),
					(e.$3Pb = new w.$5j(
						"activeEditorGroupLocked",
						!1,
						(0, i.localize)(4031, null),
					)),
					(e.$4Pb = new w.$5j(
						"multipleEditorGroups",
						!1,
						(0, i.localize)(4032, null),
					)),
					(e.$5Pb = e.$4Pb.toNegated()),
					(e.$6Pb = new w.$5j(
						"multipleEditorsSelectedInGroup",
						!1,
						(0, i.localize)(4033, null),
					)),
					(e.$7Pb = new w.$5j(
						"twoEditorsSelectedInGroup",
						!1,
						(0, i.localize)(4034, null),
					)),
					(e.$8Pb = new w.$5j(
						"SelectedEditorsInGroupFileOrUntitledResourceContextKey",
						!0,
						(0, i.localize)(4035, null),
					)),
					(e.$9Pb = new w.$5j(
						"editorPartMultipleEditorGroups",
						!1,
						(0, i.localize)(4036, null),
					)),
					(e.$0Pb = e.$9Pb.toNegated()),
					(e.$$Pb = new w.$5j(
						"editorPartMaximizedEditorGroup",
						!1,
						(0, i.localize)(4037, null),
					)),
					(e.$_Pb = new w.$5j(
						"isAuxiliaryEditorPart",
						!1,
						(0, i.localize)(4038, null),
					)),
					(e.$aQb = new w.$5j("editorIsOpen", !1, (0, i.localize)(4039, null))),
					(e.$bQb = new w.$5j("inZenMode", !1, (0, i.localize)(4040, null))),
					(e.$cQb = new w.$5j(
						"isCenteredLayout",
						!1,
						(0, i.localize)(4041, null),
					)),
					(e.$dQb = new w.$5j(
						"splitEditorsVertically",
						!1,
						(0, i.localize)(4042, null),
					)),
					(e.$eQb = new w.$5j(
						"mainEditorAreaVisible",
						!0,
						(0, i.localize)(4043, null),
					)),
					(e.$fQb = new w.$5j(
						"editorTabsVisible",
						!0,
						(0, i.localize)(4044, null),
					)),
					(e.$gQb = new w.$5j(
						"sideBarVisible",
						!1,
						(0, i.localize)(4045, null),
					)),
					(e.$hQb = new w.$5j("sideBarFocus", !1, (0, i.localize)(4046, null))),
					(e.$iQb = new w.$5j(
						"activeViewlet",
						"",
						(0, i.localize)(4047, null),
					)),
					(e.$jQb = new w.$5j(
						"statusBarFocused",
						!1,
						(0, i.localize)(4048, null),
					)),
					(e.$kQb = new w.$5j(
						"titleBarStyle",
						a.$n ? "native" : "custom",
						(0, i.localize)(4049, null),
					)),
					(e.$lQb = new w.$5j(
						"titleBarVisible",
						!1,
						(0, i.localize)(4050, null),
					)),
					(e.$mQb = new w.$5j(
						"bannerFocused",
						!1,
						(0, i.localize)(4051, null),
					)),
					(e.$nQb = new w.$5j(
						"notificationFocus",
						!0,
						(0, i.localize)(4052, null),
					)),
					(e.$oQb = new w.$5j(
						"notificationCenterVisible",
						!1,
						(0, i.localize)(4053, null),
					)),
					(e.$pQb = new w.$5j(
						"notificationToastsVisible",
						!1,
						(0, i.localize)(4054, null),
					)),
					(e.$qQb = new w.$5j(
						"activeAuxiliary",
						"",
						(0, i.localize)(4055, null),
					)),
					(e.$rQb = new w.$5j(
						"auxiliaryBarFocus",
						!1,
						(0, i.localize)(4056, null),
					)),
					(e.$sQb = new w.$5j(
						"auxiliaryBarVisible",
						!1,
						(0, i.localize)(4057, null),
					)),
					(e.$tQb = new w.$5j("activePanel", "", (0, i.localize)(4058, null))),
					(e.$uQb = new w.$5j("panelFocus", !1, (0, i.localize)(4059, null))),
					(e.$vQb = new w.$5j(
						"panelPosition",
						"bottom",
						(0, i.localize)(4060, null),
					)),
					(e.$wQb = new w.$5j(
						"panelAlignment",
						"center",
						(0, i.localize)(4061, null),
					)),
					(e.$xQb = new w.$5j("panelVisible", !1, (0, i.localize)(4062, null))),
					(e.$yQb = new w.$5j(
						"panelMaximized",
						!1,
						(0, i.localize)(4063, null),
					)),
					(e.$zQb = new w.$5j("focusedView", "", (0, i.localize)(4064, null)));
				function c(p) {
					return `view.${p}.visible`;
				}
				let n = class {
					static {
						h = this;
					}
					static {
						this.Scheme = new w.$5j("resourceScheme", void 0, {
							type: "string",
							description: (0, i.localize)(4065, null),
						});
					}
					static {
						this.Filename = new w.$5j("resourceFilename", void 0, {
							type: "string",
							description: (0, i.localize)(4066, null),
						});
					}
					static {
						this.Dirname = new w.$5j("resourceDirname", void 0, {
							type: "string",
							description: (0, i.localize)(4067, null),
						});
					}
					static {
						this.Path = new w.$5j("resourcePath", void 0, {
							type: "string",
							description: (0, i.localize)(4068, null),
						});
					}
					static {
						this.LangId = new w.$5j("resourceLangId", void 0, {
							type: "string",
							description: (0, i.localize)(4069, null),
						});
					}
					static {
						this.Resource = new w.$5j("resource", void 0, {
							type: "URI",
							description: (0, i.localize)(4070, null),
						});
					}
					static {
						this.Extension = new w.$5j("resourceExtname", void 0, {
							type: "string",
							description: (0, i.localize)(4071, null),
						});
					}
					static {
						this.HasResource = new w.$5j("resourceSet", void 0, {
							type: "boolean",
							description: (0, i.localize)(4072, null),
						});
					}
					static {
						this.IsFileSystemResource = new w.$5j(
							"isFileSystemResource",
							void 0,
							{ type: "boolean", description: (0, i.localize)(4073, null) },
						);
					}
					constructor(o, f, b, s) {
						(this.m = o),
							(this.n = f),
							(this.o = b),
							(this.p = s),
							(this.a = new t.$Zc()),
							(this.d = h.Scheme.bindTo(this.m)),
							(this.f = h.Filename.bindTo(this.m)),
							(this.g = h.Dirname.bindTo(this.m)),
							(this.h = h.Path.bindTo(this.m)),
							(this.i = h.LangId.bindTo(this.m)),
							(this.c = h.Resource.bindTo(this.m)),
							(this.j = h.Extension.bindTo(this.m)),
							(this.k = h.HasResource.bindTo(this.m)),
							(this.l = h.IsFileSystemResource.bindTo(this.m)),
							this.a.add(
								f.onDidChangeFileSystemProviderRegistrations(() => {
									const l = this.get();
									this.l.set(!!(l && f.hasProvider(l)));
								}),
							),
							this.a.add(
								s.onModelAdded((l) => {
									(0, E.$gh)(l.uri, this.get()) && this.q();
								}),
							),
							this.a.add(
								s.onModelLanguageChanged((l) => {
									(0, E.$gh)(l.model.uri, this.get()) && this.q();
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
					q() {
						const o = this.get();
						if (!o) {
							this.i.set(null);
							return;
						}
						const f =
							this.p.getModel(o)?.getLanguageId() ??
							this.o.guessLanguageIdByFilepathOrFirstLine(o);
						this.i.set(f);
					}
					set(o) {
						(o = o ?? void 0),
							!(0, E.$gh)(this.b, o) &&
								((this.b = o),
								this.m.bufferChangeEvents(() => {
									this.c.set(o ? o.toString() : null),
										this.d.set(o ? o.scheme : null),
										this.f.set(o ? (0, E.$kh)(o) : null),
										this.g.set(o ? this.r((0, E.$mh)(o)) : null),
										this.h.set(o ? this.r(o) : null),
										this.q(),
										this.j.set(o ? (0, E.$lh)(o) : null),
										this.k.set(!!o),
										this.l.set(o ? this.n.hasProvider(o) : !1);
								}));
					}
					r(o) {
						return o.scheme === r.Schemas.file ? o.fsPath : o.path;
					}
					reset() {
						(this.b = void 0),
							this.m.bufferChangeEvents(() => {
								this.c.reset(),
									this.d.reset(),
									this.f.reset(),
									this.g.reset(),
									this.h.reset(),
									this.i.reset(),
									this.j.reset(),
									this.k.reset(),
									this.l.reset();
							});
					}
					get() {
						return this.b;
					}
				};
				(e.$BQb = n),
					(e.$BQb =
						n =
						h =
							Ne([j(0, w.$6j), j(1, d.$ll), j(2, C.$nM), j(3, m.$QO)], n));
				function g(p, o, f) {
					if (!o) {
						p.set("");
						return;
					}
					const b = o.resource;
					if (b?.scheme === r.Schemas.untitled && o.editorId !== u.$b1.id)
						p.set("");
					else {
						const s = b ? f.getEditors(b).map((l) => l.id) : [];
						p.set(s.join(","));
					}
				}
			},
		),
		