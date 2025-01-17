import '../../../require.js';
import '../../../exports.js';
import '../shared/canUseDOM.js';
import '../shared/environment.js';
import '../shared/invariant.js';
import '../../../vs/base/browser/dom.js';
import '../../../vs/base/browser/window.js';
import '../../../vs/base/common/platform.js';
define(
		de[158],
		he([1, 0, 1415, 1416, 1417, 7, 75, 12]),
		function (ce, e, t, i, w, E, C, d) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ParagraphNode =
					e.RootNode =
					e.DecoratorNode =
					e.DEPRECATED_GridNode =
					e.DEPRECATED_GridCellNode =
					e.DEPRECATED_GridRowNode =
					e.LineBreakNode =
					e.ElementNode =
					e.TabNode =
					e.TextNode =
					e.TEXT_TYPE_TO_MODE =
					e.TEXT_MODE_TO_TYPE =
					e.ELEMENT_FORMAT_TO_TYPE =
					e.ELEMENT_TYPE_TO_FORMAT =
					e.DETAIL_TYPE_TO_DETAIL =
					e.TEXT_TYPE_TO_FORMAT =
					e.LTR_REGEX =
					e.RTL_REGEX =
					e.COMPOSITION_START_CHAR =
					e.DOUBLE_LINE_BREAK =
					e.COMPOSITION_SUFFIX =
					e.NON_BREAKING_SPACE =
					e.IS_ALIGN_END =
					e.IS_ALIGN_START =
					e.IS_ALIGN_JUSTIFY =
					e.IS_ALIGN_RIGHT =
					e.IS_ALIGN_CENTER =
					e.IS_ALIGN_LEFT =
					e.IS_UNMERGEABLE =
					e.IS_DIRECTIONLESS =
					e.IS_ALL_FORMATTING =
					e.IS_HIGHLIGHT =
					e.IS_SUPERSCRIPT =
					e.IS_SUBSCRIPT =
					e.IS_CODE =
					e.IS_UNDERLINE =
					e.IS_STRIKETHROUGH =
					e.IS_ITALIC =
					e.IS_BOLD =
					e.IS_SEGMENTED =
					e.IS_TOKEN =
					e.IS_NORMAL =
					e.FULL_RECONCILE =
					e.HAS_DIRTY_NODES =
					e.NO_DIRTY_NODES =
					e.DOM_TEXT_TYPE =
					e.DOM_ELEMENT_TYPE =
					e.KEY_MODIFIER_COMMAND =
					e.BLUR_COMMAND =
					e.FOCUS_COMMAND =
					e.CAN_UNDO_COMMAND =
					e.CAN_REDO_COMMAND =
					e.CLEAR_HISTORY_COMMAND =
					e.CLEAR_EDITOR_COMMAND =
					e.CUT_COMMAND =
					e.COPY_COMMAND =
					e.DRAGEND_COMMAND =
					e.DRAGOVER_COMMAND =
					e.DRAGSTART_COMMAND =
					e.FORMAT_ELEMENT_COMMAND =
					e.DROP_COMMAND =
					e.OUTDENT_CONTENT_COMMAND =
					e.INDENT_CONTENT_COMMAND =
					e.INSERT_TAB_COMMAND =
					e.KEY_SHIFT_UP_COMMAND =
					e.KEY_SHIFT_DOWN_COMMAND =
					e.KEY_COMMAND_ESCAPE_COMMAND =
					e.KEY_ALT_5_COMMAND =
					e.KEY_ALT_4_COMMAND =
					e.KEY_ALT_3_COMMAND =
					e.KEY_ALT_2_COMMAND =
					e.KEY_ALT_1_COMMAND =
					e.KEY_COMMAND_UP_COMMAND =
					e.KEY_COMMAND_COMMAND =
					e.KEY_ALT_UP_COMMAND =
					e.KEY_ALT_COMMAND =
					e.KEY_TAB_COMMAND =
					e.KEY_COMMAND_RIGHT_BRACKET_COMMAND =
					e.KEY_COMMAND_LEFT_BRACKET_COMMAND =
					e.KEY_BACKSPACE_DELETE_COMMAND =
					e.KEY_COMMAND_SHIFT_SLASH_COMMAND =
					e.KEY_COMMAND_DOT_COMMAND =
					e.KEY_COMMAND_SLASH_COMMAND =
					e.KEY_COMMAND_V_COMMAND =
					e.KEY_COMMAND_R_COMMAND =
					e.KEY_COMMAND_W_COMMAND =
					e.KEY_COMMAND_G_COMMAND =
					e.KEY_COMMAND_M_COMMAND =
					e.KEY_COMMAND_N_COMMAND =
					e.KEY_COMMAND_SHIFT_Z_COMMAND =
					e.KEY_COMMAND_A_COMMAND =
					e.KEY_COMMAND_B_COMMAND =
					e.KEY_COMMAND_P_COMMAND =
					e.KEY_COMMAND_T_COMMAND =
					e.KEY_COMMAND_Z_COMMAND =
					e.KEY_COMMAND_L_COMMAND =
					e.KEY_COMMAND_I_COMMAND =
					e.KEY_COMMAND_U_COMMAND =
					e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND =
					e.KEY_COMMAND_J_COMMAND =
					e.KEY_COMMAND_S_COMMAND =
					e.KEY_COMMAND_SHIFT_S_COMMAND =
					e.KEY_COMMAND_SHIFT_D_COMMAND =
					e.KEY_COMMAND_SHIFT_K_COMMAND =
					e.KEY_COMMAND_0_COMMAND =
					e.KEY_COMMAND_9_COMMAND =
					e.KEY_COMMAND_8_COMMAND =
					e.KEY_COMMAND_7_COMMAND =
					e.KEY_COMMAND_6_COMMAND =
					e.KEY_COMMAND_5_COMMAND =
					e.KEY_COMMAND_4_COMMAND =
					e.KEY_COMMAND_3_COMMAND =
					e.KEY_COMMAND_2_COMMAND =
					e.KEY_COMMAND_1_COMMAND =
					e.KEY_COMMAND_H_COMMAND =
					e.KEY_MAC_CTRL_C_COMMAND =
					e.KEY_COMMAND_E_COMMAND =
					e.KEY_COMMAND_D_COMMAND =
					e.KEY_COMMAND_Y_COMMAND =
					e.KEY_COMMAND_K_COMMAND =
					e.KEY_COMMAND_ABORT_COMMAND =
					e.KEY_COMMAND_ENTER_COMMAND =
					e.KEY_ALT_ARROW_DOWN_COMMAND =
					e.KEY_ALT_ARROW_UP_COMMAND =
					e.KEY_DELETE_COMMAND =
					e.KEY_ESCAPE_COMMAND =
					e.KEY_BACKSPACE_COMMAND =
					e.KEY_SPACE_COMMAND =
					e.KEY_ENTER_COMMAND =
					e.KEY_COMMAND_ARROW_RIGHT_COMMAND =
					e.KEY_COMMAND_ARROW_LEFT_COMMAND =
					e.KEY_COMMAND_ARROW_UP_COMMAND =
					e.KEY_COMMAND_ARROW_DOWN_COMMAND =
					e.KEY_ARROW_DOWN_COMMAND =
					e.KEY_ARROW_UP_COMMAND =
					e.MOVE_TO_START =
					e.KEY_ARROW_LEFT_COMMAND =
					e.MOVE_TO_END =
					e.KEY_ARROW_RIGHT_COMMAND =
					e.KEY_DOWN_COMMAND =
					e.REDO_COMMAND =
					e.UNDO_COMMAND =
					e.FORMAT_TEXT_COMMAND =
					e.DELETE_LINE_COMMAND =
					e.DELETE_WORD_COMMAND =
					e.REMOVE_TEXT_COMMAND =
					e.PASTE_COMMAND =
					e.CONTROLLED_TEXT_INSERTION_COMMAND =
					e.INSERT_PARAGRAPH_COMMAND =
					e.INSERT_LINE_BREAK_COMMAND =
					e.DELETE_CHARACTER_COMMAND =
					e.CLICK_COMMAND =
					e.SELECTION_CHANGE_COMMAND =
					e.scheduleMicroTask =
					e.isArray =
					e.emptyFunction =
					e.RangeSelection =
					e.GridSelection =
					e.NodeSelection =
					e.Point =
					e.LexicalNode =
					e.simulateLexicalKeyPress =
					e.EditorState =
					e.LexicalEditor =
					e.COMMAND_PRIORITY_CRITICAL =
					e.COMMAND_PRIORITY_HIGH =
					e.COMMAND_PRIORITY_NORMAL =
					e.COMMAND_PRIORITY_LOW =
					e.COMMAND_PRIORITY_EDITOR =
						void 0),
				(e.resetEditor = m),
				(e.initializeConversionCache = r),
				(e.createEditor = u),
				(e.editorStateHasDirtySelection = h),
				(e.cloneEditorState = c),
				(e.createEmptyEditorState = n),
				(e.exportNodeToJSON = g),
				(e.$shouldPreventDefaultAndInsertText = L),
				(e.shouldSkipSelectionChange = D),
				(e.onSelectionChange = M),
				(e.onClick = N),
				(e.onPointerDown = A),
				(e.getTargetRange = R),
				(e.$canRemoveText = O),
				(e.isPossiblyAndroidKeyPress = B),
				(e.onBeforeInput = U),
				(e.onInput = z),
				(e.onCompositionStart = F),
				(e.onCompositionEndImpl = x),
				(e.onCompositionEnd = H),
				(e.onKeyUp = q),
				(e.onKeyDown = V),
				(e.getRootElementRemoveHandles = G),
				(e.onDocumentSelectionChange = J),
				(e.stopLexicalPropagation = W),
				(e.hasStoppedLexicalPropagation = X),
				(e.addRootElementEvents = Y),
				(e.removeRootElementEvents = ie),
				(e.cleanActiveNestedEditorsMap = ne),
				(e.markSelectionChangeFromDOMUpdate = ee),
				(e.markCollapsedSelectionFormat = _),
				(e.$garbageCollectDetachedDecorators = te),
				(e.$garbageCollectDetachedDeepChildNodes = Q),
				(e.$garbageCollectDetachedNodes = Z),
				(e.getIsProcesssingMutations = oe),
				(e.updateTimeStamp = ae),
				(e.initTextEntryListener = pe),
				(e.isManagedLineBreak = $e),
				(e.getLastSelection = ye),
				(e.handleTextMutation = ue),
				(e.shouldUpdateTextNodeFromMutation = fe),
				(e.$flushMutations = me),
				(e.flushRootMutations = ve),
				(e.initMutationObserver = ge),
				(e.removeNode = be),
				(e.errorOnTypeKlassMismatch = Le),
				(e.$canSimpleTextNodesBeMerged = Fe),
				(e.$mergeTextNodes = Oe),
				(e.$normalizeTextNode = xe),
				(e.$normalizeSelection = He),
				(e.$normalizePoint = Ke),
				(e.destroyNode = et),
				(e.destroyChildren = rt),
				(e.setTextAlign = ft),
				(e.setElementIndent = nt),
				(e.setElementFormat = lt),
				(e.createNode = ct),
				(e.createChildrenWithDirection = gt),
				(e.createChildren = ht),
				(e.isLastChildLineBreakOrDecorator = Rt),
				(e.reconcileElementTerminatingLineBreak = Nt),
				(e.reconcileBlockDirection = jt),
				(e.reconcileChildrenWithDirection = ti),
				(e.createChildrenArray = kt),
				(e.reconcileChildren = hi),
				(e.reconcileNode = Kt),
				(e.reconcileDecorator = di),
				(e.getFirstChild = Ye),
				(e.getNextSibling = ze),
				(e.reconcileNodeChildren = Xe),
				(e.reconcileRoot = It),
				(e.storeDOMWithKey = Lt),
				(e.getPrevElementByKeyOrThrow = xt),
				(e.$createPoint = Bt),
				(e.selectPointOnNode = Gt),
				(e.$moveSelectionPointToEnd = Mt),
				(e.$transferStartingElementPointToTextPoint = Ut),
				(e.$setPointValues = ei),
				(e.$isRangeSelection = ii),
				(e.DEPRECATED_$isGridSelection = Jt),
				(e.$isNodeSelection = Zt),
				(e.getCharacterOffset = ci),
				(e.getCharacterOffsets = ri),
				(e.$swapPoints = $i),
				(e.moveNativeSelection = Wt),
				(e.$updateCaretSelectionForUnicodeCharacter = tt),
				(e.$removeSegment = at),
				(e.shouldResolveAncestor = pi),
				(e.internalResolveSelectionPoint = Li),
				(e.resolveSelectionPointOnBoundary = Di),
				(e.normalizeSelectionPointsForBoundaries = Ui),
				(e.internalResolveSelectionPoints = Wi),
				(e.$isBlockElementNode = Gi),
				(e.internalMakeRangeSelection = qi),
				(e.$createRangeSelection = Oi),
				(e.$createNodeSelection = yi),
				(e.DEPRECATED_$createGridSelection = Ai),
				(e.internalCreateSelection = li),
				(e.internalCreateRangeSelection = Vi),
				(e.$getSelection = wi),
				(e.$getPreviousSelection = _t),
				(e.$updateElementSelectionOnCreateDeleteNode = ai),
				(e.$updateSelectionResolveTextNodes = Ft),
				(e.applySelectionTransforms = Xt),
				(e.moveSelectionPointToSibling = $t),
				(e.adjustPointOffsetForMergedSibling = ut),
				(e.updateDOMSelection = Et),
				(e.$insertNodes = Tt),
				(e.$getTextContent = qt),
				(e.DEPRECATED_$computeGridMap = At),
				(e.DEPRECATED_$getNodeTriplet = Yt),
				(e.isCurrentlyReadOnlyMode = _e),
				(e.errorOnReadOnly = Si),
				(e.errorOnInfiniteTransforms = gi),
				(e.getActiveEditorState = ki),
				(e.getActiveEditor = Pi),
				(e.internalGetActiveEditor = Hi),
				(e.$applyTransforms = Ji),
				(e.$isNodeValidForTransform = cn),
				(e.$normalizeAllDirtyTextNodes = un),
				(e.$applyAllTransforms = yn),
				(e.$parseSerializedNode = Rn),
				(e.$parseSerializedNodeImpl = _i),
				(e.parseEditorState = Bn),
				(e.readEditorState = Mn),
				(e.handleDEVOnlyPendingUpdateGuarantees = zn),
				(e.commitPendingUpdates = $n),
				(e.triggerTextContentListeners = Ln),
				(e.triggerMutationListeners = wn),
				(e.triggerListeners = Hn),
				(e.triggerCommandListeners = Yn),
				(e.triggerEnqueuedUpdates = Es),
				(e.triggerDeferredUpdateCallbacks = Nn),
				(e.processNestedUpdates = Fn),
				(e.beginUpdate = Gn),
				(e.updateEditor = Dn),
				(e.resetRandomKey = Js),
				(e.generateRandomKey = ts),
				(e.getRegisteredNodeOrThrow = js),
				(e.$isSelectionCapturedInDecorator = os),
				(e.isSelectionCapturedInDecoratorInput = En),
				(e.isSelectionWithinEditor = ns),
				(e.getNearestEditorFromDOMNode = Fi),
				(e.getTextDirection = zi),
				(e.$isTokenOrSegmented = Zi),
				(e.isDOMNodeLexicalTextNode = nn),
				(e.getDOMTextNode = fn),
				(e.toggleTextFormatType = xn),
				(e.$isLeafNode = Sn),
				(e.$setNodeKey = Un),
				(e.internalMarkParentElementsAsDirty = as),
				(e.removeFromParent = Qn),
				(e.internalMarkNodeAsDirty = $s),
				(e.internalMarkSiblingsAsDirty = Us),
				(e.$setCompositionKey = _n),
				(e.$getCompositionKey = sn),
				(e.$getNodeByKey = dn),
				(e.getNodeFromDOMNode = An),
				(e.$getNearestNodeFromDOMNode = vn),
				(e.cloneDecorators = Pn),
				(e.getEditorStateTextContent = es),
				(e.markAllNodesAsDirty = ls),
				(e.$getRoot = Jn),
				(e.internalGetRoot = ss),
				(e.$setSelection = us),
				(e.$flushMutationsUtil = Rs),
				(e.getNodeFromDOM = Ws),
				(e.getTextNodeOffset = br),
				(e.getNodeKeyFromDOM = $r),
				(e.doesContainGrapheme = Xs),
				(e.getEditorsToPropagate = ir),
				(e.createUID = nr),
				(e.getAnchorTextFromDOM = Ys),
				(e.$updateSelectedTextFromDOM = yr),
				(e.$updateTextNodeFromDOMContent = Zs),
				(e.$previousSiblingDoesNotAcceptText = wr),
				(e.$shouldInsertTextAfterOrBeforeTextNode = vr),
				(e.isTab = Cr),
				(e.isBold = sr),
				(e.isItalic = Io),
				(e.isUnderline = Sr),
				(e.isParagraph = Xr),
				(e.isLineBreak = Qs),
				(e.isOpenLineBreak = qs),
				(e.isDeleteWordBackward = xr),
				(e.isDeleteWordForward = Yr),
				(e.isDeleteLineBackward = zr),
				(e.isDeleteLineForward = Er),
				(e.isDeleteBackward = Zr),
				(e.isDeleteForward = uo),
				(e.isUndo = Ir),
				(e.isRedo = jr),
				(e.isCopy = Is),
				(e.isCut = Ur),
				(e.isArrowLeft = rr),
				(e.isArrowRight = Vs),
				(e.isArrowUp = or),
				(e.isArrowDown = Hs),
				(e.isMoveBackward = ar),
				(e.isMoveToStart = Tr),
				(e.isMoveForward = ws),
				(e.isMoveToEnd = Pr),
				(e.isMoveUp = Ci),
				(e.isMoveDown = vs),
				(e.isModifier = Ts),
				(e.isSpace = kr),
				(e.controlOrMeta = ks),
				(e.isReturn = cr),
				(e.isBackspace = ds),
				(e.isEscape = Lr),
				(e.isDelete = is),
				(e.isSelectAll = Wr),
				(e.getCachedClassNameArray = hs),
				(e.setMutatedNode = _s),
				(e.$nodesOfType = Qr),
				(e.resolveElement = Dr),
				(e.$getAdjacentNode = Cs),
				(e.isFirefoxClipboardEvents = lr),
				(e.dispatchCommand = en),
				(e.$textContentRequiresDoubleLinebreakAtEnd = Ks),
				(e.getElementByKeyOrThrow = As),
				(e.getParentElement = Os),
				(e.scrollIntoViewIfNeeded = Mr),
				(e.$hasUpdateTag = St),
				(e.$addUpdateTag = vt),
				(e.$maybeMoveChildrenSelectionToParent = oi),
				(e.$hasAncestor = Ei),
				(e.getDefaultView = tn),
				(e.getWindow = hn),
				(e.$isInlineElementOrDecoratorNode = In),
				(e.$getNearestRootOrShadowRoot = kn),
				(e.$isRootOrShadowRoot = Wn),
				(e.$copyNode = ys),
				(e.$applyNodeReplacement = fs),
				(e.errorOnInsertTextNodeOnRoot = bs),
				(e.$getNodeByKeyOrThrow = Ls),
				(e.createBlockCursorElement = Gs),
				(e.needsBlockCursor = er),
				(e.removeDOMBlockCursorElement = Nr),
				(e.updateDOMBlockCursorElement = Fs),
				(e.getDOMSelection = Ds),
				(e.$splitNode = _r),
				(e.$findMatchingParent = ur),
				(e.$getChildrenRecursively = eo),
				(e.createCommand = an),
				(e.getElementOuterTag = qr),
				(e.getElementInnerTag = Rr),
				(e.setTextThemeClassNames = go),
				(e.diffComposedText = Bs),
				(e.setTextContent = to),
				(e.createTextInnerDOM = io),
				(e.wrapElementWith = Vr),
				(e.convertSpanElement = Po),
				(e.convertBringAttentionToElement = no),
				(e.isNodePre = po),
				(e.findParentPreDOMNode = so),
				(e.convertTextDOMNode = bo),
				(e.findTextInLine = $o),
				(e.convertTextFormatElement = Ps),
				(e.$createTextNode = cs),
				(e.$isTextNode = mn),
				(e.$createTabNode = Ar),
				(e.$isTabNode = wo),
				(e.$isElementNode = ln),
				(e.isPointRemoved = fr),
				(e.convertLineBreakElement = ro),
				(e.$createLineBreakNode = gr),
				(e.$isLineBreakNode = Or),
				(e.DEPRECATED_$isGridRowNode = Fr),
				(e.DEPRECATED_$isGridCellNode = zs),
				(e.DEPRECATED_$isGridNode = Kr),
				(e.$isDecoratorNode = Xn),
				(e.$createRootNode = Ht),
				(e.$isRootNode = it),
				(e.convertParagraphElement = dt),
				(e.$createParagraphNode = yt),
				(e.$isParagraphNode = Ot),
				(w = xi(w)),
				(e.COMMAND_PRIORITY_EDITOR = 0),
				(e.COMMAND_PRIORITY_LOW = 1),
				(e.COMMAND_PRIORITY_NORMAL = 2),
				(e.COMMAND_PRIORITY_HIGH = 3),
				(e.COMMAND_PRIORITY_CRITICAL = 4);
			function m(Qe, Ge, st, pt) {
				const Ct = Qe._keyToDOMMap;
				Ct.clear(),
					(Qe._editorState = n()),
					(Qe._pendingEditorState = pt),
					(Qe._compositionKey = null),
					(Qe._dirtyType = e.NO_DIRTY_NODES),
					Qe._cloneNotNeeded.clear(),
					(Qe._dirtyLeaves = new Set()),
					Qe._dirtyElements.clear(),
					(Qe._normalizedNodes = new Set()),
					(Qe._updateTags = new Set()),
					(Qe._updates = []),
					(Qe._blockCursorElement = null);
				const Pt = Qe._observer;
				Pt !== null && (Pt.disconnect(), (Qe._observer = null)),
					Ge !== null && (Ge.textContent = ""),
					st !== null && ((st.textContent = ""), Ct.set("root", st));
			}
			function r(Qe) {
				const Ge = new Map(),
					st = new Set();
				return (
					Qe.forEach((pt) => {
						const Ct =
							pt.klass.importDOM != null
								? pt.klass.importDOM.bind(pt.klass)
								: null;
						if (Ct == null || st.has(Ct)) return;
						st.add(Ct);
						const Pt = Ct();
						Pt !== null &&
							Object.keys(Pt).forEach((zt) => {
								let Qt = Ge.get(zt);
								Qt === void 0 && ((Qt = []), Ge.set(zt, Qt)), Qt.push(Pt[zt]);
							});
					}),
					Ge
				);
			}
			function u(Qe) {
				const Ge = Qe || {},
					st = Hi(),
					pt = Ge.theme || {},
					Ct = Qe === void 0 ? st : Ge.parentEditor || null,
					Pt = Ge.disableEvents || !1,
					zt = n(),
					Qt = Ge.namespace || (Ct !== null ? Ct._config.namespace : nr()),
					ui = Ge.editorState,
					vi = [Br, dr, xs, hr, ot, ...(Ge.nodes || [])],
					Ii = Ge.onError,
					Mi = Ge.editable !== void 0 ? Ge.editable : !0;
				let Ni;
				if (Qe === void 0 && st !== null) Ni = st._nodes;
				else {
					Ni = new Map();
					for (let Ki = 0; Ki < vi.length; Ki++) {
						let ji = vi[Ki],
							Xi = null,
							on = null;
						if (typeof ji != "function") {
							const bn = ji;
							(ji = bn.replace),
								(Xi = bn.with),
								(on = bn.withKlass ? bn.withKlass : null);
						}
						const Qi = ji.getType(),
							rn = ji.transform(),
							pn = new Set();
						rn !== null && pn.add(rn),
							Ni.set(Qi, {
								klass: ji,
								replace: Xi,
								replaceWithKlass: on,
								transforms: pn,
							});
					}
				}
				const Ri = new a(
					zt,
					Ct,
					Ni,
					{ disableEvents: Pt, namespace: Qt, theme: pt },
					Ii || console.error,
					r(Ni),
					Mi,
				);
				return (
					ui !== void 0 &&
						((Ri._pendingEditorState = ui), (Ri._dirtyType = e.FULL_RECONCILE)),
					Ri
				);
			}
			class a {
				constructor(Ge, st, pt, Ct, Pt, zt, Qt) {
					(this._parentEditor = st),
						(this._rootElement = null),
						(this._editorState = Ge),
						(this._pendingEditorState = null),
						(this._compositionKey = null),
						(this._deferred = []),
						(this._keyToDOMMap = new Map()),
						(this._updates = []),
						(this._updating = !1),
						(this._listeners = {
							decorator: new Set(),
							editable: new Set(),
							mutation: new Map(),
							root: new Set(),
							textcontent: new Set(),
							update: new Set(),
						}),
						(this._commands = new Map()),
						(this._config = Ct),
						(this._nodes = pt),
						(this._decorators = {}),
						(this._pendingDecorators = null),
						(this._dirtyType = e.NO_DIRTY_NODES),
						(this._cloneNotNeeded = new Set()),
						(this._dirtyLeaves = new Set()),
						(this._dirtyElements = new Map()),
						(this._normalizedNodes = new Set()),
						(this._updateTags = new Set()),
						(this._observer = null),
						(this._key = nr()),
						(this._onError = Pt),
						(this._htmlConversions = zt),
						(this._editable = Qt),
						(this._headless = st !== null && st._headless),
						(this._window = null),
						(this._blockCursorElement = null);
				}
				isComposing() {
					return this._compositionKey != null;
				}
				registerUpdateListener(Ge) {
					const st = this._listeners.update;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerEditableListener(Ge) {
					const st = this._listeners.editable;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerDecoratorListener(Ge) {
					const st = this._listeners.decorator;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerTextContentListener(Ge) {
					const st = this._listeners.textcontent;
					return (
						st.add(Ge),
						() => {
							st.delete(Ge);
						}
					);
				}
				registerRootListener(Ge) {
					const st = this._listeners.root;
					return (
						Ge(this._rootElement, null),
						st.add(Ge),
						() => {
							Ge(null, this._rootElement), st.delete(Ge);
						}
					);
				}
				registerCommand(Ge, st, pt) {
					pt === void 0 &&
						(0, w.default)(
							!1,
							'Listener for type "command" requires a "priority".',
						);
					const Ct = this._commands;
					Ct.has(Ge) ||
						Ct.set(Ge, [new Set(), new Set(), new Set(), new Set(), new Set()]);
					const Pt = Ct.get(Ge);
					Pt === void 0 &&
						(0, w.default)(
							!1,
							"registerCommand: Command %s not found in command map",
							String(Ge),
						);
					const zt = Pt[pt];
					return (
						zt.add(st),
						() => {
							zt.delete(st), Pt.every((Qt) => Qt.size === 0) && Ct.delete(Ge);
						}
					);
				}
				registerMutationListener(Ge, st) {
					this._nodes.get(Ge.getType()) === void 0 &&
						(0, w.default)(
							!1,
							"Node %s has not been registered. Ensure node has been passed to createEditor.",
							Ge.name,
						);
					const Ct = this._listeners.mutation;
					return (
						Ct.set(st, Ge),
						() => {
							Ct.delete(st);
						}
					);
				}
				registerNodeTransformToKlass(Ge, st) {
					const pt = Ge.getType(),
						Ct = this._nodes.get(pt);
					return (
						Ct === void 0 &&
							(0, w.default)(
								!1,
								"Node %s has not been registered. Ensure node has been passed to createEditor.",
								Ge.name,
							),
						Ct.transforms.add(st),
						Ct
					);
				}
				registerNodeTransform(Ge, st) {
					const pt = this.registerNodeTransformToKlass(Ge, st),
						Ct = [pt],
						Pt = pt.replaceWithKlass;
					if (Pt != null) {
						const zt = this.registerNodeTransformToKlass(Pt, st);
						Ct.push(zt);
					}
					return (
						ls(this, Ge.getType()),
						() => {
							Ct.forEach((zt) => zt.transforms.delete(st));
						}
					);
				}
				hasNodes(Ge) {
					for (let st = 0; st < Ge.length; st++) {
						const Ct = Ge[st].getType();
						if (!this._nodes.has(Ct)) return !1;
					}
					return !0;
				}
				dispatchCommand(Ge, st) {
					return en(this, Ge, st);
				}
				getDecorators() {
					return this._decorators;
				}
				getRootElement() {
					return this._rootElement;
				}
				getKey() {
					return this._key;
				}
				setRootElement(Ge) {
					const st = this._rootElement;
					if (Ge !== st) {
						const pt = hs(this._config.theme, "root"),
							Ct = this._pendingEditorState || this._editorState;
						if (
							((this._rootElement = Ge),
							m(this, st, Ge, Ct),
							st !== null &&
								(this._config.disableEvents || ie(st),
								pt != null && st.classList.remove(...pt)),
							Ge !== null)
						) {
							const Pt = tn(Ge),
								zt = Ge.style;
							(zt.userSelect = "text"),
								(zt.whiteSpace = "pre-wrap"),
								(zt.wordBreak = "break-word"),
								Ge.setAttribute("data-lexical-editor", "true"),
								(this._window = Pt),
								(this._dirtyType = e.FULL_RECONCILE),
								ge(this),
								this._updateTags.add("history-merge"),
								$n(this),
								this._config.disableEvents || Y(Ge, this),
								pt != null && Ge.classList.add(...pt);
						} else this._window = null;
						Hn("root", this, !1, Ge, st);
					}
				}
				getElementByKey(Ge) {
					return this._keyToDOMMap.get(Ge) || null;
				}
				getEditorState() {
					return this._editorState;
				}
				setEditorState(Ge, st) {
					Ge.isEmpty() &&
						(0, w.default)(
							!1,
							"setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.",
						),
						ve(this);
					const pt = this._pendingEditorState,
						Ct = this._updateTags,
						Pt = st !== void 0 ? st.tag : null;
					pt !== null && !pt.isEmpty() && (Pt != null && Ct.add(Pt), $n(this)),
						(this._pendingEditorState = Ge),
						(this._dirtyType = e.FULL_RECONCILE),
						this._dirtyElements.set("root", !1),
						(this._compositionKey = null),
						Pt != null && Ct.add(Pt),
						$n(this);
				}
				parseEditorState(Ge, st) {
					const pt = typeof Ge == "string" ? JSON.parse(Ge) : Ge;
					return Bn(pt, this, st);
				}
				update(Ge, st) {
					Dn(this, Ge, st);
				}
				focus(Ge, st = {}) {
					const pt = this._rootElement;
					pt !== null &&
						(pt.setAttribute("autocapitalize", "off"),
						Dn(
							this,
							() => {
								const Ct = wi(),
									Pt = Jn();
								Ct !== null
									? (Ct.dirty = !0)
									: Pt.getChildrenSize() !== 0 &&
										(st.defaultSelection === "rootStart"
											? Pt.selectStart()
											: Pt.selectEnd());
							},
							{
								onUpdate: () => {
									pt.removeAttribute("autocapitalize"), Ge && Ge();
								},
								tag: "focus",
							},
						),
						this._pendingEditorState === null &&
							pt.removeAttribute("autocapitalize"));
				}
				blur() {
					const Ge = this._rootElement;
					Ge !== null && Ge.blur();
					const st = Ds(this._window);
					st !== null && st.removeAllRanges();
				}
				isEditable() {
					return this._editable;
				}
				setEditable(Ge) {
					this._editable !== Ge &&
						((this._editable = Ge), Hn("editable", this, !0, Ge));
				}
				toJSON() {
					return { editorState: this._editorState.toJSON() };
				}
			}
			e.LexicalEditor = a;
			function h(Qe, Ge) {
				const st = Ge.getEditorState()._selection,
					pt = Qe._selection;
				if (pt !== null) {
					if (pt.dirty || !pt.is(st)) return !0;
				} else if (st !== null) return !0;
				return !1;
			}
			function c(Qe) {
				return new p(new Map(Qe._nodeMap));
			}
			function n() {
				return new p(new Map([["root", Ht()]]));
			}
			function g(Qe) {
				const Ge = Qe.exportJSON(),
					st = Qe.constructor;
				Ge.type !== st.getType() &&
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .exportJSON().",
						st.name,
					);
				const pt = Ge.children;
				if (ln(Qe)) {
					Array.isArray(pt) ||
						(0, w.default)(
							!1,
							"LexicalNode: Node %s is an element but .exportJSON() does not have a children array.",
							st.name,
						);
					const Ct = Qe.getChildren();
					for (let Pt = 0; Pt < Ct.length; Pt++) {
						const zt = Ct[Pt],
							Qt = g(zt);
						pt.push(Qt);
					}
				}
				return Ge;
			}
			class p {
				constructor(Ge, st) {
					(this._nodeMap = Ge),
						(this._selection = st || null),
						(this._flushSync = !1),
						(this._readOnly = !1);
				}
				isEmpty() {
					return this._nodeMap.size === 1 && this._selection === null;
				}
				read(Ge) {
					return Mn(this, Ge);
				}
				clone(Ge) {
					const st = new p(this._nodeMap, Ge === void 0 ? this._selection : Ge);
					return (st._readOnly = !0), st;
				}
				toJSON() {
					return Mn(this, () => ({ root: g(Jn()) }));
				}
			}
			e.EditorState = p;
			const o = Object.freeze({}),
				f = 30,
				b = [
					["keydown", V],
					["keyup", q],
					["pointerdown", A],
					["compositionstart", F],
					["compositionend", H],
					["input", z],
					["click", N],
					["cut", o],
					["copy", o],
					["dragstart", o],
					["dragover", o],
					["dragend", o],
					["paste", o],
					["focus", o],
					["blur", o],
					["drop", o],
				];
			i.CAN_USE_BEFORE_INPUT && b.push(["beforeinput", (Qe, Ge) => U(Qe, Ge)]);
			let s = 0,
				l = 0,
				y = 0,
				$ = null,
				v = 0,
				S = !1,
				I = !1,
				T = !1,
				P = !1,
				k = [0, "", 0, "root", 0];
			function L(Qe, Ge, st, pt, Ct) {
				const Pt = Qe.anchor,
					zt = Qe.focus,
					Qt = Pt.getNode(),
					ui = Pi(),
					vi = Ds(ui._window),
					Ii = vi !== null ? vi.anchorNode : null,
					Mi = Pt.key,
					Ni = ui.getElementByKey(Mi),
					Ri = st.length;
				return (
					Mi !== zt.key ||
					!mn(Qt) ||
					(((!Ct && (!i.CAN_USE_BEFORE_INPUT || y < pt + 50)) ||
						(Qt.isDirty() && Ri < 2) ||
						Xs(st)) &&
						Pt.offset !== zt.offset &&
						!Qt.isComposing()) ||
					Zi(Qt) ||
					(Qt.isDirty() && Ri > 1) ||
					((Ct || !i.CAN_USE_BEFORE_INPUT) &&
						Ni !== null &&
						!Qt.isComposing() &&
						Ii !== fn(Ni)) ||
					(vi !== null &&
						Ge !== null &&
						(!Ge.collapsed ||
							Ge.startContainer !== vi.anchorNode ||
							Ge.startOffset !== vi.anchorOffset)) ||
					Qt.getFormat() !== Qe.format ||
					Qt.getStyle() !== Qe.style ||
					vr(Qe, Qt)
				);
			}
			function D(Qe, Ge) {
				return (
					Qe !== null &&
					Qe.nodeValue !== null &&
					Qe.nodeType === e.DOM_TEXT_TYPE &&
					Ge !== 0 &&
					Ge !== Qe.nodeValue.length
				);
			}
			function M(Qe, Ge, st) {
				const {
					anchorNode: pt,
					anchorOffset: Ct,
					focusNode: Pt,
					focusOffset: zt,
				} = Qe;
				(S && ((S = !1), D(pt, Ct) && D(Pt, zt))) ||
					Dn(Ge, () => {
						if (!st) {
							us(null);
							return;
						}
						if (!ns(Ge, pt, Pt)) return;
						const Qt = wi();
						if (ii(Qt)) {
							const ui = Qt.anchor,
								vi = ui.getNode();
							if (Qt.isCollapsed()) {
								Qe.type === "Range" &&
									Qe.anchorNode === Qe.focusNode &&
									(Qt.dirty = !0);
								const Ii = hn(Ge).event,
									Mi = Ii ? Ii.timeStamp : performance.now(),
									[Ni, Ri, Ki, ji, Xi] = k;
								Mi < Xi + 200 && ui.offset === Ki && ui.key === ji
									? ((Qt.format = Ni), (Qt.style = Ri))
									: ui.type === "text"
										? ((Qt.format = vi.getFormat()), (Qt.style = vi.getStyle()))
										: ui.type === "element" &&
											((Qt.format = 0), (Qt.style = ""));
							} else {
								let Ii = e.IS_ALL_FORMATTING,
									Mi = !1;
								const Ni = Qt.getNodes(),
									Ri = Ni.length;
								for (let Ki = 0; Ki < Ri; Ki++) {
									const ji = Ni[Ki];
									if (mn(ji) && ((Mi = !0), (Ii &= ji.getFormat()), Ii === 0))
										break;
								}
								Qt.format = Mi ? Ii : 0;
							}
						}
						en(Ge, e.SELECTION_CHANGE_COMMAND, void 0);
					});
			}
			function N(Qe, Ge) {
				Dn(Ge, () => {
					const st = wi(),
						pt = Ds(Ge._window),
						Ct = _t();
					if (pt) {
						if (ii(st)) {
							const Pt = st.anchor,
								zt = Pt.getNode();
							if (
								Pt.type === "element" &&
								Pt.offset === 0 &&
								st.isCollapsed() &&
								!it(zt) &&
								Jn().getChildrenSize() === 1 &&
								zt.getTopLevelElementOrThrow().isEmpty() &&
								Ct !== null &&
								st.is(Ct)
							)
								pt.removeAllRanges(), (st.dirty = !0);
							else if (Qe.detail === 3 && !st.isCollapsed()) {
								const ui = st.focus.getNode();
								zt !== ui &&
									(ln(zt) ? zt.select(0) : zt.getParentOrThrow().select(0));
							}
						} else if (Qe.pointerType === "touch") {
							const Pt = pt.anchorNode;
							if (Pt !== null) {
								const zt = Pt.nodeType;
								if (zt === e.DOM_ELEMENT_TYPE || zt === e.DOM_TEXT_TYPE) {
									const Qt = Vi(Ct, pt, Ge);
									us(Qt);
								}
							}
						}
					}
					en(Ge, e.CLICK_COMMAND, Qe);
				});
			}
			function A(Qe, Ge) {
				const st = Qe.target,
					pt = Qe.pointerType;
				st instanceof Node &&
					pt !== "touch" &&
					Dn(Ge, () => {
						os(st) || (I = !0);
					});
			}
			function R(Qe) {
				if (!Qe.getTargetRanges) return null;
				const Ge = Qe.getTargetRanges();
				return Ge.length === 0 ? null : Ge[0];
			}
			function O(Qe, Ge) {
				return Qe !== Ge || ln(Qe) || ln(Ge) || !Qe.isToken() || !Ge.isToken();
			}
			function B(Qe) {
				return l === 229 && Qe < s + f;
			}
			function U(Qe, Ge) {
				const st = Qe.inputType,
					pt = R(Qe);
				st === "deleteCompositionText" ||
					(i.IS_FIREFOX && lr(Ge)) ||
					(st !== "insertCompositionText" &&
						Dn(Ge, () => {
							const Ct = wi();
							if (st === "deleteContentBackward") {
								if (Ct === null) {
									const Ii = _t();
									if (!ii(Ii)) return;
									us(Ii.clone());
								}
								if (ii(Ct)) {
									if (
										B(Qe.timeStamp) &&
										Ge.isComposing() &&
										Ct.anchor.key === Ct.focus.key
									) {
										if (
											(_n(null),
											(s = 0),
											setTimeout(() => {
												Dn(Ge, () => {
													_n(null);
												});
											}, f),
											ii(Ct))
										) {
											const Ii = Ct.anchor.getNode();
											Ii.markDirty(),
												(Ct.format = Ii.getFormat()),
												(Ct.style = Ii.getStyle());
										}
									} else
										Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !0);
									return;
								}
							}
							if (!ii(Ct)) return;
							const Pt = Qe.data;
							$ !== null && yr(!1, Ge, $),
								(!Ct.dirty || $ !== null) &&
									Ct.isCollapsed() &&
									!it(Ct.anchor.getNode()) &&
									pt !== null &&
									Ct.applyDOMRange(pt),
								($ = null);
							const zt = Ct.anchor,
								Qt = Ct.focus,
								ui = zt.getNode(),
								vi = Qt.getNode();
							if (st === "insertText" || st === "insertTranspose") {
								if (
									Pt ===
									`
`
								)
									Qe.preventDefault(), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1);
								else if (Pt === e.DOUBLE_LINE_BREAK)
									Qe.preventDefault(),
										en(Ge, e.INSERT_PARAGRAPH_COMMAND, void 0);
								else if (Pt == null && Qe.dataTransfer) {
									const Ii = Qe.dataTransfer.getData("text/plain");
									Qe.preventDefault(), Ct.insertRawText(Ii);
								} else
									Pt != null && L(Ct, pt, Pt, Qe.timeStamp, !0)
										? (Qe.preventDefault(),
											en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Pt))
										: ($ = Pt);
								y = Qe.timeStamp;
								return;
							}
							switch ((Qe.preventDefault(), st)) {
								case "insertFromYank":
								case "insertFromDrop":
								case "insertReplacementText": {
									en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Qe);
									break;
								}
								case "insertFromComposition": {
									_n(null), en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, Qe);
									break;
								}
								case "insertLineBreak": {
									_n(null), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1);
									break;
								}
								case "insertParagraph": {
									_n(null),
										T
											? ((T = !1), en(Ge, e.INSERT_LINE_BREAK_COMMAND, !1))
											: en(Ge, e.INSERT_PARAGRAPH_COMMAND, void 0);
									break;
								}
								case "insertFromPaste":
								case "insertFromPasteAsQuotation": {
									en(Ge, e.PASTE_COMMAND, Qe);
									break;
								}
								case "deleteByComposition": {
									O(ui, vi) && en(Ge, e.REMOVE_TEXT_COMMAND, void 0);
									break;
								}
								case "deleteByDrag":
								case "deleteByCut": {
									en(Ge, e.REMOVE_TEXT_COMMAND, void 0);
									break;
								}
								case "deleteContent": {
									en(Ge, e.DELETE_CHARACTER_COMMAND, !1);
									break;
								}
								case "deleteWordBackward": {
									en(Ge, e.DELETE_WORD_COMMAND, !0);
									break;
								}
								case "deleteWordForward": {
									en(Ge, e.DELETE_WORD_COMMAND, !1);
									break;
								}
								case "deleteHardLineBackward":
								case "deleteSoftLineBackward": {
									en(Ge, e.DELETE_LINE_COMMAND, !0);
									break;
								}
								case "deleteContentForward":
								case "deleteHardLineForward":
								case "deleteSoftLineForward": {
									en(Ge, e.DELETE_LINE_COMMAND, !1);
									break;
								}
								case "formatStrikeThrough": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "strikethrough");
									break;
								}
								case "formatBold": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "bold");
									break;
								}
								case "formatItalic": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "italic");
									break;
								}
								case "formatUnderline": {
									en(Ge, e.FORMAT_TEXT_COMMAND, "underline");
									break;
								}
								case "historyUndo": {
									en(Ge, e.UNDO_COMMAND, void 0);
									break;
								}
								case "historyRedo": {
									en(Ge, e.REDO_COMMAND, void 0);
									break;
								}
								default:
							}
						}));
			}
			function z(Qe, Ge) {
				Qe.stopPropagation(),
					Dn(Ge, () => {
						const st = wi(),
							pt = Qe.data,
							Ct = R(Qe);
						if (pt != null && ii(st) && L(st, Ct, pt, Qe.timeStamp, !1)) {
							P && (x(Ge, pt), (P = !1));
							const Pt = st.anchor,
								zt = Pt.getNode(),
								Qt = Ds(Ge._window);
							if (Qt === null) return;
							const ui = Pt.offset;
							(!i.CAN_USE_BEFORE_INPUT ||
								st.isCollapsed() ||
								!mn(zt) ||
								Qt.anchorNode === null ||
								zt.getTextContent().slice(0, ui) +
									pt +
									zt.getTextContent().slice(ui + st.focus.offset) !==
									Ys(Qt.anchorNode)) &&
								en(Ge, e.CONTROLLED_TEXT_INSERTION_COMMAND, pt);
							const vi = pt.length;
							i.IS_FIREFOX &&
								vi > 1 &&
								Qe.inputType === "insertCompositionText" &&
								!Ge.isComposing() &&
								(st.anchor.offset -= vi),
								!i.IS_SAFARI &&
									!i.IS_IOS &&
									!i.IS_APPLE_WEBKIT &&
									Ge.isComposing() &&
									((s = 0), _n(null));
						} else
							yr(!1, Ge, pt !== null ? pt : void 0),
								P && (x(Ge, pt || void 0), (P = !1));
						Rs();
					}),
					($ = null);
			}
			function F(Qe, Ge) {
				Dn(Ge, () => {
					const st = wi();
					if (ii(st) && !Ge.isComposing()) {
						const pt = st.anchor,
							Ct = st.anchor.getNode();
						_n(pt.key),
							(Qe.timeStamp < s + f ||
								pt.type === "element" ||
								!st.isCollapsed() ||
								Ct.getFormat() !== st.format ||
								Ct.getStyle() !== st.style) &&
								en(
									Ge,
									e.CONTROLLED_TEXT_INSERTION_COMMAND,
									e.COMPOSITION_START_CHAR,
								);
					}
				});
			}
			function x(Qe, Ge) {
				const st = Qe._compositionKey;
				if ((_n(null), st !== null && Ge != null)) {
					if (Ge === "") {
						const pt = dn(st),
							Ct = fn(Qe.getElementByKey(st));
						Ct !== null &&
							Ct.nodeValue !== null &&
							mn(pt) &&
							Zs(pt, Ct.nodeValue, null, null, !0);
						return;
					}
					if (
						Ge[Ge.length - 1] ===
						`
`
					) {
						const pt = wi();
						if (ii(pt)) {
							const Ct = pt.focus;
							pt.anchor.set(Ct.key, Ct.offset, Ct.type),
								en(Qe, e.KEY_ENTER_COMMAND, null);
							return;
						}
					}
				}
				yr(!0, Qe, Ge);
			}
			function H(Qe, Ge) {
				i.IS_FIREFOX
					? (P = !0)
					: Dn(Ge, () => {
							x(Ge, Qe.data);
						});
			}
			function q(Qe, Ge) {
				const {
					keyCode: st,
					shiftKey: pt,
					ctrlKey: Ct,
					metaKey: Pt,
					altKey: zt,
				} = Qe;
				st === 18 && !zt
					? (Qe.preventDefault(), en(Ge, e.KEY_ALT_UP_COMMAND, Qe))
					: (d.$m ? st === 91 && !Pt : st === 17 && !Ct)
						? en(Ge, e.KEY_COMMAND_UP_COMMAND, Qe)
						: st === 16 && en(Ge, e.KEY_SHIFT_UP_COMMAND, Qe);
			}
			function V(Qe, Ge) {
				if (
					((Qe.keyCode === 9 && Qe.ctrlKey) ||
					Qe.keyCode === 17 ||
					(Qe.metaKey && Qe.keyCode === 220)
						? console.log("[lexical] Saw whitelisted key, not stopping")
						: Qe.stopPropagation(),
					(s = Qe.timeStamp),
					(l = Qe.keyCode),
					Ge.isComposing())
				)
					return;
				const {
					keyCode: st,
					shiftKey: pt,
					ctrlKey: Ct,
					metaKey: Pt,
					altKey: zt,
				} = Qe;
				if (!en(Ge, e.KEY_DOWN_COMMAND, Qe)) {
					if (st === 13 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ENTER_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 8 && (Ct || Pt))
						en(Ge, e.KEY_BACKSPACE_DELETE_COMMAND, Qe) && Qe.preventDefault();
					else if (d.$m && st === 67 && Ct)
						en(Ge, e.KEY_MAC_CTRL_C_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 67 && Ct)
						en(Ge, e.KEY_COMMAND_ABORT_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 87 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_W_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 190 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_DOT_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 191 && (Ct || Pt) && !pt)
						en(Ge, e.KEY_COMMAND_SLASH_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 191 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_SLASH_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 16)
						en(Ge, e.KEY_SHIFT_DOWN_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 75 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_K_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 68 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_D_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 83 && (Ct || Pt) && pt)
						en(Ge, e.KEY_COMMAND_SHIFT_S_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 83 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_S_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 75 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_K_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 89 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_Y_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 68 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_D_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 69 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_E_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 72 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_H_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 49 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_1_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 50 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_2_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 51 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_3_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 52 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_4_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 53 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_5_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 54 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_6_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 55 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_7_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 56 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_8_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 57 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_9_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 48 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_0_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 74 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_J_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 76 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_L_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 89 && ((Ct && pt) || Pt))
						en(Ge, e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 85 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_U_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 84 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_T_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 80 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_P_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 66 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_B_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 65 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_A_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 73 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_I_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 78 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_N_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 82 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_R_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 77 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_M_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 86 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_V_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 71 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_G_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 219 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_LEFT_BRACKET_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (st === 221 && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_RIGHT_BRACKET_COMMAND, Qe) &&
							Qe.preventDefault();
					else if (or(st) && zt) en(Ge, e.KEY_ALT_ARROW_UP_COMMAND, Qe);
					else if (Hs(st) && zt) en(Ge, e.KEY_ALT_ARROW_DOWN_COMMAND, Qe);
					else if (ws(st, Ct, zt, Pt)) en(Ge, e.KEY_ARROW_RIGHT_COMMAND, Qe);
					else if (Pr(st, Ct, pt, zt, Pt)) en(Ge, e.MOVE_TO_END, Qe);
					else if (ar(st, Ct, zt, Pt)) en(Ge, e.KEY_ARROW_LEFT_COMMAND, Qe);
					else if (Tr(st, Ct, pt, zt, Pt)) en(Ge, e.MOVE_TO_START, Qe);
					else if (Ci(st, Ct, Pt)) en(Ge, e.KEY_ARROW_UP_COMMAND, Qe);
					else if (Hs(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_DOWN_COMMAND, Qe);
					else if (or(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_UP_COMMAND, Qe);
					else if (rr(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_LEFT_COMMAND, Qe);
					else if (Vs(st) && (Ct || Pt))
						en(Ge, e.KEY_COMMAND_ARROW_RIGHT_COMMAND, Qe);
					else if (vs(st, Ct, Pt)) en(Ge, e.KEY_ARROW_DOWN_COMMAND, Qe);
					else if (Qs(st, pt)) (T = !0), en(Ge, e.KEY_ENTER_COMMAND, Qe);
					else if (kr(st)) en(Ge, e.KEY_SPACE_COMMAND, Qe);
					else if (qs(st, Ct))
						Qe.preventDefault(),
							(T = !0),
							en(Ge, e.INSERT_LINE_BREAK_COMMAND, !0);
					else if (Xr(st, pt)) (T = !1), en(Ge, e.KEY_ENTER_COMMAND, Qe);
					else if (Zr(st, zt, Pt, Ct))
						ds(st)
							? en(Ge, e.KEY_BACKSPACE_COMMAND, Qe)
							: (Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !0));
					else if (Lr(st)) en(Ge, e.KEY_ESCAPE_COMMAND, Qe);
					else if (uo(st, Ct, pt, zt, Pt))
						is(st)
							? en(Ge, e.KEY_DELETE_COMMAND, Qe)
							: (Qe.preventDefault(), en(Ge, e.DELETE_CHARACTER_COMMAND, !1));
					else if (xr(st, zt, Ct))
						Qe.preventDefault(), en(Ge, e.DELETE_WORD_COMMAND, !0);
					else if (Yr(st, zt, Ct))
						Qe.preventDefault(), en(Ge, e.DELETE_WORD_COMMAND, !1);
					else if (zr(st, Pt))
						Qe.preventDefault(), en(Ge, e.DELETE_LINE_COMMAND, !0);
					else if (Er(st, Pt))
						Qe.preventDefault(), en(Ge, e.DELETE_LINE_COMMAND, !1);
					else if (sr(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "bold");
					else if (Sr(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "underline");
					else if (Io(st, zt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.FORMAT_TEXT_COMMAND, "italic");
					else if (Cr(st, zt, Ct, Pt)) en(Ge, e.KEY_TAB_COMMAND, Qe);
					else if (Ir(st, pt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.UNDO_COMMAND, void 0);
					else if (jr(st, pt, Pt, Ct))
						Qe.preventDefault(), en(Ge, e.REDO_COMMAND, void 0);
					else if (st === 49 && zt)
						en(Ge, e.KEY_ALT_1_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 50 && zt)
						en(Ge, e.KEY_ALT_2_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 51 && zt)
						en(Ge, e.KEY_ALT_3_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 52 && zt)
						en(Ge, e.KEY_ALT_4_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 53 && zt)
						en(Ge, e.KEY_ALT_5_COMMAND, Qe) && Qe.preventDefault();
					else if (st === 18 && zt)
						en(Ge, e.KEY_ALT_COMMAND, Qe) && Qe.preventDefault();
					else if (d.$m ? st === 91 && Pt : st === 17 && Ct)
						en(Ge, e.KEY_COMMAND_COMMAND, Qe) && Qe.preventDefault();
					else {
						const Qt = Ge._editorState._selection;
						Zt(Qt) &&
							(Is(st, pt, Pt, Ct)
								? (Qe.preventDefault(), en(Ge, e.COPY_COMMAND, Qe))
								: Ur(st, pt, Pt, Ct)
									? (Qe.preventDefault(), en(Ge, e.CUT_COMMAND, Qe))
									: Wr(st, Pt, Ct) &&
										(Qe.preventDefault(),
										Ge.update(() => {
											const ui = Jn();
											ui.select(0, ui.getChildrenSize());
										})));
					}
					Ts(Ct, pt, zt, Pt) && en(Ge, e.KEY_MODIFIER_COMMAND, Qe);
				}
			}
			e.simulateLexicalKeyPress = V;
			function G(Qe) {
				let Ge = Qe.__lexicalEventHandles;
				return (
					Ge === void 0 && ((Ge = []), (Qe.__lexicalEventHandles = Ge)), Ge
				);
			}
			const K = new Map();
			function J(Qe) {
				const Ge = (0, E.$Ogb)(),
					st = Ds(Ge);
				if (st === null) return;
				const pt = Fi(st.anchorNode);
				if (pt === null) return;
				I &&
					((I = !1),
					Dn(pt, () => {
						const vi = _t(),
							Ii = st.anchorNode;
						if (Ii === null) return;
						const Mi = Ii.nodeType;
						if (Mi !== e.DOM_ELEMENT_TYPE && Mi !== e.DOM_TEXT_TYPE) return;
						const Ni = Vi(vi, st, pt);
						us(Ni);
					}));
				const Ct = ir(pt),
					Pt = Ct[Ct.length - 1],
					zt = Pt._key,
					Qt = K.get(zt),
					ui = Qt || Pt;
				ui !== pt && M(st, ui, !1),
					M(st, pt, !0),
					pt !== Pt ? K.set(zt, pt) : Qt && K.delete(zt);
			}
			function W(Qe) {
				Qe._lexicalHandled = !0;
			}
			function X(Qe) {
				return Qe._lexicalHandled === !0;
			}
			function Y(Qe, Ge) {
				v === 0 && (0, E.$Ngb)().addEventListener("selectionchange", J),
					v++,
					(Qe.__lexicalEditor = Ge);
				const st = G(Qe);
				for (let pt = 0; pt < b.length; pt++) {
					const [Ct, Pt] = b[pt],
						zt =
							typeof Pt == "function"
								? (Qt) => {
										X(Qt) || (W(Qt), Ge.isEditable() && Pt(Qt, Ge));
									}
								: (Qt) => {
										if (!X(Qt) && (W(Qt), Ge.isEditable()))
											switch (Ct) {
												case "cut":
													return en(Ge, e.CUT_COMMAND, Qt);
												case "copy":
													return en(Ge, e.COPY_COMMAND, Qt);
												case "paste":
													return en(Ge, e.PASTE_COMMAND, Qt);
												case "dragstart":
													return en(Ge, e.DRAGSTART_COMMAND, Qt);
												case "dragover":
													return en(Ge, e.DRAGOVER_COMMAND, Qt);
												case "dragend":
													return en(Ge, e.DRAGEND_COMMAND, Qt);
												case "focus":
													return en(Ge, e.FOCUS_COMMAND, Qt);
												case "blur":
													return en(Ge, e.BLUR_COMMAND, Qt);
												case "drop":
													return en(Ge, e.DROP_COMMAND, Qt);
											}
									};
					Qe.addEventListener(Ct, zt),
						st.push(() => {
							Qe.removeEventListener(Ct, zt);
						});
				}
			}
			function ie(Qe) {
				v !== 0 &&
					(v--,
					v === 0 && (0, E.$Ngb)().removeEventListener("selectionchange", J));
				const Ge = Qe.__lexicalEditor;
				Ge != null && (ne(Ge), (Qe.__lexicalEditor = null));
				const st = G(Qe);
				for (let pt = 0; pt < st.length; pt++) st[pt]();
				Qe.__lexicalEventHandles = [];
			}
			function ne(Qe) {
				if (Qe._parentEditor !== null) {
					const Ge = ir(Qe),
						pt = Ge[Ge.length - 1]._key;
					K.get(pt) === Qe && K.delete(pt);
				} else K.delete(Qe._key);
			}
			function ee() {
				S = !0;
			}
			function _(Qe, Ge, st, pt, Ct) {
				k = [Qe, Ge, st, pt, Ct];
			}
			function te(Qe, Ge) {
				const st = Qe._decorators;
				let Ct = Qe._pendingDecorators || st;
				const Pt = Ge._nodeMap;
				let zt;
				for (zt in Ct)
					Pt.has(zt) || (Ct === st && (Ct = Pn(Qe)), delete Ct[zt]);
			}
			function Q(Qe, Ge, st, pt, Ct, Pt) {
				let zt = Qe.getFirstChild();
				for (; zt !== null; ) {
					const Qt = zt.__key;
					zt.__parent === Ge &&
						(ln(zt) && Q(zt, Qt, st, pt, Ct, Pt),
						st.has(Qt) || Pt.delete(Qt),
						Ct.push(Qt)),
						(zt = zt.getNextSibling());
				}
			}
			function Z(Qe, Ge, st, pt) {
				const Ct = Qe._nodeMap,
					Pt = Ge._nodeMap,
					zt = [];
				for (const [Qt] of pt) {
					const ui = Pt.get(Qt);
					ui !== void 0 &&
						(ui.isAttached() ||
							(ln(ui) && Q(ui, Qt, Ct, Pt, zt, pt),
							Ct.has(Qt) || pt.delete(Qt),
							zt.push(Qt)));
				}
				for (const Qt of zt) Pt.delete(Qt);
				for (const Qt of st) {
					const ui = Pt.get(Qt);
					ui !== void 0 &&
						!ui.isAttached() &&
						(Ct.has(Qt) || st.delete(Qt), Pt.delete(Qt));
				}
			}
			const se = 100;
			let re = !1,
				le = 0;
			function oe() {
				return re;
			}
			function ae(Qe) {
				le = Qe.timeStamp;
			}
			function pe(Qe) {
				le === 0 && hn(Qe).addEventListener("textInput", ae, !0);
			}
			function $e(Qe, Ge, st) {
				return (
					Ge.__lexicalLineBreak === Qe ||
					Qe[`__lexicalKey_${st._key}`] !== void 0
				);
			}
			function ye(Qe) {
				return Qe.getEditorState().read(() => {
					const Ge = wi();
					return Ge !== null ? Ge.clone() : null;
				});
			}
			function ue(Qe, Ge, st) {
				const pt = Ds(st._window);
				let Ct = null,
					Pt = null;
				pt !== null &&
					pt.anchorNode === Qe &&
					((Ct = pt.anchorOffset), (Pt = pt.focusOffset));
				const zt = Qe.nodeValue;
				zt !== null && Zs(Ge, zt, Ct, Pt, !1);
			}
			function fe(Qe, Ge, st) {
				if (ii(Qe)) {
					const pt = Qe.anchor.getNode();
					if (pt.is(st) && Qe.format !== pt.getFormat()) return !1;
				}
				return Ge.nodeType === e.DOM_TEXT_TYPE && st.isAttached();
			}
			function me(Qe, Ge, st) {
				re = !0;
				const pt = performance.now() - le > se;
				try {
					Dn(Qe, () => {
						const Ct = wi() || ye(Qe),
							Pt = new Map(),
							zt = Qe.getRootElement(),
							Qt = Qe._editorState,
							ui = Qe._blockCursorElement;
						let vi = !1,
							Ii = "";
						for (let Ni = 0; Ni < Ge.length; Ni++) {
							const Ri = Ge[Ni],
								Ki = Ri.type,
								ji = Ri.target;
							let Xi = vn(ji, Qt);
							if (!((Xi === null && ji !== zt) || Xn(Xi))) {
								if (Ki === "characterData")
									pt && mn(Xi) && fe(Ct, ji, Xi) && ue(ji, Xi, Qe);
								else if (Ki === "childList") {
									vi = !0;
									const on = Ri.addedNodes;
									for (let pn = 0; pn < on.length; pn++) {
										const bn = on[pn],
											gn = An(bn),
											Cn = bn.parentNode;
										if (
											Cn != null &&
											bn !== ui &&
											gn === null &&
											(bn.nodeName !== "BR" || !$e(bn, Cn, Qe))
										) {
											if (i.IS_FIREFOX) {
												const Tn = bn.innerText || bn.nodeValue;
												Tn && (Ii += Tn);
											}
											Cn.removeChild(bn);
										}
									}
									const Qi = Ri.removedNodes,
										rn = Qi.length;
									if (rn > 0) {
										let pn = 0;
										for (let bn = 0; bn < rn; bn++) {
											const gn = Qi[bn];
											((gn.nodeName === "BR" && $e(gn, ji, Qe)) || ui === gn) &&
												(ji.appendChild(gn), pn++);
										}
										rn !== pn && (ji === zt && (Xi = ss(Qt)), Pt.set(ji, Xi));
									}
								}
							}
						}
						if (Pt.size > 0)
							for (const [Ni, Ri] of Pt)
								if (ln(Ri)) {
									const Ki = Ri.getChildrenKeys();
									let ji = Ni.firstChild;
									for (let Xi = 0; Xi < Ki.length; Xi++) {
										const on = Ki[Xi],
											Qi = Qe.getElementByKey(on);
										Qi !== null &&
											(ji == null
												? (Ni.appendChild(Qi), (ji = Qi))
												: ji !== Qi && Ni.replaceChild(Qi, ji),
											(ji = ji.nextSibling));
									}
								} else mn(Ri) && Ri.markDirty();
						const Mi = st.takeRecords();
						if (Mi.length > 0) {
							for (let Ni = 0; Ni < Mi.length; Ni++) {
								const Ri = Mi[Ni],
									Ki = Ri.addedNodes,
									ji = Ri.target;
								for (let Xi = 0; Xi < Ki.length; Xi++) {
									const on = Ki[Xi],
										Qi = on.parentNode;
									Qi != null &&
										on.nodeName === "BR" &&
										!$e(on, ji, Qe) &&
										Qi.removeChild(on);
								}
							}
							st.takeRecords();
						}
						Ct !== null &&
							(vi && ((Ct.dirty = !0), us(Ct)),
							i.IS_FIREFOX && lr(Qe) && Ct.insertRawText(Ii));
					});
				} finally {
					re = !1;
				}
			}
			function ve(Qe) {
				const Ge = Qe._observer;
				if (Ge !== null) {
					const st = Ge.takeRecords();
					me(Qe, st, Ge);
				}
			}
			function ge(Qe) {
				pe(Qe),
					(Qe._observer = new MutationObserver((Ge, st) => {
						me(Qe, Ge, st);
					}));
			}
			function be(Qe, Ge, st) {
				Si();
				const pt = Qe.__key,
					Ct = Qe.getParent();
				if (Ct === null) return;
				const Pt = oi(Qe);
				let zt = !1;
				if (ii(Pt) && Ge) {
					const Qt = Pt.anchor,
						ui = Pt.focus;
					Qt.key === pt &&
						($t(Qt, Qe, Ct, Qe.getPreviousSibling(), Qe.getNextSibling()),
						(zt = !0)),
						ui.key === pt &&
							($t(ui, Qe, Ct, Qe.getPreviousSibling(), Qe.getNextSibling()),
							(zt = !0));
				}
				if (ii(Pt) && Ge && !zt) {
					const Qt = Qe.getIndexWithinParent();
					Qn(Qe), ai(Pt, Ct, Qt, -1);
				} else Qn(Qe);
				!st && !Wn(Ct) && !Ct.canBeEmpty() && Ct.isEmpty() && be(Ct, Ge),
					Ge && it(Ct) && Ct.isEmpty() && Ct.selectEnd();
			}
			class Ce {
				static getType() {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .getType().",
						this.name,
					);
				}
				static clone(Ge) {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .clone().",
						this.name,
					);
				}
				constructor(Ge) {
					(this.__type = this.constructor.getType()),
						(this.__parent = null),
						(this.__prev = null),
						(this.__next = null),
						Un(this, Ge);
				}
				getType() {
					return this.__type;
				}
				isAttached() {
					let Ge = this.__key;
					for (; Ge !== null; ) {
						if (Ge === "root") return !0;
						const st = dn(Ge);
						if (st === null) break;
						Ge = st.__parent;
					}
					return !1;
				}
				isSelected(Ge) {
					const st = Ge || wi();
					if (st == null) return !1;
					const pt = st.getNodes().some((Ct) => Ct.__key === this.__key);
					return mn(this)
						? pt
						: ii(st) &&
								st.anchor.type === "element" &&
								st.focus.type === "element" &&
								st.anchor.key === st.focus.key &&
								st.anchor.offset === st.focus.offset
							? !1
							: pt;
				}
				getKey() {
					return this.__key;
				}
				getIndexWithinParent() {
					const Ge = this.getParent();
					if (Ge === null) return -1;
					let st = Ge.getFirstChild(),
						pt = 0;
					for (; st !== null; ) {
						if (this.is(st)) return pt;
						pt++, (st = st.getNextSibling());
					}
					return -1;
				}
				getParent() {
					const Ge = this.getLatest().__parent;
					return Ge === null ? null : dn(Ge);
				}
				getParentOrThrow() {
					const Ge = this.getParent();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a parent.",
								this.__key,
							),
						Ge
					);
				}
				getTopLevelElement() {
					let Ge = this;
					for (; Ge !== null; ) {
						const st = Ge.getParent();
						if (Wn(st)) return Ge;
						Ge = st;
					}
					return null;
				}
				getTopLevelElementOrThrow() {
					const Ge = this.getTopLevelElement();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a top parent element.",
								this.__key,
							),
						Ge
					);
				}
				getParents() {
					const Ge = [];
					let st = this.getParent();
					for (; st !== null; ) Ge.push(st), (st = st.getParent());
					return Ge;
				}
				getParentKeys() {
					const Ge = [];
					let st = this.getParent();
					for (; st !== null; ) Ge.push(st.__key), (st = st.getParent());
					return Ge;
				}
				getPreviousSibling() {
					const st = this.getLatest().__prev;
					return st === null ? null : dn(st);
				}
				getPreviousSiblings() {
					const Ge = [],
						st = this.getParent();
					if (st === null) return Ge;
					let pt = st.getFirstChild();
					for (; pt !== null && !pt.is(this); )
						Ge.push(pt), (pt = pt.getNextSibling());
					return Ge;
				}
				getNextSibling() {
					const st = this.getLatest().__next;
					return st === null ? null : dn(st);
				}
				getNextSiblings() {
					const Ge = [];
					let st = this.getNextSibling();
					for (; st !== null; ) Ge.push(st), (st = st.getNextSibling());
					return Ge;
				}
				getCommonAncestor(Ge) {
					const st = this.getParents(),
						pt = Ge.getParents();
					ln(this) && st.unshift(this), ln(Ge) && pt.unshift(Ge);
					const Ct = st.length,
						Pt = pt.length;
					if (Ct === 0 || Pt === 0 || st[Ct - 1] !== pt[Pt - 1]) return null;
					const zt = new Set(pt);
					for (let Qt = 0; Qt < Ct; Qt++) {
						const ui = st[Qt];
						if (zt.has(ui)) return ui;
					}
					return null;
				}
				is(Ge) {
					return Ge == null ? !1 : this.__key === Ge.__key;
				}
				isBefore(Ge) {
					if (this === Ge) return !1;
					if (Ge.isParentOf(this)) return !0;
					if (this.isParentOf(Ge)) return !1;
					const st = this.getCommonAncestor(Ge);
					let pt = 0,
						Ct = 0,
						Pt = this;
					for (;;) {
						const zt = Pt.getParentOrThrow();
						if (zt === st) {
							pt = Pt.getIndexWithinParent();
							break;
						}
						Pt = zt;
					}
					for (Pt = Ge; ; ) {
						const zt = Pt.getParentOrThrow();
						if (zt === st) {
							Ct = Pt.getIndexWithinParent();
							break;
						}
						Pt = zt;
					}
					return pt < Ct;
				}
				isParentOf(Ge) {
					const st = this.__key;
					if (st === Ge.__key) return !1;
					let pt = Ge;
					for (; pt !== null; ) {
						if (pt.__key === st) return !0;
						pt = pt.getParent();
					}
					return !1;
				}
				getNodesBetween(Ge) {
					const st = this.isBefore(Ge),
						pt = [],
						Ct = new Set();
					let Pt = this;
					for (;;) {
						const zt = Pt.__key;
						if ((Ct.has(zt) || (Ct.add(zt), pt.push(Pt)), Pt === Ge)) break;
						const Qt = ln(Pt)
							? st
								? Pt.getFirstChild()
								: Pt.getLastChild()
							: null;
						if (Qt !== null) {
							Pt = Qt;
							continue;
						}
						const ui = st ? Pt.getNextSibling() : Pt.getPreviousSibling();
						if (ui !== null) {
							Pt = ui;
							continue;
						}
						const vi = Pt.getParentOrThrow();
						if ((Ct.has(vi.__key) || pt.push(vi), vi === Ge)) break;
						let Ii = null,
							Mi = vi;
						do
							Mi === null &&
								(0, w.default)(!1, "getNodesBetween: ancestor is null"),
								(Ii = st ? Mi.getNextSibling() : Mi.getPreviousSibling()),
								(Mi = Mi.getParent()),
								Mi !== null && Ii === null && !Ct.has(Mi.__key) && pt.push(Mi);
						while (Ii === null);
						Pt = Ii;
					}
					return st || pt.reverse(), pt;
				}
				isDirty() {
					const st = Pi()._dirtyLeaves;
					return st !== null && st.has(this.__key);
				}
				getLatest() {
					const Ge = dn(this.__key);
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.",
							),
						Ge
					);
				}
				getWritable() {
					Si();
					const Ge = ki(),
						st = Pi(),
						pt = Ge._nodeMap,
						Ct = this.__key,
						Pt = this.getLatest(),
						zt = Pt.__parent,
						Qt = st._cloneNotNeeded,
						ui = wi();
					if ((ui !== null && (ui._cachedNodes = null), Qt.has(Ct)))
						return $s(Pt), Pt;
					const Ii = Pt.constructor.clone(Pt);
					return (
						(Ii.__parent = zt),
						(Ii.__next = Pt.__next),
						(Ii.__prev = Pt.__prev),
						ln(Pt) && ln(Ii)
							? ((Ii.__first = Pt.__first),
								(Ii.__last = Pt.__last),
								(Ii.__size = Pt.__size),
								(Ii.__indent = Pt.__indent),
								(Ii.__format = Pt.__format),
								(Ii.__dir = Pt.__dir))
							: mn(Pt) &&
								mn(Ii) &&
								((Ii.__format = Pt.__format),
								(Ii.__style = Pt.__style),
								(Ii.__mode = Pt.__mode),
								(Ii.__detail = Pt.__detail)),
						Qt.add(Ct),
						(Ii.__key = Ct),
						$s(Ii),
						pt.set(Ct, Ii),
						Ii
					);
				}
				getTextContent() {
					return "";
				}
				getTextContentSize() {
					return this.getTextContent().length;
				}
				createDOM(Ge, st) {
					(0, w.default)(!1, "createDOM: base method not extended");
				}
				updateDOM(Ge, st, pt) {
					(0, w.default)(!1, "updateDOM: base method not extended");
				}
				exportDOM(Ge) {
					return { element: this.createDOM(Ge._config, Ge) };
				}
				exportJSON() {
					(0, w.default)(!1, "exportJSON: base method not extended");
				}
				static importJSON(Ge) {
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .importJSON().",
						this.name,
					);
				}
				static transform() {
					return null;
				}
				remove(Ge) {
					be(this, !0, Ge);
				}
				replace(Ge, st) {
					Si();
					let pt = wi();
					pt !== null && (pt = pt.clone()), bs(this, Ge);
					const Ct = this.getLatest(),
						Pt = this.__key,
						zt = Ge.__key,
						Qt = Ge.getWritable(),
						ui = this.getParentOrThrow().getWritable(),
						vi = ui.__size;
					Qn(Qt);
					const Ii = Ct.getPreviousSibling(),
						Mi = Ct.getNextSibling(),
						Ni = Ct.__prev,
						Ri = Ct.__next,
						Ki = Ct.__parent;
					if ((be(Ct, !1, !0), Ii === null)) ui.__first = zt;
					else {
						const ji = Ii.getWritable();
						ji.__next = zt;
					}
					if (((Qt.__prev = Ni), Mi === null)) ui.__last = zt;
					else {
						const ji = Mi.getWritable();
						ji.__prev = zt;
					}
					if (
						((Qt.__next = Ri),
						(Qt.__parent = Ki),
						(ui.__size = vi),
						st &&
							this.getChildren().forEach((ji) => {
								Qt.append(ji);
							}),
						ii(pt))
					) {
						us(pt);
						const ji = pt.anchor,
							Xi = pt.focus;
						ji.key === Pt && Mt(ji, Qt), Xi.key === Pt && Mt(Xi, Qt);
					}
					return sn() === Pt && _n(zt), Qt;
				}
				insertAfter(Ge, st = !0) {
					Si(), bs(this, Ge);
					const pt = this.getWritable(),
						Ct = Ge.getWritable(),
						Pt = Ct.getParent(),
						zt = wi();
					let Qt = !1,
						ui = !1;
					if (Pt !== null) {
						const Ri = Ge.getIndexWithinParent();
						if ((Qn(Ct), ii(zt))) {
							const Ki = Pt.__key,
								ji = zt.anchor,
								Xi = zt.focus;
							(Qt =
								ji.type === "element" && ji.key === Ki && ji.offset === Ri + 1),
								(ui =
									Xi.type === "element" &&
									Xi.key === Ki &&
									Xi.offset === Ri + 1);
						}
					}
					const vi = this.getNextSibling(),
						Ii = this.getParentOrThrow().getWritable(),
						Mi = Ct.__key,
						Ni = pt.__next;
					if (vi === null) Ii.__last = Mi;
					else {
						const Ri = vi.getWritable();
						Ri.__prev = Mi;
					}
					if (
						(Ii.__size++,
						(pt.__next = Mi),
						(Ct.__next = Ni),
						(Ct.__prev = pt.__key),
						(Ct.__parent = pt.__parent),
						st && ii(zt))
					) {
						const Ri = this.getIndexWithinParent();
						ai(zt, Ii, Ri + 1);
						const Ki = Ii.__key;
						Qt && zt.anchor.set(Ki, Ri + 2, "element"),
							ui && zt.focus.set(Ki, Ri + 2, "element");
					}
					return Ge;
				}
				insertBefore(Ge, st = !0) {
					Si(), bs(this, Ge);
					const pt = this.getWritable(),
						Ct = Ge.getWritable(),
						Pt = Ct.__key;
					Qn(Ct);
					const zt = this.getPreviousSibling(),
						Qt = this.getParentOrThrow().getWritable(),
						ui = pt.__prev,
						vi = this.getIndexWithinParent();
					if (zt === null) Qt.__first = Pt;
					else {
						const Mi = zt.getWritable();
						Mi.__next = Pt;
					}
					Qt.__size++,
						(pt.__prev = Pt),
						(Ct.__prev = ui),
						(Ct.__next = pt.__key),
						(Ct.__parent = pt.__parent);
					const Ii = wi();
					if (st && ii(Ii)) {
						const Mi = this.getParentOrThrow();
						ai(Ii, Mi, vi);
					}
					return Ge;
				}
				isParentRequired() {
					return !1;
				}
				createParentElementNode() {
					return yt();
				}
				selectPrevious(Ge, st) {
					Si();
					const pt = this.getPreviousSibling(),
						Ct = this.getParentOrThrow();
					if (pt === null) return Ct.select(0, 0);
					if (ln(pt)) return pt.select();
					if (!mn(pt)) {
						const Pt = pt.getIndexWithinParent() + 1;
						return Ct.select(Pt, Pt);
					}
					return pt.select(Ge, st);
				}
				selectNext(Ge, st) {
					Si();
					const pt = this.getNextSibling(),
						Ct = this.getParentOrThrow();
					if (pt === null) return Ct.select();
					if (ln(pt)) return pt.select(0, 0);
					if (!mn(pt)) {
						const Pt = pt.getIndexWithinParent();
						return Ct.select(Pt, Pt);
					}
					return pt.select(Ge, st);
				}
				markDirty() {
					this.getWritable();
				}
			}
			e.LexicalNode = Ce;
			function Le(Qe, Ge) {
				const st = Pi()._nodes.get(Qe);
				st === void 0 &&
					(0, w.default)(
						!1,
						"Create node: Attempted to create node %s that was not configured to be used on the editor.",
						Ge.name,
					);
				const pt = st.klass;
				pt !== Ge &&
					(0, w.default)(
						!1,
						"Create node: Type %s in node %s does not match registered node %s with the same type",
						Qe,
						Ge.name,
						pt.name,
					);
			}
			function Fe(Qe, Ge) {
				const st = Qe.__mode,
					pt = Qe.__format,
					Ct = Qe.__style,
					Pt = Ge.__mode,
					zt = Ge.__format,
					Qt = Ge.__style;
				return (
					(st === null || st === Pt) &&
					(pt === null || pt === zt) &&
					(Ct === null || Ct === Qt)
				);
			}
			function Oe(Qe, Ge) {
				const st = Qe.mergeWithSibling(Ge),
					pt = Pi()._normalizedNodes;
				return pt.add(Qe.__key), pt.add(Ge.__key), st;
			}
			function xe(Qe) {
				let Ge = Qe;
				if (Ge.__text === "" && Ge.isSimpleText() && !Ge.isUnmergeable()) {
					Ge.remove();
					return;
				}
				let st;
				for (
					;
					(st = Ge.getPreviousSibling()) !== null &&
					mn(st) &&
					st.isSimpleText() &&
					!st.isUnmergeable();
				)
					if (st.__text === "") st.remove();
					else if (Fe(st, Ge)) {
						Ge = Oe(st, Ge);
						break;
					} else break;
				let pt;
				for (
					;
					(pt = Ge.getNextSibling()) !== null &&
					mn(pt) &&
					pt.isSimpleText() &&
					!pt.isUnmergeable();
				)
					if (pt.__text === "") pt.remove();
					else if (Fe(Ge, pt)) {
						Ge = Oe(Ge, pt);
						break;
					} else break;
			}
			function He(Qe) {
				return Ke(Qe.anchor), Ke(Qe.focus), Qe;
			}
			function Ke(Qe) {
				for (; Qe.type === "element"; ) {
					const Ge = Qe.getNode(),
						st = Qe.offset;
					let pt, Ct;
					if (
						(st === Ge.getChildrenSize()
							? ((pt = Ge.getChildAtIndex(st - 1)), (Ct = !0))
							: ((pt = Ge.getChildAtIndex(st)), (Ct = !1)),
						mn(pt))
					) {
						Qe.set(pt.__key, Ct ? pt.getTextContentSize() : 0, "text");
						break;
					} else if (!ln(pt)) break;
					Qe.set(pt.__key, Ct ? pt.getChildrenSize() : 0, "element");
				}
			}
			let Je = "",
				Te = "",
				Ee = "",
				Ie,
				Be,
				Se,
				ke = !1,
				Ue = !1,
				qe,
				Ae = null,
				Me,
				De,
				Re,
				je,
				Ve,
				Ze;
			function et(Qe, Ge) {
				const st = Re.get(Qe);
				if (Ge !== null) {
					const pt = xt(Qe);
					pt.parentNode === Ge && Ge.removeChild(pt);
				}
				if ((je.has(Qe) || Be._keyToDOMMap.delete(Qe), ln(st))) {
					const pt = kt(st, Re);
					rt(pt, 0, pt.length - 1, null);
				}
				st !== void 0 && _s(Ze, Se, qe, st, "destroyed");
			}
			function rt(Qe, Ge, st, pt) {
				let Ct = Ge;
				for (; Ct <= st; ++Ct) {
					const Pt = Qe[Ct];
					Pt !== void 0 && et(Pt, pt);
				}
			}
			function ft(Qe, Ge) {
				Qe.setProperty("text-align", Ge);
			}
			const bt = "40px";
			function nt(Qe, Ge) {
				const st = Ie.theme.indent;
				if (typeof st == "string") {
					const Ct = Qe.classList.contains(st);
					Ge > 0 && !Ct
						? Qe.classList.add(st)
						: Ge < 1 && Ct && Qe.classList.remove(st);
				}
				const pt =
					getComputedStyle(Qe).getPropertyValue(
						"--lexical-indent-base-value",
					) || bt;
				Qe.style.setProperty(
					"padding-inline-start",
					Ge === 0 ? "" : `calc(${Ge} * ${pt})`,
				);
			}
			function lt(Qe, Ge) {
				const st = Qe.style;
				Ge === 0
					? ft(st, "")
					: Ge === e.IS_ALIGN_LEFT
						? ft(st, "left")
						: Ge === e.IS_ALIGN_CENTER
							? ft(st, "center")
							: Ge === e.IS_ALIGN_RIGHT
								? ft(st, "right")
								: Ge === e.IS_ALIGN_JUSTIFY
									? ft(st, "justify")
									: Ge === e.IS_ALIGN_START
										? ft(st, "start")
										: Ge === e.IS_ALIGN_END && ft(st, "end");
			}
			function ct(Qe, Ge, st) {
				const pt = je.get(Qe);
				pt === void 0 &&
					(0, w.default)(!1, "createNode: node does not exist in nodeMap");
				const Ct = pt.createDOM(Ie, Be);
				if (
					(Lt(Qe, Ct, Be),
					mn(pt)
						? Ct.setAttribute("data-lexical-text", "true")
						: Xn(pt) && Ct.setAttribute("data-lexical-decorator", "true"),
					ln(pt))
				) {
					const Pt = pt.__indent,
						zt = pt.__size;
					if ((Pt !== 0 && nt(Ct, Pt), zt !== 0)) {
						const ui = zt - 1,
							vi = kt(pt, je);
						gt(vi, ui, pt, Ct);
					}
					const Qt = pt.__format;
					Qt !== 0 && lt(Ct, Qt),
						pt.isInline() || Nt(null, pt, Ct),
						Ks(pt) &&
							((Je += e.DOUBLE_LINE_BREAK), (Ee += e.DOUBLE_LINE_BREAK));
				} else {
					const Pt = pt.getTextContent();
					if (Xn(pt)) {
						const zt = pt.decorate(Be, Ie);
						zt !== null && di(Qe, zt), (Ct.contentEditable = "false");
					} else mn(pt) && (pt.isDirectionless() || (Te += Pt));
					(Je += Pt), (Ee += Pt);
				}
				if (Ge !== null)
					if (st != null) Ge.insertBefore(Ct, st);
					else {
						const Pt = Ge.__lexicalLineBreak;
						Pt != null ? Ge.insertBefore(Ct, Pt) : Ge.appendChild(Ct);
					}
				return _s(Ze, Se, qe, pt, "created"), Ct;
			}
			function gt(Qe, Ge, st, pt) {
				const Ct = Te;
				(Te = ""), ht(Qe, st, 0, Ge, pt, null), jt(st, pt), (Te = Ct);
			}
			function ht(Qe, Ge, st, pt, Ct, Pt) {
				const zt = Je;
				Je = "";
				let Qt = st;
				for (; Qt <= pt; ++Qt) ct(Qe[Qt], Ct, Pt);
				Ks(Ge) && (Je += e.DOUBLE_LINE_BREAK),
					(Ct.__lexicalTextContent = Je),
					(Je = zt + Je);
			}
			function Rt(Qe, Ge) {
				const st = Ge.get(Qe);
				return Or(st) || (Xn(st) && st.isInline());
			}
			function Nt(Qe, Ge, st) {
				const pt = Qe !== null && (Qe.__size === 0 || Rt(Qe.__last, Re)),
					Ct = Ge.__size === 0 || Rt(Ge.__last, je);
				if (pt) {
					if (!Ct) {
						const Pt = st.__lexicalLineBreak;
						Pt != null && st.removeChild(Pt), (st.__lexicalLineBreak = null);
					}
				} else if (Ct) {
					const Pt = C.$Bfb.document.createElement("br");
					(st.__lexicalLineBreak = Pt), st.appendChild(Pt);
				}
			}
			function jt(Qe, Ge) {
				const st = Ge.__lexicalDirTextContent,
					pt = Ge.__lexicalDir;
				if (st !== Te || pt !== Ae) {
					const Ct = Te === "",
						Pt = Ct ? Ae : zi(Te);
					if (Pt !== pt) {
						const zt = Ge.classList,
							Qt = Ie.theme;
						let ui = pt !== null ? Qt[pt] : void 0,
							vi = Pt !== null ? Qt[Pt] : void 0;
						if (ui !== void 0) {
							if (typeof ui == "string") {
								const Ii = ui.split(" ");
								ui = Qt[pt] = Ii;
							}
							zt.remove(...ui);
						}
						if (Pt === null || (Ct && Pt === "ltr")) Ge.removeAttribute("dir");
						else {
							if (vi !== void 0) {
								if (typeof vi == "string") {
									const Ii = vi.split(" ");
									vi = Qt[Pt] = Ii;
								}
								vi !== void 0 && zt.add(...vi);
							}
							Ge.dir = Pt;
						}
						if (!Ue) {
							const Ii = Qe.getWritable();
							Ii.__dir = Pt;
						}
					}
					(Ae = Pt), (Ge.__lexicalDirTextContent = Te), (Ge.__lexicalDir = Pt);
				}
			}
			function ti(Qe, Ge, st) {
				const pt = Te;
				(Te = ""), hi(Qe, Ge, st), jt(Ge, st), (Te = pt);
			}
			function kt(Qe, Ge) {
				const st = [];
				let pt = Qe.__first;
				for (; pt !== null; ) {
					const Ct = Ge.get(pt);
					Ct === void 0 &&
						(0, w.default)(
							!1,
							"createChildrenArray: node does not exist in nodeMap",
						),
						st.push(pt),
						(pt = Ct.__next);
				}
				return st;
			}
			function hi(Qe, Ge, st) {
				const pt = Je,
					Ct = Qe.__size,
					Pt = Ge.__size;
				if (((Je = ""), Ct === 1 && Pt === 1)) {
					const zt = Qe.__first,
						Qt = Ge.__first;
					if (zt === Qt) Kt(zt, st);
					else {
						const ui = xt(zt),
							vi = ct(Qt, null, null);
						st.replaceChild(vi, ui), et(zt, null);
					}
				} else {
					const zt = kt(Qe, Re),
						Qt = kt(Ge, je);
					if (Ct === 0) Pt !== 0 && ht(Qt, Ge, 0, Pt - 1, st, null);
					else if (Pt === 0) {
						if (Ct !== 0) {
							const vi = st.__lexicalLineBreak == null;
							rt(zt, 0, Ct - 1, vi ? null : st), vi && (st.textContent = "");
						}
					} else Xe(Ge, zt, Qt, Ct, Pt, st);
				}
				Ks(Ge) && (Je += e.DOUBLE_LINE_BREAK),
					(st.__lexicalTextContent = Je),
					(Je = pt + Je);
			}
			function Kt(Qe, Ge) {
				const st = Re.get(Qe);
				let pt = je.get(Qe);
				(st === void 0 || pt === void 0) &&
					(0, w.default)(
						!1,
						"reconcileNode: prevNode or nextNode does not exist in nodeMap",
					);
				const Ct = ke || De.has(Qe) || Me.has(Qe),
					Pt = As(Be, Qe);
				if (st === pt && !Ct) {
					if (ln(st)) {
						const zt = Pt.__lexicalTextContent;
						zt !== void 0 && ((Je += zt), (Ee += zt));
						const Qt = Pt.__lexicalDirTextContent;
						Qt !== void 0 && (Te += Qt);
					} else {
						const zt = st.getTextContent();
						mn(st) && !st.isDirectionless() && (Te += zt),
							(Ee += zt),
							(Je += zt);
					}
					return Pt;
				}
				if (
					(st !== pt && Ct && _s(Ze, Se, qe, pt, "updated"),
					pt.updateDOM(st, Pt, Ie))
				) {
					const zt = ct(Qe, null, null);
					return (
						Ge === null &&
							(0, w.default)(!1, "reconcileNode: parentDOM is null"),
						Ge.replaceChild(zt, Pt),
						et(Qe, null),
						zt
					);
				}
				if (ln(st) && ln(pt)) {
					const zt = pt.__indent;
					zt !== st.__indent && nt(Pt, zt);
					const Qt = pt.__format;
					Qt !== st.__format && lt(Pt, Qt),
						Ct && (ti(st, pt, Pt), !it(pt) && !pt.isInline() && Nt(st, pt, Pt)),
						Ks(pt) &&
							((Je += e.DOUBLE_LINE_BREAK), (Ee += e.DOUBLE_LINE_BREAK));
				} else {
					const zt = pt.getTextContent();
					if (Xn(pt)) {
						const Qt = pt.decorate(Be, Ie);
						Qt !== null && di(Qe, Qt);
					} else mn(pt) && !pt.isDirectionless() && (Te += zt);
					(Je += zt), (Ee += zt);
				}
				return (
					!Ue &&
						it(pt) &&
						pt.__cachedText !== Ee &&
						((pt = pt.getWritable()), (pt.__cachedText = Ee)),
					Pt
				);
			}
			function di(Qe, Ge) {
				let st = Be._pendingDecorators;
				const pt = Be._decorators;
				if (st === null) {
					if (pt[Qe] === Ge) return;
					st = Pn(Be);
				}
				st[Qe] = Ge;
			}
			function Ye(Qe) {
				return Qe.firstChild;
			}
			function ze(Qe) {
				let Ge = Qe.nextSibling;
				return (
					Ge !== null && Ge === Be._blockCursorElement && (Ge = Ge.nextSibling),
					Ge
				);
			}
			function Xe(Qe, Ge, st, pt, Ct, Pt) {
				const zt = pt - 1,
					Qt = Ct - 1;
				let ui,
					vi,
					Ii = Ye(Pt),
					Mi = 0,
					Ni = 0;
				for (; Mi <= zt && Ni <= Qt; ) {
					const ji = Ge[Mi],
						Xi = st[Ni];
					if (ji === Xi) (Ii = ze(Kt(Xi, Pt))), Mi++, Ni++;
					else {
						ui === void 0 && (ui = new Set(Ge)),
							vi === void 0 && (vi = new Set(st));
						const on = vi.has(ji),
							Qi = ui.has(Xi);
						if (!on) (Ii = ze(xt(ji))), et(ji, Pt), Mi++;
						else if (!Qi) ct(Xi, Pt, Ii), Ni++;
						else {
							const rn = As(Be, Xi);
							rn === Ii
								? (Ii = ze(Kt(Xi, Pt)))
								: (Ii != null ? Pt.insertBefore(rn, Ii) : Pt.appendChild(rn),
									Kt(Xi, Pt)),
								Mi++,
								Ni++;
						}
					}
				}
				const Ri = Mi > zt,
					Ki = Ni > Qt;
				if (Ri && !Ki) {
					const ji = st[Qt + 1],
						Xi = ji === void 0 ? null : Be.getElementByKey(ji);
					ht(st, Qe, Ni, Qt, Pt, Xi);
				} else Ki && !Ri && rt(Ge, Mi, zt, Pt);
			}
			function It(Qe, Ge, st, pt, Ct, Pt) {
				(Je = ""),
					(Ee = ""),
					(Te = ""),
					(ke = pt === e.FULL_RECONCILE),
					(Ae = null),
					(Be = st),
					(Ie = st._config),
					(Se = st._nodes),
					(qe = Be._listeners.mutation),
					(Me = Ct),
					(De = Pt),
					(Re = Qe._nodeMap),
					(je = Ge._nodeMap),
					(Ue = Ge._readOnly),
					(Ve = new Map(st._keyToDOMMap));
				const zt = new Map();
				return (
					(Ze = zt),
					Kt("root", null),
					(Be = void 0),
					(Se = void 0),
					(Me = void 0),
					(De = void 0),
					(Re = void 0),
					(je = void 0),
					(Ie = void 0),
					(Ve = void 0),
					(Ze = void 0),
					zt
				);
			}
			function Lt(Qe, Ge, st) {
				const pt = st._keyToDOMMap;
				(Ge["__lexicalKey_" + st._key] = Qe), pt.set(Qe, Ge);
			}
			function xt(Qe) {
				const Ge = Ve.get(Qe);
				return (
					Ge === void 0 &&
						(0, w.default)(
							!1,
							"Reconciliation: could not find DOM element for node key %s",
							Qe,
						),
					Ge
				);
			}
			class Vt {
				constructor(Ge, st, pt) {
					(this._selection = null),
						(this.key = Ge),
						(this.offset = st),
						(this.type = pt);
				}
				is(Ge) {
					return (
						this.key === Ge.key &&
						this.offset === Ge.offset &&
						this.type === Ge.type
					);
				}
				isBefore(Ge) {
					let st = this.getNode(),
						pt = Ge.getNode();
					const Ct = this.offset,
						Pt = Ge.offset;
					if (ln(st)) {
						const zt = st.getDescendantByIndex(Ct);
						st = zt ?? st;
					}
					if (ln(pt)) {
						const zt = pt.getDescendantByIndex(Pt);
						pt = zt ?? pt;
					}
					return st === pt ? Ct < Pt : st.isBefore(pt);
				}
				getNode() {
					const Ge = this.key,
						st = dn(Ge);
					return (
						st === null && (0, w.default)(!1, "Point.getNode: node not found"),
						st
					);
				}
				set(Ge, st, pt) {
					const Ct = this._selection,
						Pt = this.key;
					(this.key = Ge),
						(this.offset = st),
						(this.type = pt),
						_e() ||
							(sn() === Pt && _n(Ge),
							Ct !== null && ((Ct._cachedNodes = null), (Ct.dirty = !0)));
				}
			}
			e.Point = Vt;
			function Bt(Qe, Ge, st) {
				return new Vt(Qe, Ge, st);
			}
			function Gt(Qe, Ge) {
				let st = Ge.__key,
					pt = Qe.offset,
					Ct = "element";
				if (mn(Ge)) {
					Ct = "text";
					const Pt = Ge.getTextContentSize();
					pt > Pt && (pt = Pt);
				} else if (!ln(Ge)) {
					const Pt = Ge.getNextSibling();
					if (mn(Pt)) (st = Pt.__key), (pt = 0), (Ct = "text");
					else {
						const zt = Ge.getParent();
						zt && ((st = zt.__key), (pt = Ge.getIndexWithinParent() + 1));
					}
				}
				Qe.set(st, pt, Ct);
			}
			function Mt(Qe, Ge) {
				if (ln(Ge)) {
					const st = Ge.getLastDescendant();
					ln(st) || mn(st) ? Gt(Qe, st) : Gt(Qe, Ge);
				} else Gt(Qe, Ge);
			}
			function Ut(Qe, Ge, st, pt) {
				const Ct = Qe.getNode(),
					Pt = Ct.getChildAtIndex(Qe.offset),
					zt = cs(),
					Qt = it(Ct) ? yt().append(zt) : zt;
				zt.setFormat(st),
					zt.setStyle(pt),
					Pt === null ? Ct.append(Qt) : Pt.insertBefore(Qt),
					Qe.is(Ge) && Ge.set(zt.__key, 0, "text"),
					Qe.set(zt.__key, 0, "text");
			}
			function ei(Qe, Ge, st, pt) {
				(Qe.key = Ge), (Qe.offset = st), (Qe.type = pt);
			}
			class mi {
				constructor(Ge) {
					(this.dirty = !1), (this._nodes = Ge), (this._cachedNodes = null);
				}
				is(Ge) {
					if (!Zt(Ge)) return !1;
					const st = this._nodes,
						pt = Ge._nodes;
					return (
						st.size === pt.size && Array.from(st).every((Ct) => pt.has(Ct))
					);
				}
				add(Ge) {
					(this.dirty = !0), this._nodes.add(Ge), (this._cachedNodes = null);
				}
				delete(Ge) {
					(this.dirty = !0), this._nodes.delete(Ge), (this._cachedNodes = null);
				}
				clear() {
					(this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null);
				}
				has(Ge) {
					return this._nodes.has(Ge);
				}
				clone() {
					return new mi(new Set(this._nodes));
				}
				getStartEndPoints() {
					return null;
				}
				extract() {
					return this.getNodes();
				}
				insertRawText(Ge) {}
				insertText() {}
				insertNodes(Ge, st) {
					const pt = this.getNodes(),
						Ct = pt.length,
						Pt = pt[Ct - 1];
					let zt;
					if (mn(Pt)) zt = Pt.select();
					else {
						const Qt = Pt.getIndexWithinParent() + 1;
						zt = Pt.getParentOrThrow().select(Qt, Qt);
					}
					zt.insertNodes(Ge, st);
					for (let Qt = 0; Qt < Ct; Qt++) pt[Qt].remove();
					return !0;
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this._nodes,
						pt = [];
					for (const Ct of st) {
						const Pt = dn(Ct);
						Pt !== null && pt.push(Pt);
					}
					return _e() || (this._cachedNodes = pt), pt;
				}
				getTextContent() {
					const Ge = this.getNodes();
					let st = "";
					for (let pt = 0; pt < Ge.length; pt++) st += Ge[pt].getTextContent();
					return st;
				}
			}
			e.NodeSelection = mi;
			function ii(Qe) {
				return Qe instanceof si;
			}
			class Dt {
				constructor(Ge, st, pt) {
					(this.gridKey = Ge),
						(this.anchor = st),
						(this.focus = pt),
						(this.dirty = !1),
						(this._cachedNodes = null),
						(st._selection = this),
						(pt._selection = this);
				}
				is(Ge) {
					return Jt(Ge)
						? this.gridKey === Ge.gridKey &&
								this.anchor.is(Ge.anchor) &&
								this.focus.is(Ge.focus)
						: !1;
				}
				set(Ge, st, pt) {
					(this.dirty = !0),
						(this.gridKey = Ge),
						(this.anchor.key = st),
						(this.focus.key = pt),
						(this._cachedNodes = null);
				}
				clone() {
					return new Dt(this.gridKey, this.anchor, this.focus);
				}
				getStartEndPoints() {
					return [this.anchor, this.focus];
				}
				isCollapsed() {
					return !1;
				}
				isBackward() {
					return this.focus.isBefore(this.anchor);
				}
				getCharacterOffsets() {
					return ri(this);
				}
				extract() {
					return this.getNodes();
				}
				insertRawText(Ge) {}
				insertText() {}
				insertNodes(Ge, st) {
					const pt = this.focus.getNode();
					return He(pt.select(0, pt.getChildrenSize())).insertNodes(Ge, st);
				}
				getShape() {
					const Ge = dn(this.anchor.key);
					(0, w.default)(Ge !== null, "getNodes: expected to find AnchorNode");
					const st = Ge.getIndexWithinParent(),
						pt = Ge.getParentOrThrow().getIndexWithinParent(),
						Ct = dn(this.focus.key);
					(0, w.default)(Ct !== null, "getNodes: expected to find FocusNode");
					const Pt = Ct.getIndexWithinParent(),
						zt = Ct.getParentOrThrow().getIndexWithinParent(),
						Qt = Math.min(st, Pt),
						ui = Math.max(st, Pt),
						vi = Math.min(pt, zt),
						Ii = Math.max(pt, zt);
					return {
						fromX: Math.min(Qt, ui),
						fromY: Math.min(vi, Ii),
						toX: Math.max(Qt, ui),
						toY: Math.max(vi, Ii),
					};
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this.anchor.getNode(),
						pt = this.focus.getNode(),
						Ct = ur(st, zs),
						Pt = ur(pt, zs);
					(0, w.default)(
						zs(Ct),
						"Expected GridSelection anchor to be (or a child of) GridCellNode",
					),
						(0, w.default)(
							zs(Pt),
							"Expected GridSelection focus to be (or a child of) GridCellNode",
						);
					const zt = Ct.getParent();
					(0, w.default)(
						Fr(zt),
						"Expected anchorCell to have a parent GridRowNode",
					);
					const Qt = zt.getParent();
					(0, w.default)(
						Kr(Qt),
						"Expected tableNode to have a parent GridNode",
					);
					const [ui, vi, Ii] = At(Qt, Ct, Pt);
					let Mi = Math.min(vi.startColumn, Ii.startColumn),
						Ni = Math.min(vi.startRow, Ii.startRow),
						Ri = Math.max(
							vi.startColumn + vi.cell.__colSpan - 1,
							Ii.startColumn + Ii.cell.__colSpan - 1,
						),
						Ki = Math.max(
							vi.startRow + vi.cell.__rowSpan - 1,
							Ii.startRow + Ii.cell.__rowSpan - 1,
						),
						ji = Mi,
						Xi = Ni,
						on = Mi,
						Qi = Ni;
					function rn(gn) {
						const { cell: Cn, startColumn: Tn, startRow: Vn } = gn;
						(Mi = Math.min(Mi, Tn)),
							(Ni = Math.min(Ni, Vn)),
							(Ri = Math.max(Ri, Tn + Cn.__colSpan - 1)),
							(Ki = Math.max(Ki, Vn + Cn.__rowSpan - 1));
					}
					for (; Mi < ji || Ni < Xi || Ri > on || Ki > Qi; ) {
						if (Mi < ji) {
							const gn = Qi - Xi,
								Cn = ji - 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Xi + Tn][Cn]);
							ji = Cn;
						}
						if (Ni < Xi) {
							const gn = on - ji,
								Cn = Xi - 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Cn][ji + Tn]);
							Xi = Cn;
						}
						if (Ri > on) {
							const gn = Qi - Xi,
								Cn = on + 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Xi + Tn][Cn]);
							on = Cn;
						}
						if (Ki > Qi) {
							const gn = on - ji,
								Cn = Qi + 1;
							for (let Tn = 0; Tn <= gn; Tn++) rn(ui[Cn][ji + Tn]);
							Qi = Cn;
						}
					}
					const pn = [Qt];
					let bn = null;
					for (let gn = Ni; gn <= Ki; gn++)
						for (let Cn = Mi; Cn <= Ri; Cn++) {
							const { cell: Tn } = ui[gn][Cn],
								Vn = Tn.getParent();
							(0, w.default)(
								Fr(Vn),
								"Expected GridCellNode parent to be a GridRowNode",
							),
								Vn !== bn && pn.push(Vn),
								pn.push(Tn, ...eo(Tn)),
								(bn = Vn);
						}
					return _e() || (this._cachedNodes = pn), pn;
				}
				getTextContent() {
					const Ge = this.getNodes();
					let st = "";
					for (let pt = 0; pt < Ge.length; pt++) st += Ge[pt].getTextContent();
					return st;
				}
			}
			e.GridSelection = Dt;
			function Jt(Qe) {
				return Qe instanceof Dt;
			}
			class si {
				constructor(Ge, st, pt, Ct) {
					(this.anchor = Ge),
						(this.focus = st),
						(this.dirty = !1),
						(this.format = pt),
						(this.style = Ct),
						(this._cachedNodes = null),
						(Ge._selection = this),
						(st._selection = this);
				}
				is(Ge) {
					return ii(Ge)
						? this.anchor.is(Ge.anchor) &&
								this.focus.is(Ge.focus) &&
								this.format === Ge.format &&
								this.style === Ge.style
						: !1;
				}
				isBackward() {
					return this.focus.isBefore(this.anchor);
				}
				isCollapsed() {
					return this.anchor.is(this.focus);
				}
				getStartEndPoints() {
					return [this.anchor, this.focus];
				}
				getNodes() {
					const Ge = this._cachedNodes;
					if (Ge !== null) return Ge;
					const st = this.anchor,
						pt = this.focus,
						Ct = st.isBefore(pt),
						Pt = Ct ? st : pt,
						zt = Ct ? pt : st;
					let Qt = Pt.getNode(),
						ui = zt.getNode();
					const vi = Pt.offset,
						Ii = zt.offset;
					if (ln(Qt)) {
						const Ni = Qt.getDescendantByIndex(vi);
						Qt = Ni ?? Qt;
					}
					if (ln(ui)) {
						let Ni = ui.getDescendantByIndex(Ii);
						Ni !== null &&
							Ni !== Qt &&
							ui.getChildAtIndex(Ii) === Ni &&
							(Ni = Ni.getPreviousSibling()),
							(ui = Ni ?? ui);
					}
					let Mi;
					return (
						Qt.is(ui)
							? ln(Qt) && Qt.getChildrenSize() > 0
								? (Mi = [])
								: (Mi = [Qt])
							: (Mi = Qt.getNodesBetween(ui)),
						_e() || (this._cachedNodes = Mi),
						Mi
					);
				}
				setTextNodeRange(Ge, st, pt, Ct) {
					ei(this.anchor, Ge.__key, st, "text"),
						ei(this.focus, pt.__key, Ct, "text"),
						(this._cachedNodes = null),
						(this.dirty = !0);
				}
				getTextContent() {
					const Ge = this.getNodes();
					if (Ge.length === 0) return "";
					const st = Ge[0],
						pt = Ge[Ge.length - 1],
						Ct = this.anchor,
						Pt = this.focus,
						zt = Ct.isBefore(Pt),
						[Qt, ui] = ri(this);
					let vi = "",
						Ii = !0;
					for (let Mi = 0; Mi < Ge.length; Mi++) {
						const Ni = Ge[Mi];
						if (ln(Ni) && !Ni.isInline())
							Ii ||
								(vi += `
`),
								Ni.isEmpty() ? (Ii = !1) : (Ii = !0);
						else if (((Ii = !1), mn(Ni))) {
							let Ri = Ni.getTextContent();
							Ni === st
								? Ni === pt
									? (Ct.type !== "element" ||
											Pt.type !== "element" ||
											Pt.offset === Ct.offset) &&
										(Ri = Qt < ui ? Ri.slice(Qt, ui) : Ri.slice(ui, Qt))
									: (Ri = zt ? Ri.slice(Qt) : Ri.slice(ui))
								: Ni === pt && (Ri = zt ? Ri.slice(0, ui) : Ri.slice(0, Qt)),
								(vi += Ri);
						} else
							(Xn(Ni) || Or(Ni)) &&
								(Ni !== pt || !this.isCollapsed()) &&
								(vi += Ni.getTextContent());
					}
					return vi;
				}
				applyDOMRange(Ge) {
					const st = Pi(),
						Ct = st.getEditorState()._selection,
						Pt = Wi(
							Ge.startContainer,
							Ge.startOffset,
							Ge.endContainer,
							Ge.endOffset,
							st,
							Ct,
						);
					if (Pt === null) return;
					const [zt, Qt] = Pt;
					ei(this.anchor, zt.key, zt.offset, zt.type),
						ei(this.focus, Qt.key, Qt.offset, Qt.type),
						(this._cachedNodes = null);
				}
				clone() {
					const Ge = this.anchor,
						st = this.focus;
					return new si(
						Bt(Ge.key, Ge.offset, Ge.type),
						Bt(st.key, st.offset, st.type),
						this.format,
						this.style,
					);
				}
				toggleFormat(Ge) {
					(this.format = xn(this.format, Ge, null)), (this.dirty = !0);
				}
				setStyle(Ge) {
					(this.style = Ge), (this.dirty = !0);
				}
				hasFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return (this.format & st) !== 0;
				}
				insertRawText(Ge) {
					const st = Ge.split(/(\r?\n|\t)/),
						pt = [],
						Ct = st.length;
					for (let Pt = 0; Pt < Ct; Pt++) {
						const zt = st[Pt];
						zt ===
							`
` ||
						zt ===
							`\r
`
							? pt.push(gr())
							: zt === "	"
								? pt.push(Ar())
								: pt.push(cs(zt));
					}
					this.insertNodes(pt);
				}
				insertText(Ge) {
					const st = this.anchor,
						pt = this.focus,
						Ct = this.isCollapsed() || st.isBefore(pt),
						Pt = this.format,
						zt = this.style;
					Ct && st.type === "element"
						? Ut(st, pt, Pt, zt)
						: !Ct && pt.type === "element" && Ut(pt, st, Pt, zt);
					const Qt = this.getNodes(),
						ui = Qt.length,
						vi = Ct ? st : pt,
						Ii = Ct ? pt : st,
						Mi = vi.offset,
						Ni = Ii.offset;
					let Ri = Qt[0];
					mn(Ri) ||
						(0, w.default)(!1, "insertText: first node is not a text node");
					const ji = Ri.getTextContent().length,
						Xi = Ri.getParentOrThrow(),
						on = ui - 1;
					let Qi = Qt[on];
					if (
						this.isCollapsed() &&
						Mi === ji &&
						(Ri.isSegmented() ||
							Ri.isToken() ||
							!Ri.canInsertTextAfter() ||
							(!Xi.canInsertTextAfter() && Ri.getNextSibling() === null))
					) {
						let rn = Ri.getNextSibling();
						if (
							((!mn(rn) || !rn.canInsertTextBefore() || Zi(rn)) &&
								((rn = cs()),
								rn.setFormat(Pt),
								Xi.canInsertTextAfter()
									? Ri.insertAfter(rn)
									: Xi.insertAfter(rn)),
							rn.select(0, 0),
							(Ri = rn),
							Ge !== "")
						) {
							this.insertText(Ge);
							return;
						}
					} else if (
						this.isCollapsed() &&
						Mi === 0 &&
						(Ri.isSegmented() ||
							Ri.isToken() ||
							!Ri.canInsertTextBefore() ||
							(!Xi.canInsertTextBefore() && Ri.getPreviousSibling() === null))
					) {
						let rn = Ri.getPreviousSibling();
						if (
							((!mn(rn) || Zi(rn)) &&
								((rn = cs()),
								rn.setFormat(Pt),
								Xi.canInsertTextBefore()
									? Ri.insertBefore(rn)
									: Xi.insertBefore(rn)),
							rn.select(),
							(Ri = rn),
							Ge !== "")
						) {
							this.insertText(Ge);
							return;
						}
					} else if (Ri.isSegmented() && Mi !== ji) {
						const rn = cs(Ri.getTextContent());
						rn.setFormat(Pt), Ri.replace(rn), (Ri = rn);
					} else if (!this.isCollapsed() && Ge !== "") {
						const rn = Qi.getParent();
						if (
							!Xi.canInsertTextBefore() ||
							!Xi.canInsertTextAfter() ||
							(ln(rn) &&
								(!rn.canInsertTextBefore() || !rn.canInsertTextAfter()))
						) {
							this.insertText(""),
								Ui(this.anchor, this.focus, null),
								this.insertText(Ge);
							return;
						}
					}
					if (ui === 1) {
						if (Ri.isToken()) {
							const gn = cs(Ge);
							gn.select(), Ri.replace(gn);
							return;
						}
						const rn = Ri.getFormat(),
							pn = Ri.getStyle();
						if (Mi === Ni && (rn !== Pt || pn !== zt))
							if (Ri.getTextContent() === "") Ri.setFormat(Pt), Ri.setStyle(zt);
							else {
								const gn = cs(Ge);
								if ((gn.setFormat(Pt), gn.setStyle(zt), gn.select(), Mi === 0))
									Ri.insertBefore(gn, !1);
								else {
									const [Cn] = Ri.splitText(Mi);
									Cn.insertAfter(gn, !1);
								}
								gn.isComposing() &&
									this.anchor.type === "text" &&
									(this.anchor.offset -= Ge.length);
								return;
							}
						const bn = Ni - Mi;
						(Ri = Ri.spliceText(Mi, bn, Ge, !0)),
							Ri.getTextContent() === ""
								? Ri.remove()
								: this.anchor.type === "text" &&
									(Ri.isComposing()
										? (this.anchor.offset -= Ge.length)
										: ((this.format = rn), (this.style = pn)));
					} else {
						const rn = new Set([...Ri.getParentKeys(), ...Qi.getParentKeys()]),
							pn = ln(Ri) ? Ri : Ri.getParentOrThrow();
						let bn = ln(Qi) ? Qi : Qi.getParentOrThrow(),
							gn = Qi;
						if (!pn.is(bn) && bn.isInline())
							do (gn = bn), (bn = bn.getParentOrThrow());
							while (bn.isInline());
						if (
							(Ii.type === "text" &&
								(Ni !== 0 || Qi.getTextContent() === "")) ||
							(Ii.type === "element" && Qi.getIndexWithinParent() < Ni)
						)
							if (mn(Qi) && !Qi.isToken() && Ni !== Qi.getTextContentSize()) {
								if (Qi.isSegmented()) {
									const On = cs(Qi.getTextContent());
									Qi.replace(On), (Qi = On);
								}
								(Qi = Qi.spliceText(0, Ni, "")), rn.add(Qi.__key);
							} else {
								const On = Qi.getParentOrThrow();
								!On.canBeEmpty() && On.getChildrenSize() === 1
									? On.remove()
									: Qi.remove();
							}
						else rn.add(Qi.__key);
						const Cn = bn.getChildren(),
							Tn = new Set(Qt),
							Vn = pn.is(bn),
							Zn = pn.isInline() && Ri.getNextSibling() === null ? pn : Ri;
						for (let On = Cn.length - 1; On >= 0; On--) {
							const Kn = Cn[On];
							if (Kn.is(Ri) || (ln(Kn) && Kn.isParentOf(Ri))) break;
							Kn.isAttached() &&
								(!Tn.has(Kn) || Kn.is(gn)
									? Vn || Zn.insertAfter(Kn, !1)
									: Kn.remove());
						}
						if (!Vn) {
							let On = bn,
								Kn = null;
							for (; On !== null; ) {
								const Ss = On.getChildren(),
									gs = Ss.length;
								(gs === 0 || Ss[gs - 1].is(Kn)) &&
									(rn.delete(On.__key), (Kn = On)),
									(On = On.getParent());
							}
						}
						if (!Ri.isToken())
							(Ri = Ri.spliceText(Mi, ji - Mi, Ge, !0)),
								Ri.getTextContent() === ""
									? Ri.remove()
									: Ri.isComposing() &&
										this.anchor.type === "text" &&
										(this.anchor.offset -= Ge.length);
						else if (Mi === ji) Ri.select();
						else {
							const On = cs(Ge);
							On.select(), Ri.replace(On);
						}
						for (let On = 1; On < ui; On++) {
							const Kn = Qt[On],
								Ss = Kn.__key;
							rn.has(Ss) || Kn.remove();
						}
					}
				}
				removeText() {
					this.insertText("");
				}
				formatText(Ge) {
					if (this.isCollapsed()) {
						this.toggleFormat(Ge), _n(null);
						return;
					}
					const st = this.getNodes(),
						pt = [];
					for (const Qi of st) mn(Qi) && pt.push(Qi);
					const Ct = pt.length;
					if (Ct === 0) {
						this.toggleFormat(Ge), _n(null);
						return;
					}
					const Pt = this.anchor,
						zt = this.focus,
						Qt = this.isBackward(),
						ui = Qt ? zt : Pt,
						vi = Qt ? Pt : zt;
					let Ii = 0,
						Mi = pt[0],
						Ni = ui.type === "element" ? 0 : ui.offset;
					if (
						(ui.type === "text" &&
							Ni === Mi.getTextContentSize() &&
							((Ii = 1), (Mi = pt[1]), (Ni = 0)),
						Mi == null)
					)
						return;
					const Ri = Mi.getFormatFlags(Ge, null),
						Ki = Ct - 1;
					let ji = pt[Ki];
					const Xi = vi.type === "text" ? vi.offset : ji.getTextContentSize();
					if (Mi.is(ji)) {
						if (Ni === Xi) return;
						if (Ni === 0 && Xi === Mi.getTextContentSize()) Mi.setFormat(Ri);
						else {
							const Qi = Mi.splitText(Ni, Xi),
								rn = Ni === 0 ? Qi[0] : Qi[1];
							rn.setFormat(Ri),
								ui.type === "text" && ui.set(rn.__key, 0, "text"),
								vi.type === "text" && vi.set(rn.__key, Xi - Ni, "text");
						}
						this.format = Ri;
						return;
					}
					Ni !== 0 && (([, Mi] = Mi.splitText(Ni)), (Ni = 0)), Mi.setFormat(Ri);
					const on = ji.getFormatFlags(Ge, Ri);
					Xi > 0 &&
						(Xi !== ji.getTextContentSize() && ([ji] = ji.splitText(Xi)),
						ji.setFormat(on));
					for (let Qi = Ii + 1; Qi < Ki; Qi++) {
						const rn = pt[Qi];
						if (!rn.isToken()) {
							const pn = rn.getFormatFlags(Ge, on);
							rn.setFormat(pn);
						}
					}
					ui.type === "text" && ui.set(Mi.__key, Ni, "text"),
						vi.type === "text" && vi.set(ji.__key, Xi, "text"),
						(this.format = Ri | on);
				}
				insertNodes(Ge, st) {
					if (!this.isCollapsed()) {
						const Ki = this.isBackward() ? this.anchor : this.focus,
							ji = Ki.getNode().getNextSibling(),
							Xi = ji ? ji.getKey() : null,
							on = Ki.getNode().getPreviousSibling(),
							Qi = on ? on.getKey() : null;
						if (
							(this.removeText(),
							this.isCollapsed() && this.focus.type === "element")
						) {
							let rn;
							this.focus.key === Xi && this.focus.offset === 0
								? ((rn = cs()), this.focus.getNode().insertBefore(rn))
								: this.focus.key === Qi &&
									this.focus.offset ===
										this.focus.getNode().getChildrenSize() &&
									((rn = cs()), this.focus.getNode().insertAfter(rn)),
								rn &&
									(this.focus.set(rn.__key, 0, "text"),
									this.anchor.set(rn.__key, 0, "text"));
						}
					}
					const pt = this.anchor,
						Ct = pt.offset,
						Pt = pt.getNode();
					let zt = Pt;
					if (pt.type === "element") {
						const Ki = pt.getNode(),
							ji = Ki.getChildAtIndex(Ct - 1);
						ji === null ? (zt = Ki) : (zt = ji);
					}
					const Qt = [],
						ui = Pt.getNextSiblings(),
						vi = Wn(Pt) ? null : Pt.getTopLevelElementOrThrow();
					if (mn(Pt)) {
						const ji = Pt.getTextContent().length;
						if (Ct === 0 && ji !== 0) {
							const Xi = Pt.getPreviousSibling();
							Xi !== null ? (zt = Xi) : (zt = Pt.getParentOrThrow()),
								Qt.push(Pt);
						} else if (Ct === ji) zt = Pt;
						else {
							if (Pt.isToken()) return !1;
							{
								let Xi;
								([zt, Xi] = Pt.splitText(Ct)), Qt.push(Xi);
							}
						}
					}
					const Ii = zt;
					Qt.push(...ui);
					const Mi = Ge[0];
					let Ni = !1,
						Ri = null;
					for (let Ki = 0; Ki < Ge.length; Ki++) {
						const ji = Ge[Ki];
						if (!Wn(zt) && !Xn(zt) && ln(ji) && !ji.isInline()) {
							if (ji.is(Mi)) {
								if (ln(zt) && zt.isEmpty() && zt.canReplaceWith(ji)) {
									zt.replace(ji), (zt = ji), (Ni = !0);
									continue;
								}
								const Xi = ji.getFirstDescendant();
								if (Sn(Xi)) {
									let on = Xi.getParentOrThrow();
									for (; on.isInline(); ) on = on.getParentOrThrow();
									const Qi = on.getChildren(),
										rn = Qi.length;
									if (ln(zt)) {
										let pn = zt.getFirstChild();
										for (let bn = 0; bn < rn; bn++) {
											const gn = Qi[bn];
											pn === null ? zt.append(gn) : pn.insertAfter(gn),
												(pn = gn);
										}
									} else {
										for (let pn = rn - 1; pn >= 0; pn--) zt.insertAfter(Qi[pn]);
										zt = zt.getParentOrThrow();
									}
									if (((Ri = Qi[rn - 1]), on.remove(), (Ni = !0), on.is(ji)))
										continue;
								}
							}
							mn(zt) &&
								(vi === null &&
									(0, w.default)(
										!1,
										"insertNode: topLevelElement is root node",
									),
								(zt = vi));
						} else
							Ni &&
								!ln(ji) &&
								!Xn(ji) &&
								Wn(zt.getParent()) &&
								(0, w.default)(
									!1,
									"insertNodes: cannot insert a non-element into a root node",
								);
						if (((Ni = !1), ln(zt) && !zt.isInline()))
							if (((Ri = ji), Xn(ji) && !ji.isInline()))
								zt = zt.insertAfter(ji, !1);
							else if (ln(ji)) {
								if (!ji.canBeEmpty() && ji.isEmpty()) continue;
								if (it(zt)) {
									const Xi = zt.getChildAtIndex(Ct);
									Xi !== null ? Xi.insertBefore(ji) : zt.append(ji), (zt = ji);
								} else
									ji.isInline()
										? (zt.append(ji), (zt = ji))
										: (zt = zt.insertAfter(ji, !1));
							} else {
								const Xi = zt.getFirstChild();
								Xi !== null ? Xi.insertBefore(ji) : zt.append(ji), (zt = ji);
							}
						else if (
							!ln(ji) ||
							(ln(ji) && ji.isInline()) ||
							(Xn(zt) && !zt.isInline())
						)
							if (
								((Ri = ji),
								ii(this) && Xn(ji) && (ln(zt) || mn(zt)) && !ji.isInline())
							) {
								let Xi, on;
								if (mn(zt)) {
									Xi = zt.getParentOrThrow();
									const [rn] = zt.splitText(Ct);
									on = rn.getIndexWithinParent() + 1;
								} else (Xi = zt), (on = Ct);
								const [, Qi] = _r(Xi, on);
								zt = Qi.insertBefore(ji);
							} else zt = zt.insertAfter(ji, !1);
						else {
							const Xi = zt.getParentOrThrow();
							Or(zt) && zt.remove(), (zt = Xi), Ki--;
							continue;
						}
					}
					if (st)
						if (mn(Ii)) Ii.select();
						else {
							const Ki = zt.getPreviousSibling();
							if (mn(Ki)) Ki.select();
							else {
								const ji = zt.getIndexWithinParent();
								zt.getParentOrThrow().select(ji, ji);
							}
						}
					if (ln(zt)) {
						const Ki = mn(Ri)
							? Ri
							: ln(Ri) && Ri.isInline()
								? Ri.getLastDescendant()
								: zt.getLastDescendant();
						if (
							(st ||
								(Ki === null
									? zt.select()
									: mn(Ki)
										? Ki.getTextContent() === ""
											? Ki.selectPrevious()
											: Ki.select()
										: Ki.selectNext()),
							Qt.length !== 0)
						) {
							const ji = zt;
							for (let Xi = Qt.length - 1; Xi >= 0; Xi--) {
								const on = Qt[Xi],
									Qi = on.getParentOrThrow();
								if (
									ln(zt) &&
									!Gi(on) &&
									!(Xn(on) && (!on.isInline() || on.isIsolated()))
								)
									ji === zt ? zt.append(on) : zt.insertBefore(on), (zt = on);
								else if (!ln(zt) && !Gi(on)) zt.insertBefore(on), (zt = on);
								else if (ln(on) && !on.canInsertAfter(zt)) {
									const rn = Qi.constructor.clone(Qi);
									ln(rn) ||
										(0, w.default)(
											!1,
											"insertNodes: cloned parent clone is not an element",
										),
										rn.append(on),
										zt.insertAfter(rn);
								} else zt.insertAfter(on);
								Qi.isEmpty() && !Qi.canBeEmpty() && Qi.remove();
							}
						}
					} else if (!st)
						if (mn(zt)) zt.select();
						else {
							const Ki = zt.getParentOrThrow(),
								ji = zt.getIndexWithinParent() + 1;
							Ki.select(ji, ji);
						}
					return !0;
				}
				insertParagraph() {
					this.isCollapsed() || this.removeText();
					const Ge = this.anchor,
						st = Ge.offset;
					let pt,
						Ct = [],
						Pt = [];
					if (Ge.type === "text") {
						const ui = Ge.getNode();
						(Ct = ui.getNextSiblings().reverse()), (pt = ui.getParentOrThrow());
						const vi = pt.isInline(),
							Ii = vi ? pt.getTextContentSize() : ui.getTextContentSize();
						if (st === 0) Ct.push(ui);
						else if (
							(vi && (Pt = pt.getNextSiblings()),
							st !== Ii && (!vi || st !== ui.getTextContentSize()))
						) {
							const [, Mi] = ui.splitText(st);
							Ct.push(Mi);
						}
					} else {
						if (((pt = Ge.getNode()), Wn(pt))) {
							const ui = yt(),
								vi = pt.getChildAtIndex(st);
							ui.select(),
								vi !== null ? vi.insertBefore(ui, !1) : pt.append(ui);
							return;
						}
						Ct = pt.getChildren().slice(st).reverse();
					}
					const zt = Ct.length;
					if (st === 0 && zt > 0 && pt.isInline()) {
						const ui = pt.getParentOrThrow(),
							vi = ui.insertNewAfter(this, !1);
						if (ln(vi)) {
							const Ii = ui.getChildren();
							for (let Mi = 0; Mi < Ii.length; Mi++) vi.append(Ii[Mi]);
						}
						return;
					}
					const Qt = pt.insertNewAfter(this, !1);
					if (Qt === null) this.insertLineBreak();
					else if (ln(Qt)) {
						const ui = pt.getFirstChild();
						if (
							st === 0 &&
							(pt.is(Ge.getNode()) || (ui && ui.is(Ge.getNode()))) &&
							zt > 0
						) {
							pt.insertBefore(Qt);
							return;
						}
						let Ii = null;
						const Mi = Pt.length,
							Ni = Qt.getParentOrThrow();
						if (Mi > 0)
							for (let Ri = 0; Ri < Mi; Ri++) {
								const Ki = Pt[Ri];
								Ni.append(Ki);
							}
						if (zt !== 0)
							for (let Ri = 0; Ri < zt; Ri++) {
								const Ki = Ct[Ri];
								Ii === null ? Qt.append(Ki) : Ii.insertBefore(Ki), (Ii = Ki);
							}
						!Qt.canBeEmpty() && Qt.getChildrenSize() === 0
							? (Qt.selectPrevious(), Qt.remove())
							: Qt.selectStart();
					}
				}
				insertLineBreak(Ge) {
					const st = gr(),
						pt = this.anchor;
					if (pt.type === "element") {
						const Ct = pt.getNode();
						it(Ct) && this.insertParagraph();
					}
					Ge
						? this.insertNodes([st], !0)
						: this.insertNodes([st]) && st.selectNext(0, 0);
				}
				getCharacterOffsets() {
					return ri(this);
				}
				extract() {
					const Ge = this.getNodes(),
						st = Ge.length,
						pt = st - 1,
						Ct = this.anchor,
						Pt = this.focus;
					let zt = Ge[0],
						Qt = Ge[pt];
					const [ui, vi] = ri(this);
					if (st === 0) return [];
					if (st === 1) {
						if (mn(zt) && !this.isCollapsed()) {
							const Mi = ui > vi ? vi : ui,
								Ni = ui > vi ? ui : vi,
								Ri = zt.splitText(Mi, Ni),
								Ki = Mi === 0 ? Ri[0] : Ri[1];
							return Ki != null ? [Ki] : [];
						}
						return [zt];
					}
					const Ii = Ct.isBefore(Pt);
					if (mn(zt)) {
						const Mi = Ii ? ui : vi;
						Mi === zt.getTextContentSize()
							? Ge.shift()
							: Mi !== 0 && (([, zt] = zt.splitText(Mi)), (Ge[0] = zt));
					}
					if (mn(Qt)) {
						const Ni = Qt.getTextContent().length,
							Ri = Ii ? vi : ui;
						Ri === 0
							? Ge.pop()
							: Ri !== Ni && (([Qt] = Qt.splitText(Ri)), (Ge[pt] = Qt));
					}
					return Ge;
				}
				modify(Ge, st, pt) {
					const Ct = this.focus,
						Pt = this.anchor,
						zt = Ge === "move",
						Qt = Cs(Ct, st);
					if (Xn(Qt) && !Qt.isIsolated()) {
						if (zt && Qt.isKeyboardSelectable()) {
							const Ri = yi();
							Ri.add(Qt.__key), us(Ri);
							return;
						}
						const Ni = st ? Qt.getPreviousSibling() : Qt.getNextSibling();
						if (mn(Ni)) {
							const Ri = Ni.__key,
								Ki = st ? Ni.getTextContent().length : 0;
							Ct.set(Ri, Ki, "text"), zt && Pt.set(Ri, Ki, "text");
							return;
						} else {
							const Ri = Qt.getParentOrThrow();
							let Ki, ji;
							ln(Ni)
								? ((ji = Ni.__key), (Ki = st ? Ni.getChildrenSize() : 0))
								: ((Ki = Qt.getIndexWithinParent()),
									(ji = Ri.__key),
									st || Ki++),
								Ct.set(ji, Ki, "element"),
								zt && Pt.set(ji, Ki, "element");
							return;
						}
					}
					const ui = Pi(),
						vi = Ds(ui._window);
					if (!vi) return;
					const Ii = ui._blockCursorElement,
						Mi = ui._rootElement;
					if (
						(Mi !== null &&
							Ii !== null &&
							ln(Qt) &&
							!Qt.isInline() &&
							!Qt.canBeEmpty() &&
							Nr(Ii, ui, Mi),
						Wt(vi, Ge, st ? "backward" : "forward", pt),
						vi.rangeCount > 0)
					) {
						const Ni = vi.getRangeAt(0),
							Ri = this.anchor.getNode(),
							Ki = it(Ri) ? Ri : kn(Ri);
						if ((this.applyDOMRange(Ni), (this.dirty = !0), !zt)) {
							const ji = this.getNodes(),
								Xi = [];
							let on = !1;
							for (let Qi = 0; Qi < ji.length; Qi++) {
								const rn = ji[Qi];
								Ei(rn, Ki) ? Xi.push(rn) : (on = !0);
							}
							if (on && Xi.length > 0)
								if (st) {
									const Qi = Xi[0];
									ln(Qi)
										? Qi.selectStart()
										: Qi.getParentOrThrow().selectStart();
								} else {
									const Qi = Xi[Xi.length - 1];
									ln(Qi) ? Qi.selectEnd() : Qi.getParentOrThrow().selectEnd();
								}
							(vi.anchorNode !== Ni.startContainer ||
								vi.anchorOffset !== Ni.startOffset) &&
								$i(this);
						}
					}
				}
				deleteCharacter(Ge) {
					const st = this.isCollapsed();
					if (this.isCollapsed()) {
						const pt = this.anchor,
							Ct = this.focus;
						let Pt = pt.getNode();
						if (
							!Ge &&
							((pt.type === "element" &&
								ln(Pt) &&
								pt.offset === Pt.getChildrenSize()) ||
								(pt.type === "text" && pt.offset === Pt.getTextContentSize()))
						) {
							const Qt = Pt.getParent(),
								ui =
									Pt.getNextSibling() ||
									(Qt === null ? null : Qt.getNextSibling());
							if (ln(ui) && ui.isShadowRoot()) return;
						}
						const zt = Cs(Ct, Ge);
						if (Xn(zt) && !zt.isIsolated()) {
							if (
								zt.isKeyboardSelectable() &&
								ln(Pt) &&
								Pt.getChildrenSize() === 0
							) {
								Pt.remove();
								const Qt = yi();
								Qt.add(zt.__key), us(Qt);
							} else
								zt.remove(),
									Pi().dispatchCommand(e.SELECTION_CHANGE_COMMAND, void 0);
							return;
						} else if (!Ge && ln(zt) && ln(Pt) && Pt.isEmpty()) {
							Pt.remove(), zt.selectStart();
							return;
						}
						if ((this.modify("extend", Ge, "character"), this.isCollapsed())) {
							if (
								Ge &&
								pt.offset === 0 &&
								(pt.type === "element"
									? pt.getNode()
									: pt.getNode().getParentOrThrow()
								).collapseAtStart(this)
							)
								return;
						} else {
							const Qt = Ct.type === "text" ? Ct.getNode() : null;
							if (
								((Pt = pt.type === "text" ? pt.getNode() : null),
								Qt !== null && Qt.isSegmented())
							) {
								const ui = Ct.offset,
									vi = Qt.getTextContentSize();
								if (Qt.is(Pt) || (Ge && ui !== vi) || (!Ge && ui !== 0)) {
									at(Qt, Ge, ui);
									return;
								}
							} else if (Pt !== null && Pt.isSegmented()) {
								const ui = pt.offset,
									vi = Pt.getTextContentSize();
								if (Pt.is(Qt) || (Ge && ui !== 0) || (!Ge && ui !== vi)) {
									at(Pt, Ge, ui);
									return;
								}
							}
							tt(this, Ge);
						}
					}
					if (
						(this.removeText(),
						Ge &&
							!st &&
							this.isCollapsed() &&
							this.anchor.type === "element" &&
							this.anchor.offset === 0)
					) {
						const pt = this.anchor.getNode();
						pt.isEmpty() &&
							it(pt.getParent()) &&
							pt.getIndexWithinParent() === 0 &&
							pt.collapseAtStart(this);
					}
				}
				deleteLine(Ge) {
					this.isCollapsed() &&
						(this.anchor.type === "text" &&
							this.modify("extend", Ge, "lineboundary"),
						(Ge ? this.focus : this.anchor).offset === 0 &&
							this.modify("extend", Ge, "character")),
						this.removeText();
				}
				deleteWord(Ge) {
					this.isCollapsed() && this.modify("extend", Ge, "word"),
						this.removeText();
				}
			}
			e.RangeSelection = si;
			function Zt(Qe) {
				return Qe instanceof mi;
			}
			function ci(Qe) {
				const Ge = Qe.offset;
				if (Qe.type === "text") return Ge;
				const st = Qe.getNode();
				return Ge === st.getChildrenSize() ? st.getTextContent().length : 0;
			}
			function ri(Qe) {
				const Ge = Qe.anchor,
					st = Qe.focus;
				return Ge.type === "element" &&
					st.type === "element" &&
					Ge.key === st.key &&
					Ge.offset === st.offset
					? [0, 0]
					: [ci(Ge), ci(st)];
			}
			function $i(Qe) {
				const Ge = Qe.focus,
					st = Qe.anchor,
					pt = st.key,
					Ct = st.offset,
					Pt = st.type;
				ei(st, Ge.key, Ge.offset, Ge.type),
					ei(Ge, pt, Ct, Pt),
					(Qe._cachedNodes = null);
			}
			function Wt(Qe, Ge, st, pt) {
				Qe.modify(Ge, st, pt);
			}
			function tt(Qe, Ge) {
				const st = Qe.anchor,
					pt = Qe.focus,
					Ct = st.getNode(),
					Pt = pt.getNode();
				if (Ct === Pt && st.type === "text" && pt.type === "text") {
					const zt = st.offset,
						Qt = pt.offset,
						ui = zt < Qt,
						vi = ui ? zt : Qt,
						Ii = ui ? Qt : zt,
						Mi = Ii - 1;
					if (vi !== Mi) {
						const Ni = Ct.getTextContent().slice(vi, Ii);
						Xs(Ni) || (Ge ? (pt.offset = Mi) : (st.offset = Mi));
					}
				}
			}
			function at(Qe, Ge, st) {
				const pt = Qe,
					Pt = pt.getTextContent().split(/(?=\s)/g),
					zt = Pt.length;
				let Qt = 0,
					ui = 0;
				for (let Ii = 0; Ii < zt; Ii++) {
					const Mi = Pt[Ii],
						Ni = Ii === zt - 1;
					if (
						((ui = Qt), (Qt += Mi.length), (Ge && Qt === st) || Qt > st || Ni)
					) {
						Pt.splice(Ii, 1), Ni && (ui = void 0);
						break;
					}
				}
				const vi = Pt.join("").trim();
				vi === "" ? pt.remove() : (pt.setTextContent(vi), pt.select(ui, ui));
			}
			function pi(Qe, Ge, st) {
				const pt = Qe.getParent();
				return (
					st === null || pt === null || !pt.canBeEmpty() || pt !== st.getNode()
				);
			}
			function Li(Qe, Ge, st, pt) {
				let Ct = Ge,
					Pt;
				if (Qe.nodeType === e.DOM_ELEMENT_TYPE) {
					let zt = !1;
					const Qt = Qe.childNodes,
						ui = Qt.length;
					Ct === ui && ((zt = !0), (Ct = ui - 1));
					let vi = Qt[Ct],
						Ii = !1;
					if (
						(vi === pt._blockCursorElement
							? ((vi = Qt[Ct + 1]), (Ii = !0))
							: pt._blockCursorElement !== null && Ct--,
						(Pt = Ws(vi)),
						mn(Pt))
					)
						Ct = br(Pt, zt);
					else {
						let Mi = Ws(Qe);
						if (Mi === null) return null;
						if (ln(Mi)) {
							let Ni = Mi.getChildAtIndex(Ct);
							if (ln(Ni) && pi(Ni, Ct, st)) {
								const Ri = zt
									? Ni.getLastDescendant()
									: Ni.getFirstDescendant();
								Ri === null
									? ((Mi = Ni), (Ct = 0))
									: ((Ni = Ri), (Mi = ln(Ni) ? Ni : Ni.getParentOrThrow()));
							}
							mn(Ni)
								? ((Pt = Ni), (Mi = null), (Ct = br(Ni, zt)))
								: Ni !== Mi && zt && !Ii && Ct++;
						} else {
							const Ni = Mi.getIndexWithinParent();
							Ge === 0 && Xn(Mi) && Ws(Qe) === Mi ? (Ct = Ni) : (Ct = Ni + 1),
								(Mi = Mi.getParentOrThrow());
						}
						if (ln(Mi)) return Bt(Mi.__key, Ct, "element");
					}
				} else Pt = Ws(Qe);
				return mn(Pt) ? Bt(Pt.__key, Ct, "text") : null;
			}
			function Di(Qe, Ge, st) {
				const pt = Qe.offset,
					Ct = Qe.getNode();
				if (pt === 0) {
					const Pt = Ct.getPreviousSibling(),
						zt = Ct.getParent();
					if (!Ge)
						ln(Pt) && !st && Pt.isInline()
							? ((Qe.key = Pt.__key),
								(Qe.offset = Pt.getChildrenSize()),
								(Qe.type = "element"))
							: mn(Pt) &&
								((Qe.key = Pt.__key), (Qe.offset = Pt.getTextContent().length));
					else if ((st || !Ge) && Pt === null && ln(zt) && zt.isInline()) {
						const Qt = zt.getPreviousSibling();
						mn(Qt) &&
							((Qe.key = Qt.__key), (Qe.offset = Qt.getTextContent().length));
					}
				} else if (pt === Ct.getTextContent().length) {
					const Pt = Ct.getNextSibling(),
						zt = Ct.getParent();
					if (Ge && ln(Pt) && Pt.isInline())
						(Qe.key = Pt.__key), (Qe.offset = 0), (Qe.type = "element");
					else if (
						(st || Ge) &&
						Pt === null &&
						ln(zt) &&
						zt.isInline() &&
						!zt.canInsertTextAfter()
					) {
						const Qt = zt.getNextSibling();
						mn(Qt) && ((Qe.key = Qt.__key), (Qe.offset = 0));
					}
				}
			}
			function Ui(Qe, Ge, st) {
				if (Qe.type === "text" && Ge.type === "text") {
					const pt = Qe.isBefore(Ge),
						Ct = Qe.is(Ge);
					Di(Qe, pt, Ct),
						Di(Ge, !pt, Ct),
						Ct &&
							((Ge.key = Qe.key), (Ge.offset = Qe.offset), (Ge.type = Qe.type));
					const Pt = Pi();
					if (Pt.isComposing() && Pt._compositionKey !== Qe.key && ii(st)) {
						const zt = st.anchor,
							Qt = st.focus;
						ei(Qe, zt.key, zt.offset, zt.type),
							ei(Ge, Qt.key, Qt.offset, Qt.type);
					}
				}
			}
			function Wi(Qe, Ge, st, pt, Ct, Pt) {
				if (Qe === null || st === null || !ns(Ct, Qe, st)) return null;
				const zt = Li(Qe, Ge, ii(Pt) ? Pt.anchor : null, Ct);
				if (zt === null) return null;
				const Qt = Li(st, pt, ii(Pt) ? Pt.focus : null, Ct);
				if (Qt === null) return null;
				if (zt.type === "element" && Qt.type === "element") {
					const ui = Ws(Qe),
						vi = Ws(st);
					if (Xn(ui) && Xn(vi)) return null;
				}
				return Ui(zt, Qt, Pt), [zt, Qt];
			}
			function Gi(Qe) {
				return ln(Qe) && !Qe.isInline();
			}
			function qi(Qe, Ge, st, pt, Ct, Pt) {
				const zt = ki(),
					Qt = new si(Bt(Qe, Ge, Ct), Bt(st, pt, Pt), 0, "");
				return (Qt.dirty = !0), (zt._selection = Qt), Qt;
			}
			function Oi() {
				const Qe = Bt("root", 0, "element"),
					Ge = Bt("root", 0, "element");
				return new si(Qe, Ge, 0, "");
			}
			function yi() {
				return new mi(new Set());
			}
			function Ai() {
				const Qe = Bt("root", 0, "element"),
					Ge = Bt("root", 0, "element");
				return new Dt("root", Qe, Ge);
			}
			function li(Qe) {
				const st = Qe.getEditorState()._selection,
					pt = Ds(Qe._window);
				return Zt(st) || Jt(st) ? st.clone() : Vi(st, pt, Qe);
			}
			function Vi(Qe, Ge, st) {
				const pt = st._window;
				if (pt === null) return null;
				const Ct = pt.event,
					Pt = Ct ? Ct.type : void 0,
					zt = Pt === "selectionchange",
					Qt =
						!oe() &&
						(zt ||
							Pt === "beforeinput" ||
							Pt === "compositionstart" ||
							Pt === "compositionend" ||
							(Pt === "click" && Ct && Ct.detail === 3) ||
							Pt === "drop" ||
							Pt === void 0);
				let ui, vi, Ii, Mi;
				if (!ii(Qe) || Qt) {
					if (Ge === null) return null;
					if (
						((ui = Ge.anchorNode),
						(vi = Ge.focusNode),
						(Ii = Ge.anchorOffset),
						(Mi = Ge.focusOffset),
						zt && ii(Qe) && !ns(st, ui, vi))
					)
						return Qe.clone();
				} else return Qe.clone();
				const Ni = Wi(ui, Ii, vi, Mi, st, Qe);
				if (Ni === null) return null;
				const [Ri, Ki] = Ni;
				return new si(Ri, Ki, ii(Qe) ? Qe.format : 0, ii(Qe) ? Qe.style : "");
			}
			function wi() {
				return ki()._selection;
			}
			function _t() {
				return Pi()._editorState._selection;
			}
			function ai(Qe, Ge, st, pt = 1) {
				const Ct = Qe.anchor,
					Pt = Qe.focus,
					zt = Ct.getNode(),
					Qt = Pt.getNode();
				if (!Ge.is(zt) && !Ge.is(Qt)) return;
				const ui = Ge.__key;
				if (Qe.isCollapsed()) {
					const vi = Ct.offset;
					if ((st <= vi && pt > 0) || (st < vi && pt < 0)) {
						const Ii = Math.max(0, vi + pt);
						Ct.set(ui, Ii, "element"), Pt.set(ui, Ii, "element"), Ft(Qe);
					}
				} else {
					const vi = Qe.isBackward(),
						Ii = vi ? Pt : Ct,
						Mi = Ii.getNode(),
						Ni = vi ? Ct : Pt,
						Ri = Ni.getNode();
					if (Ge.is(Mi)) {
						const Ki = Ii.offset;
						((st <= Ki && pt > 0) || (st < Ki && pt < 0)) &&
							Ii.set(ui, Math.max(0, Ki + pt), "element");
					}
					if (Ge.is(Ri)) {
						const Ki = Ni.offset;
						((st <= Ki && pt > 0) || (st < Ki && pt < 0)) &&
							Ni.set(ui, Math.max(0, Ki + pt), "element");
					}
				}
				Ft(Qe);
			}
			function Ft(Qe) {
				const Ge = Qe.anchor,
					st = Ge.offset,
					pt = Qe.focus,
					Ct = pt.offset,
					Pt = Ge.getNode(),
					zt = pt.getNode();
				if (Qe.isCollapsed()) {
					if (!ln(Pt)) return;
					const Qt = Pt.getChildrenSize(),
						ui = st >= Qt,
						vi = ui ? Pt.getChildAtIndex(Qt - 1) : Pt.getChildAtIndex(st);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()),
							Ge.set(vi.__key, Ii, "text"),
							pt.set(vi.__key, Ii, "text");
					}
					return;
				}
				if (ln(Pt)) {
					const Qt = Pt.getChildrenSize(),
						ui = st >= Qt,
						vi = ui ? Pt.getChildAtIndex(Qt - 1) : Pt.getChildAtIndex(st);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()), Ge.set(vi.__key, Ii, "text");
					}
				}
				if (ln(zt)) {
					const Qt = zt.getChildrenSize(),
						ui = Ct >= Qt,
						vi = ui ? zt.getChildAtIndex(Qt - 1) : zt.getChildAtIndex(Ct);
					if (mn(vi)) {
						let Ii = 0;
						ui && (Ii = vi.getTextContentSize()), pt.set(vi.__key, Ii, "text");
					}
				}
			}
			function Xt(Qe, Ge) {
				const pt = Ge.getEditorState()._selection,
					Ct = Qe._selection;
				if (ii(Ct)) {
					const Pt = Ct.anchor,
						zt = Ct.focus;
					let Qt;
					if (
						(Pt.type === "text" &&
							((Qt = Pt.getNode()), Qt.selectionTransform(pt, Ct)),
						zt.type === "text")
					) {
						const ui = zt.getNode();
						Qt !== ui && ui.selectionTransform(pt, Ct);
					}
				}
			}
			function $t(Qe, Ge, st, pt, Ct) {
				let Pt = null,
					zt = 0,
					Qt = null;
				pt !== null
					? ((Pt = pt.__key),
						mn(pt)
							? ((zt = pt.getTextContentSize()), (Qt = "text"))
							: ln(pt) && ((zt = pt.getChildrenSize()), (Qt = "element")))
					: Ct !== null &&
						((Pt = Ct.__key),
						mn(Ct) ? (Qt = "text") : ln(Ct) && (Qt = "element")),
					Pt !== null && Qt !== null
						? Qe.set(Pt, zt, Qt)
						: ((zt = Ge.getIndexWithinParent()),
							zt === -1 && (zt = st.getChildrenSize()),
							Qe.set(st.__key, zt, "element"));
			}
			function ut(Qe, Ge, st, pt, Ct) {
				Qe.type === "text"
					? ((Qe.key = st), Ge || (Qe.offset += Ct))
					: Qe.offset > pt.getIndexWithinParent() && (Qe.offset -= 1);
			}
			function Et(Qe, Ge, st, pt, Ct, Pt, zt) {
				const Qt = pt.anchorNode,
					ui = pt.focusNode,
					vi = pt.anchorOffset,
					Ii = pt.focusOffset,
					Mi = document.activeElement;
				if ((Ct.has("collaboration") && Mi !== Pt) || (Mi !== null && En(Mi)))
					return;
				if (!ii(Ge)) {
					Qe !== null && ns(st, Qt, ui) && pt.removeAllRanges();
					return;
				}
				const Ni = Ge.anchor,
					Ri = Ge.focus,
					Ki = Ni.key,
					ji = Ri.key,
					Xi = As(st, Ki),
					on = As(st, ji),
					Qi = Ni.offset,
					rn = Ri.offset,
					pn = Ge.format,
					bn = Ge.style,
					gn = Ge.isCollapsed();
				let Cn = Xi,
					Tn = on,
					Vn = !1;
				if (Ni.type === "text") {
					Cn = fn(Xi);
					const Zn = Ni.getNode();
					Vn = Zn.getFormat() !== pn || Zn.getStyle() !== bn;
				} else ii(Qe) && Qe.anchor.type === "text" && (Vn = !0);
				if (
					(Ri.type === "text" && (Tn = fn(on)),
					!(Cn === null || Tn === null) &&
						(gn &&
							(Qe === null ||
								Vn ||
								(ii(Qe) && (Qe.format !== pn || Qe.style !== bn))) &&
							_(pn, bn, Qi, Ki, performance.now()),
						!(
							vi === Qi &&
							Ii === rn &&
							Qt === Cn &&
							ui === Tn &&
							!(pt.type === "Range" && gn) &&
							((Mi === null || !Pt.contains(Mi)) &&
								Pt.focus({ preventScroll: !0 }),
							Ni.type !== "element")
						)))
				) {
					try {
						pt.setBaseAndExtent(Cn, Qi, Tn, rn);
					} catch {}
					if (
						!Ct.has("skip-scroll-into-view") &&
						Ge.isCollapsed() &&
						Pt !== null &&
						Pt === document.activeElement
					) {
						const Zn =
							Ge instanceof si && Ge.anchor.type === "element"
								? Cn.childNodes[Qi] || null
								: pt.rangeCount > 0
									? pt.getRangeAt(0)
									: null;
						if (Zn !== null) {
							let On;
							if (Zn instanceof Text) {
								const Kn = document.createRange();
								Kn.selectNode(Zn), (On = Kn.getBoundingClientRect());
							} else On = Zn.getBoundingClientRect();
							Mr(st, On, Pt);
						}
					}
					ee();
				}
			}
			function Tt(Qe, Ge) {
				let st = wi();
				return st === null && (st = Jn().selectEnd()), st.insertNodes(Qe, Ge);
			}
			function qt() {
				const Qe = wi();
				return Qe === null ? "" : Qe.getTextContent();
			}
			function At(Qe, Ge, st) {
				const pt = [];
				let Ct = null,
					Pt = null;
				function zt(vi, Ii, Mi) {
					const Ni = { cell: Mi, startColumn: Ii, startRow: vi },
						Ri = Mi.__rowSpan,
						Ki = Mi.__colSpan;
					for (let ji = 0; ji < Ri; ji++) {
						pt[vi + ji] === void 0 && (pt[vi + ji] = []);
						for (let Xi = 0; Xi < Ki; Xi++) pt[vi + ji][Ii + Xi] = Ni;
					}
					Ge.is(Mi) && (Ct = Ni), st.is(Mi) && (Pt = Ni);
				}
				function Qt(vi, Ii) {
					return pt[vi] === void 0 || pt[vi][Ii] === void 0;
				}
				const ui = Qe.getChildren();
				for (let vi = 0; vi < ui.length; vi++) {
					const Ii = ui[vi];
					(0, w.default)(
						Fr(Ii),
						"Expected GridNode children to be GridRowNode",
					);
					const Mi = Ii.getChildren();
					let Ni = 0;
					for (const Ri of Mi) {
						for (
							(0, w.default)(
								zs(Ri),
								"Expected GridRowNode children to be GridCellNode",
							);
							!Qt(vi, Ni);
						)
							Ni++;
						zt(vi, Ni, Ri), (Ni += Ri.__colSpan);
					}
				}
				return (
					(0, w.default)(Ct !== null, "Anchor not found in Grid"),
					(0, w.default)(Pt !== null, "Focus not found in Grid"),
					[pt, Ct, Pt]
				);
			}
			function Yt(Qe) {
				let Ge;
				if (Qe instanceof vo) Ge = Qe;
				else if (Qe instanceof Ce) {
					const Ct = ur(Qe, zs);
					(0, w.default)(zs(Ct), "Expected to find a parent GridCellNode"),
						(Ge = Ct);
				} else {
					const Ct = ur(Qe.getNode(), zs);
					(0, w.default)(zs(Ct), "Expected to find a parent GridCellNode"),
						(Ge = Ct);
				}
				const st = Ge.getParent();
				(0, w.default)(
					Fr(st),
					"Expected GridCellNode to have a parent GridRowNode",
				);
				const pt = st.getParent();
				return (
					(0, w.default)(
						Kr(pt),
						"Expected GridRowNode to have a parent GridNode",
					),
					[Ge, st, pt]
				);
			}
			let ni = null,
				bi = null,
				fi = !1,
				Ti = !1,
				wt = 0;
			const We = { characterData: !0, childList: !0, subtree: !0 };
			function _e() {
				return fi || (ni !== null && ni._readOnly);
			}
			function Si() {
				fi && (0, w.default)(!1, "Cannot use method in read-only mode.");
			}
			function gi() {
				wt > 99 &&
					(0, w.default)(
						!1,
						"One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.",
					);
			}
			function ki() {
				return (
					ni === null &&
						(0, w.default)(
							!1,
							"Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().",
						),
					ni
				);
			}
			function Pi() {
				return (
					bi === null &&
						(0, w.default)(
							!1,
							"Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().",
						),
					bi
				);
			}
			function Hi() {
				return bi;
			}
			function Ji(Qe, Ge, st) {
				const pt = Ge.__type,
					Ct = js(Qe, pt);
				let Pt = st.get(pt);
				Pt === void 0 && ((Pt = Array.from(Ct.transforms)), st.set(pt, Pt));
				const zt = Pt.length;
				for (let Qt = 0; Qt < zt && (Pt[Qt](Ge), !!Ge.isAttached()); Qt++);
			}
			function cn(Qe, Ge) {
				return Qe !== void 0 && Qe.__key !== Ge && Qe.isAttached();
			}
			function un(Qe, Ge) {
				const st = Ge._dirtyLeaves,
					pt = Qe._nodeMap;
				for (const Ct of st) {
					const Pt = pt.get(Ct);
					mn(Pt) &&
						Pt.isAttached() &&
						Pt.isSimpleText() &&
						!Pt.isUnmergeable() &&
						xe(Pt);
				}
			}
			function yn(Qe, Ge) {
				const st = Ge._dirtyLeaves,
					pt = Ge._dirtyElements,
					Ct = Qe._nodeMap,
					Pt = sn(),
					zt = new Map();
				let Qt = st,
					ui = Qt.size,
					vi = pt,
					Ii = vi.size;
				for (; ui > 0 || Ii > 0; ) {
					if (ui > 0) {
						Ge._dirtyLeaves = new Set();
						for (const Mi of Qt) {
							const Ni = Ct.get(Mi);
							mn(Ni) &&
								Ni.isAttached() &&
								Ni.isSimpleText() &&
								!Ni.isUnmergeable() &&
								xe(Ni),
								Ni !== void 0 && cn(Ni, Pt) && Ji(Ge, Ni, zt),
								st.add(Mi);
						}
						if (((Qt = Ge._dirtyLeaves), (ui = Qt.size), ui > 0)) {
							wt++;
							continue;
						}
					}
					(Ge._dirtyLeaves = new Set()), (Ge._dirtyElements = new Map());
					for (const Mi of vi) {
						const Ni = Mi[0],
							Ri = Mi[1];
						if (Ni !== "root" && !Ri) continue;
						const Ki = Ct.get(Ni);
						Ki !== void 0 && cn(Ki, Pt) && Ji(Ge, Ki, zt), pt.set(Ni, Ri);
					}
					(Qt = Ge._dirtyLeaves),
						(ui = Qt.size),
						(vi = Ge._dirtyElements),
						(Ii = vi.size),
						wt++;
				}
				(Ge._dirtyLeaves = st), (Ge._dirtyElements = pt);
			}
			function Rn(Qe) {
				return _i(Qe, Pi()._nodes);
			}
			function _i(Qe, Ge) {
				const st = Qe.type,
					pt = Ge.get(st);
				pt === void 0 &&
					(0, w.default)(!1, 'parseEditorState: type "%s" + not found', st);
				const Ct = pt.klass;
				Qe.type !== Ct.getType() &&
					(0, w.default)(
						!1,
						"LexicalNode: Node %s does not implement .importJSON().",
						Ct.name,
					);
				const Pt = Ct.importJSON(Qe),
					zt = Qe.children;
				if (ln(Pt) && Array.isArray(zt))
					for (let Qt = 0; Qt < zt.length; Qt++) {
						const ui = zt[Qt],
							vi = _i(ui, Ge);
						Pt.append(vi);
					}
				return Pt;
			}
			function Bn(Qe, Ge, st) {
				const pt = n(),
					Ct = ni,
					Pt = fi,
					zt = bi,
					Qt = Ge._dirtyElements,
					ui = Ge._dirtyLeaves,
					vi = Ge._cloneNotNeeded,
					Ii = Ge._dirtyType;
				(Ge._dirtyElements = new Map()),
					(Ge._dirtyLeaves = new Set()),
					(Ge._cloneNotNeeded = new Set()),
					(Ge._dirtyType = 0),
					(ni = pt),
					(fi = !1),
					(bi = Ge);
				try {
					const Mi = Ge._nodes,
						Ni = Qe.root;
					_i(Ni, Mi), st && st(), (pt._readOnly = !0);
				} catch (Mi) {
					Mi instanceof Error && Ge._onError(Mi);
				} finally {
					(Ge._dirtyElements = Qt),
						(Ge._dirtyLeaves = ui),
						(Ge._cloneNotNeeded = vi),
						(Ge._dirtyType = Ii),
						(ni = Ct),
						(fi = Pt),
						(bi = zt);
				}
				return pt;
			}
			function Mn(Qe, Ge) {
				const st = ni,
					pt = fi,
					Ct = bi;
				(ni = Qe), (fi = !0), (bi = null);
				try {
					return Ge();
				} finally {
					(ni = st), (fi = pt), (bi = Ct);
				}
			}
			function zn(Qe) {
				const Ge = Qe._nodeMap;
				(Ge.set = () => {
					throw new Error("Cannot call set() on a frozen Lexical node map");
				}),
					(Ge.clear = () => {
						throw new Error("Cannot call clear() on a frozen Lexical node map");
					}),
					(Ge.delete = () => {
						throw new Error(
							"Cannot call delete() on a frozen Lexical node map",
						);
					});
			}
			function $n(Qe) {
				const Ge = Qe._pendingEditorState,
					st = Qe._rootElement,
					pt = Qe._headless || st === null;
				if (Ge === null) return;
				const Ct = Qe._editorState,
					Pt = Ct._selection,
					zt = Ge._selection,
					Qt = Qe._dirtyType !== e.NO_DIRTY_NODES,
					ui = ni,
					vi = fi,
					Ii = bi,
					Mi = Qe._updating,
					Ni = Qe._observer;
				let Ri = null;
				if (
					((Qe._pendingEditorState = null),
					(Qe._editorState = Ge),
					!pt && Qt && Ni !== null)
				) {
					(bi = Qe), (ni = Ge), (fi = !1), (Qe._updating = !0);
					try {
						const gn = Qe._dirtyType,
							Cn = Qe._dirtyElements,
							Tn = Qe._dirtyLeaves;
						Ni.disconnect(), (Ri = It(Ct, Ge, Qe, gn, Cn, Tn));
					} catch (gn) {
						if ((gn instanceof Error && Qe._onError(gn), !Ti))
							m(Qe, null, st, Ge),
								ge(Qe),
								(Qe._dirtyType = e.FULL_RECONCILE),
								(Ti = !0),
								$n(Qe),
								(Ti = !1);
						else throw gn;
						return;
					} finally {
						Ni.observe(st, We),
							(Qe._updating = Mi),
							(ni = ui),
							(fi = vi),
							(bi = Ii);
					}
				}
				Ge._readOnly || (Ge._readOnly = !0);
				const Ki = Qe._dirtyLeaves,
					ji = Qe._dirtyElements,
					Xi = Qe._normalizedNodes,
					on = Qe._updateTags,
					Qi = Qe._deferred,
					rn = Ge._nodeMap.size;
				Qt &&
					((Qe._dirtyType = e.NO_DIRTY_NODES),
					Qe._cloneNotNeeded.clear(),
					(Qe._dirtyLeaves = new Set()),
					(Qe._dirtyElements = new Map()),
					(Qe._normalizedNodes = new Set()),
					(Qe._updateTags = new Set())),
					te(Qe, Ge);
				const pn = pt ? null : Ds(Qe._window);
				if (Qe._editable && pn !== null && (Qt || zt === null || zt.dirty)) {
					(bi = Qe), (ni = Ge);
					try {
						if (
							(Ni !== null && Ni.disconnect(), Qt || zt === null || zt.dirty)
						) {
							const gn = Qe._blockCursorElement;
							gn !== null && Nr(gn, Qe, st), Et(Pt, zt, Qe, pn, on, st, rn);
						}
						Fs(Qe, st, zt), Ni !== null && Ni.observe(st, We);
					} finally {
						(bi = Ii), (ni = ui);
					}
				}
				Ri !== null && wn(Qe, Ct, Ge, Ri, on, Ki),
					!ii(zt) &&
						zt !== null &&
						(Pt === null || !Pt.is(zt)) &&
						Qe.dispatchCommand(e.SELECTION_CHANGE_COMMAND, void 0);
				const bn = Qe._pendingDecorators;
				bn !== null &&
					((Qe._decorators = bn),
					(Qe._pendingDecorators = null),
					Hn("decorator", Qe, !0, bn)),
					Ln(Qe, Ct, Ge),
					Hn("update", Qe, !0, {
						dirtyElements: ji,
						dirtyLeaves: Ki,
						editorState: Ge,
						normalizedNodes: Xi,
						prevEditorState: Ct,
						tags: on,
					}),
					Nn(Qe, Qi),
					Es(Qe);
			}
			function Ln(Qe, Ge, st) {
				const pt = es(Ge),
					Ct = es(st);
				pt !== Ct && Hn("textcontent", Qe, !0, Ct);
			}
			function wn(Qe, Ge, st, pt, Ct, Pt) {
				const zt = Array.from(Qe._listeners.mutation),
					Qt = zt.length;
				for (let ui = 0; ui < Qt; ui++) {
					const [vi, Ii] = zt[ui],
						Mi = pt.get(Ii);
					Mi !== void 0 && vi(Mi, { dirtyLeaves: Pt, updateTags: Ct });
				}
			}
			function Hn(Qe, Ge, st, ...pt) {
				const Ct = Ge._updating;
				Ge._updating = st;
				try {
					const Pt = Array.from(Ge._listeners[Qe]);
					for (let zt = 0; zt < Pt.length; zt++) Pt[zt].apply(null, pt);
				} finally {
					Ge._updating = Ct;
				}
			}
			function Yn(Qe, Ge, st) {
				if (Qe._updating === !1 || bi !== Qe) {
					let Ct = !1;
					return (
						Qe.update(() => {
							Ct = Yn(Qe, Ge, st);
						}),
						Ct
					);
				}
				const pt = ir(Qe);
				for (let Ct = 4; Ct >= 0; Ct--)
					for (let Pt = 0; Pt < pt.length; Pt++) {
						const ui = pt[Pt]._commands.get(Ge);
						if (ui !== void 0) {
							const vi = ui[Ct];
							if (vi !== void 0) {
								const Ii = Array.from(vi),
									Mi = Ii.length;
								for (let Ni = 0; Ni < Mi; Ni++)
									if (Ii[Ni](st, Qe) === !0) return !0;
							}
						}
					}
				return !1;
			}
			function Es(Qe) {
				const Ge = Qe._updates;
				if (Ge.length !== 0) {
					const st = Ge.shift();
					if (st) {
						const [pt, Ct] = st;
						Gn(Qe, pt, Ct);
					}
				}
			}
			function Nn(Qe, Ge) {
				if (((Qe._deferred = []), Ge.length !== 0)) {
					const st = Qe._updating;
					Qe._updating = !0;
					try {
						for (let pt = 0; pt < Ge.length; pt++) Ge[pt]();
					} finally {
						Qe._updating = st;
					}
				}
			}
			function Fn(Qe, Ge) {
				const st = Qe._updates;
				let pt = Ge || !1;
				for (; st.length !== 0; ) {
					const Ct = st.shift();
					if (Ct) {
						const [Pt, zt] = Ct;
						let Qt, ui;
						zt !== void 0 &&
							((Qt = zt.onUpdate),
							(ui = zt.tag),
							zt.skipTransforms && (pt = !0),
							Qt && Qe._deferred.push(Qt),
							ui && Qe._updateTags.add(ui)),
							Pt();
					}
				}
				return pt;
			}
			function Gn(Qe, Ge, st) {
				const pt = Qe._updateTags;
				let Ct,
					Pt,
					zt = !1,
					Qt = !1;
				st !== void 0 &&
					((Ct = st.onUpdate),
					(Pt = st.tag),
					Pt != null && pt.add(Pt),
					(zt = st.skipTransforms || !1),
					(Qt = st.discrete || !1)),
					Ct && Qe._deferred.push(Ct);
				const ui = Qe._editorState;
				let vi = Qe._pendingEditorState,
					Ii = !1;
				(vi === null || vi._readOnly) &&
					((vi = Qe._pendingEditorState = c(vi || ui)), (Ii = !0)),
					(vi._flushSync = Qt);
				const Mi = ni,
					Ni = fi,
					Ri = bi,
					Ki = Qe._updating;
				(ni = vi), (fi = !1), (Qe._updating = !0), (bi = Qe);
				try {
					Ii &&
						(Qe._headless
							? ui._selection != null && (vi._selection = ui._selection.clone())
							: (vi._selection = li(Qe)));
					const Xi = Qe._compositionKey;
					Ge(),
						(zt = Fn(Qe, zt)),
						Xt(vi, Qe),
						Qe._dirtyType !== e.NO_DIRTY_NODES &&
							(zt ? un(vi, Qe) : yn(vi, Qe),
							Fn(Qe),
							Z(ui, vi, Qe._dirtyLeaves, Qe._dirtyElements));
					const on = Qe._compositionKey;
					Xi !== on && (vi._flushSync = !0);
					const Qi = vi._selection;
					if (ii(Qi)) {
						const rn = vi._nodeMap,
							pn = Qi.anchor.key,
							bn = Qi.focus.key;
						(rn.get(pn) === void 0 || rn.get(bn) === void 0) &&
							(0, w.default)(
								!1,
								"updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.",
							);
					} else Zt(Qi) && Qi._nodes.size === 0 && (vi._selection = null);
				} catch (Xi) {
					Xi instanceof Error && Qe._onError(Xi),
						(Qe._pendingEditorState = ui),
						(Qe._dirtyType = e.FULL_RECONCILE),
						Qe._cloneNotNeeded.clear(),
						(Qe._dirtyLeaves = new Set()),
						Qe._dirtyElements.clear(),
						$n(Qe);
					return;
				} finally {
					(ni = Mi), (fi = Ni), (bi = Ri), (Qe._updating = Ki), (wt = 0);
				}
				Qe._dirtyType !== e.NO_DIRTY_NODES || h(vi, Qe)
					? vi._flushSync
						? ((vi._flushSync = !1), $n(Qe))
						: Ii &&
							(0, e.scheduleMicroTask)(() => {
								$n(Qe);
							})
					: ((vi._flushSync = !1),
						Ii &&
							(pt.clear(),
							(Qe._deferred = []),
							(Qe._pendingEditorState = null)));
			}
			function Dn(Qe, Ge, st) {
				Qe._updating ? Qe._updates.push([Ge, st]) : Gn(Qe, Ge, st);
			}
			const jn = () => {};
			e.emptyFunction = jn;
			let rs = 1;
			function Js() {
				rs = 1;
			}
			function ts() {
				return "" + rs++;
			}
			function js(Qe, Ge) {
				const st = Qe._nodes.get(Ge);
				return (
					st === void 0 &&
						(0, w.default)(!1, "registeredNode: Type %s not found", Ge),
					st
				);
			}
			(e.isArray = Array.isArray),
				(e.scheduleMicroTask =
					typeof queueMicrotask == "function"
						? queueMicrotask
						: (Qe) => {
								Promise.resolve().then(Qe);
							});
			function os(Qe) {
				return Xn(vn(Qe));
			}
			function En(Qe) {
				const Ge = document.activeElement;
				if (Ge === null) return !1;
				const st = Ge.nodeName;
				return (
					Xn(vn(Qe)) &&
					(st === "INPUT" ||
						st === "TEXTAREA" ||
						(Ge.contentEditable === "true" && Ge.__lexicalEditor == null))
				);
			}
			function ns(Qe, Ge, st) {
				const pt = Qe.getRootElement();
				try {
					return (
						pt !== null &&
						pt.contains(Ge) &&
						pt.contains(st) &&
						Ge !== null &&
						!En(Ge) &&
						Fi(Ge) === Qe
					);
				} catch {
					return !1;
				}
			}
			function Fi(Qe) {
				let Ge = Qe;
				for (; Ge != null; ) {
					const st = Ge.__lexicalEditor;
					if (st != null) return st;
					Ge = Os(Ge);
				}
				return null;
			}
			function zi(Qe) {
				return e.RTL_REGEX.test(Qe)
					? "rtl"
					: e.LTR_REGEX.test(Qe)
						? "ltr"
						: null;
			}
			function Zi(Qe) {
				return Qe.isToken() || Qe.isSegmented();
			}
			function nn(Qe) {
				return Qe.nodeType === e.DOM_TEXT_TYPE;
			}
			function fn(Qe) {
				let Ge = Qe;
				for (; Ge != null; ) {
					if (nn(Ge)) return Ge;
					Ge = Ge.firstChild;
				}
				return null;
			}
			function xn(Qe, Ge, st) {
				const pt = e.TEXT_TYPE_TO_FORMAT[Ge];
				return Qe & pt && (st === null || !(st & pt))
					? Qe ^ pt
					: st === null || st & pt
						? Qe | pt
						: Qe;
			}
			function Sn(Qe) {
				return mn(Qe) || Or(Qe) || Xn(Qe);
			}
			function Un(Qe, Ge) {
				if (Ge != null) {
					Qe.__key = Ge;
					return;
				}
				Si(), gi();
				const st = Pi(),
					pt = ki(),
					Ct = ts();
				pt._nodeMap.set(Ct, Qe),
					ln(Qe) ? st._dirtyElements.set(Ct, !0) : st._dirtyLeaves.add(Ct),
					st._cloneNotNeeded.add(Ct),
					(st._dirtyType = e.HAS_DIRTY_NODES),
					(Qe.__key = Ct);
			}
			function as(Qe, Ge, st) {
				let pt = Qe;
				for (; pt !== null; ) {
					if (st.has(pt)) return;
					const Ct = Ge.get(pt);
					if (Ct === void 0) break;
					st.set(pt, !1), (pt = Ct.__parent);
				}
			}
			function Qn(Qe) {
				const Ge = Qe.getParent();
				if (Ge !== null) {
					const st = Qe.getWritable(),
						pt = Ge.getWritable(),
						Ct = Qe.getPreviousSibling(),
						Pt = Qe.getNextSibling();
					if (Ct === null)
						if (Pt !== null) {
							const zt = Pt.getWritable();
							(pt.__first = Pt.__key), (zt.__prev = null);
						} else pt.__first = null;
					else {
						const zt = Ct.getWritable();
						if (Pt !== null) {
							const Qt = Pt.getWritable();
							(Qt.__prev = zt.__key), (zt.__next = Qt.__key);
						} else zt.__next = null;
						st.__prev = null;
					}
					if (Pt === null)
						if (Ct !== null) {
							const zt = Ct.getWritable();
							(pt.__last = Ct.__key), (zt.__next = null);
						} else pt.__last = null;
					else {
						const zt = Pt.getWritable();
						if (Ct !== null) {
							const Qt = Ct.getWritable();
							(Qt.__next = zt.__key), (zt.__prev = Qt.__key);
						} else zt.__prev = null;
						st.__next = null;
					}
					pt.__size--, (st.__parent = null);
				}
			}
			function $s(Qe) {
				gi();
				const Ge = Qe.getLatest(),
					st = Ge.__parent,
					pt = ki(),
					Ct = Pi(),
					Pt = pt._nodeMap,
					zt = Ct._dirtyElements;
				st !== null && as(st, Pt, zt);
				const Qt = Ge.__key;
				(Ct._dirtyType = e.HAS_DIRTY_NODES),
					ln(Qe) ? zt.set(Qt, !0) : Ct._dirtyLeaves.add(Qt);
			}
			function Us(Qe) {
				const Ge = Qe.getPreviousSibling(),
					st = Qe.getNextSibling();
				Ge !== null && $s(Ge), st !== null && $s(st);
			}
			function _n(Qe) {
				Si();
				const Ge = Pi(),
					st = Ge._compositionKey;
				if (Qe !== st) {
					if (((Ge._compositionKey = Qe), st !== null)) {
						const pt = dn(st);
						pt !== null && pt.getWritable();
					}
					if (Qe !== null) {
						const pt = dn(Qe);
						pt !== null && pt.getWritable();
					}
				}
			}
			function sn() {
				return _e() ? null : Pi()._compositionKey;
			}
			function dn(Qe, Ge) {
				const pt = (Ge || ki())._nodeMap.get(Qe);
				return pt === void 0 ? null : pt;
			}
			function An(Qe, Ge) {
				const st = Pi(),
					pt = Qe[`__lexicalKey_${st._key}`];
				return pt !== void 0 ? dn(pt, Ge) : null;
			}
			function vn(Qe, Ge) {
				let st = Qe;
				for (; st != null; ) {
					const pt = An(st, Ge);
					if (pt !== null) return pt;
					st = Os(st);
				}
				return null;
			}
			function Pn(Qe) {
				const Ge = Qe._decorators,
					st = Object.assign({}, Ge);
				return (Qe._pendingDecorators = st), st;
			}
			function es(Qe) {
				return Qe.read(() => Jn().getTextContent());
			}
			function ls(Qe, Ge) {
				Dn(
					Qe,
					() => {
						const st = ki();
						if (st.isEmpty()) return;
						if (Ge === "root") {
							Jn().markDirty();
							return;
						}
						const pt = st._nodeMap;
						for (const [, Ct] of pt) Ct.markDirty();
					},
					Qe._pendingEditorState === null ? { tag: "history-merge" } : void 0,
				);
			}
			function Jn() {
				return ss(ki());
			}
			function ss(Qe) {
				return Qe._nodeMap.get("root");
			}
			function us(Qe) {
				Si();
				const Ge = ki();
				Qe !== null && ((Qe.dirty = !0), (Qe._cachedNodes = null)),
					(Ge._selection = Qe);
			}
			function Rs() {
				Si();
				const Qe = Pi();
				ve(Qe);
			}
			function Ws(Qe) {
				const Ge = Pi(),
					st = $r(Qe, Ge);
				if (st === null) {
					const pt = Ge.getRootElement();
					return Qe === pt ? dn("root") : null;
				}
				return dn(st);
			}
			function br(Qe, Ge) {
				return Ge ? Qe.getTextContentSize() : 0;
			}
			function $r(Qe, Ge) {
				let st = Qe;
				for (; st != null; ) {
					const pt = st[`__lexicalKey_${Ge._key}`];
					if (pt !== void 0) return pt;
					st = Os(st);
				}
				return null;
			}
			function Xs(Qe) {
				return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(Qe);
			}
			function ir(Qe) {
				const Ge = [];
				let st = Qe;
				for (; st !== null; ) Ge.push(st), (st = st._parentEditor);
				return Ge;
			}
			function nr() {
				return Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, "")
					.substr(0, 5);
			}
			function Ys(Qe) {
				return Qe.nodeType === e.DOM_TEXT_TYPE ? Qe.nodeValue : null;
			}
			function yr(Qe, Ge, st) {
				const pt = Ds(Ge._window);
				if (pt === null) return;
				const Ct = pt.anchorNode;
				let { anchorOffset: Pt, focusOffset: zt } = pt;
				if (Ct !== null) {
					let Qt = Ys(Ct);
					const ui = vn(Ct);
					if (Qt !== null && mn(ui)) {
						if (Qt === e.COMPOSITION_SUFFIX && st) {
							const vi = st.length;
							(Qt = st), (Pt = vi), (zt = vi);
						}
						Qt !== null && Zs(ui, Qt, Pt, zt, Qe);
					}
				}
			}
			function Zs(Qe, Ge, st, pt, Ct) {
				let Pt = Qe;
				if (Pt.isAttached() && (Ct || !Pt.isDirty())) {
					const zt = Pt.isComposing();
					let Qt = Ge;
					(zt || Ct) &&
						Ge[Ge.length - 1] === e.COMPOSITION_SUFFIX &&
						(Qt = Ge.slice(0, -1));
					const ui = Pt.getTextContent();
					if (Ct || Qt !== ui) {
						if (Qt === "") {
							if ((_n(null), !i.IS_SAFARI && !i.IS_IOS && !i.IS_APPLE_WEBKIT)) {
								const ji = Pi();
								setTimeout(() => {
									ji.update(() => {
										Pt.isAttached() && Pt.remove();
									});
								}, 20);
							} else Pt.remove();
							return;
						}
						const vi = Pt.getParent(),
							Ii = _t(),
							Mi = Pt.getTextContentSize(),
							Ni = sn(),
							Ri = Pt.getKey();
						if (
							Pt.isToken() ||
							(Ni !== null && Ri === Ni && !zt) ||
							(ii(Ii) &&
								((vi !== null &&
									!vi.canInsertTextBefore() &&
									Ii.anchor.offset === 0) ||
									(Ii.anchor.key === Qe.__key &&
										Ii.anchor.offset === 0 &&
										!Pt.canInsertTextBefore()) ||
									(Ii.focus.key === Qe.__key &&
										Ii.focus.offset === Mi &&
										!Pt.canInsertTextAfter())))
						) {
							Pt.markDirty();
							return;
						}
						const Ki = wi();
						if (!ii(Ki) || st === null || pt === null) {
							Pt.setTextContent(Qt);
							return;
						}
						if ((Ki.setTextNodeRange(Pt, st, Pt, pt), Pt.isSegmented())) {
							const ji = Pt.getTextContent(),
								Xi = cs(ji);
							Pt.replace(Xi), (Pt = Xi);
						}
						Pt.setTextContent(Qt);
					}
				}
			}
			function wr(Qe) {
				const Ge = Qe.getPreviousSibling();
				return (
					(mn(Ge) || (ln(Ge) && Ge.isInline())) && !Ge.canInsertTextAfter()
				);
			}
			function vr(Qe, Ge) {
				if (Ge.isSegmented()) return !0;
				if (!Qe.isCollapsed()) return !1;
				const st = Qe.anchor.offset,
					pt = Ge.getParentOrThrow(),
					Ct = Ge.isToken();
				return st === 0
					? !Ge.canInsertTextBefore() ||
							!pt.canInsertTextBefore() ||
							Ct ||
							wr(Ge)
					: st === Ge.getTextContentSize()
						? !Ge.canInsertTextAfter() || !pt.canInsertTextAfter() || Ct
						: !1;
			}
			function Cr(Qe, Ge, st, pt) {
				return Qe === 9 && !Ge && !st && !pt;
			}
			function sr(Qe, Ge, st, pt) {
				return Qe === 66 && !Ge && ks(st, pt);
			}
			function Io(Qe, Ge, st, pt) {
				return Qe === 73 && !Ge && ks(st, pt);
			}
			function Sr(Qe, Ge, st, pt) {
				return Qe === 85 && !Ge && ks(st, pt);
			}
			function Xr(Qe, Ge) {
				return cr(Qe) && !Ge;
			}
			function Qs(Qe, Ge) {
				return cr(Qe) && Ge;
			}
			function qs(Qe, Ge) {
				return i.IS_APPLE && Ge && Qe === 79;
			}
			function xr(Qe, Ge, st) {
				return ds(Qe) && (i.IS_APPLE ? Ge : st);
			}
			function Yr(Qe, Ge, st) {
				return is(Qe) && (i.IS_APPLE ? Ge : st);
			}
			function zr(Qe, Ge) {
				return i.IS_APPLE && Ge && ds(Qe);
			}
			function Er(Qe, Ge) {
				return i.IS_APPLE && Ge && is(Qe);
			}
			function Zr(Qe, Ge, st, pt) {
				return i.IS_APPLE
					? Ge || st
						? !1
						: ds(Qe) || (Qe === 72 && pt)
					: pt || Ge || st
						? !1
						: ds(Qe);
			}
			function uo(Qe, Ge, st, pt, Ct) {
				return i.IS_APPLE
					? st || pt || Ct
						? !1
						: is(Qe) || (Qe === 68 && Ge)
					: Ge || pt || Ct
						? !1
						: is(Qe);
			}
			function Ir(Qe, Ge, st, pt) {
				return Qe === 90 && !Ge && ks(st, pt);
			}
			function jr(Qe, Ge, st, pt) {
				return i.IS_APPLE
					? Qe === 90 && st && Ge
					: (Qe === 89 && pt) || (Qe === 90 && pt && Ge);
			}
			function Is(Qe, Ge, st, pt) {
				return Ge ? !1 : Qe === 67 ? (i.IS_APPLE ? st : pt) : !1;
			}
			function Ur(Qe, Ge, st, pt) {
				return Ge ? !1 : Qe === 88 ? (i.IS_APPLE ? st : pt) : !1;
			}
			function rr(Qe) {
				return Qe === 37;
			}
			function Vs(Qe) {
				return Qe === 39;
			}
			function or(Qe) {
				return Qe === 38;
			}
			function Hs(Qe) {
				return Qe === 40;
			}
			function ar(Qe, Ge, st, pt) {
				return rr(Qe) && !Ge && !pt && !st;
			}
			function Tr(Qe, Ge, st, pt, Ct) {
				return rr(Qe) && !pt && !st && (Ge || Ct);
			}
			function ws(Qe, Ge, st, pt) {
				return Vs(Qe) && !Ge && !pt && !st;
			}
			function Pr(Qe, Ge, st, pt, Ct) {
				return Vs(Qe) && !pt && !st && (Ge || Ct);
			}
			function Ci(Qe, Ge, st) {
				return or(Qe) && !Ge && !st;
			}
			function vs(Qe, Ge, st) {
				return Hs(Qe) && !Ge && !st;
			}
			function Ts(Qe, Ge, st, pt) {
				return Qe || Ge || st || pt;
			}
			function kr(Qe) {
				return Qe === 32;
			}
			function ks(Qe, Ge) {
				return i.IS_APPLE ? Qe : Ge;
			}
			function cr(Qe) {
				return Qe === 13;
			}
			function ds(Qe) {
				return Qe === 8;
			}
			function Lr(Qe) {
				return Qe === 27;
			}
			function is(Qe) {
				return Qe === 46;
			}
			function Wr(Qe, Ge, st) {
				return Qe === 65 && ks(Ge, st);
			}
			function hs(Qe, Ge) {
				const st = Qe[Ge];
				if (typeof st == "string") {
					const pt = st.split(" ");
					return (Qe[Ge] = pt), pt;
				}
				return st;
			}
			function _s(Qe, Ge, st, pt, Ct) {
				if (st.size === 0) return;
				const Pt = pt.__type,
					zt = pt.__key,
					Qt = Ge.get(Pt);
				Qt === void 0 &&
					(0, w.default)(!1, "Type %s not in registeredNodes", Pt);
				const ui = Qt.klass;
				let vi = Qe.get(ui);
				vi === void 0 && ((vi = new Map()), Qe.set(ui, vi));
				const Ii = vi.get(zt),
					Mi = Ii === "destroyed" && Ct === "created";
				(Ii === void 0 || Mi) && vi.set(zt, Mi ? "updated" : Ct);
			}
			function Qr(Qe) {
				const Ge = ki(),
					st = Ge._readOnly,
					pt = Qe.getType(),
					Ct = Ge._nodeMap,
					Pt = [];
				for (const [, zt] of Ct)
					zt instanceof Qe &&
						zt.__type === pt &&
						(st || zt.isAttached()) &&
						Pt.push(zt);
				return Pt;
			}
			function Dr(Qe, Ge, st) {
				const pt = Qe.getParent();
				let Ct = st,
					Pt = Qe;
				return (
					pt !== null &&
						(Ge && st === 0
							? ((Ct = Pt.getIndexWithinParent()), (Pt = pt))
							: !Ge &&
								st === Pt.getChildrenSize() &&
								((Ct = Pt.getIndexWithinParent() + 1), (Pt = pt))),
					Pt.getChildAtIndex(Ge ? Ct - 1 : Ct)
				);
			}
			function Cs(Qe, Ge) {
				const st = Qe.offset;
				if (Qe.type === "element") {
					const pt = Qe.getNode();
					return Dr(pt, Ge, st);
				} else {
					const pt = Qe.getNode();
					if ((Ge && st === 0) || (!Ge && st === pt.getTextContentSize())) {
						const Ct = Ge ? pt.getPreviousSibling() : pt.getNextSibling();
						return Ct === null
							? Dr(
									pt.getParentOrThrow(),
									Ge,
									pt.getIndexWithinParent() + (Ge ? 0 : 1),
								)
							: Ct;
					}
				}
				return null;
			}
			function lr(Qe) {
				const Ge = hn(Qe).event,
					st = Ge && Ge.inputType;
				return st === "insertFromPaste" || st === "insertFromPasteAsQuotation";
			}
			function en(Qe, Ge, st) {
				return Yn(Qe, Ge, st);
			}
			function Ks(Qe) {
				return !it(Qe) && !Qe.isLastChild() && !Qe.isInline();
			}
			function As(Qe, Ge) {
				const st = Qe._keyToDOMMap.get(Ge);
				return (
					st === void 0 &&
						(0, w.default)(
							!1,
							"Reconciliation: could not find DOM element for node key %s",
							Ge,
						),
					st
				);
			}
			function Os(Qe) {
				const Ge = Qe.assignedSlot || Qe.parentElement;
				return Ge !== null && Ge.nodeType === 11 ? Ge.host : Ge;
			}
			function Mr(Qe, Ge, st) {
				const pt = (0, E.$Ngb)(),
					Ct = pt.defaultView;
				if (Ct === null) return;
				let { top: Pt, bottom: zt } = Ge,
					Qt = 0,
					ui = 0,
					vi = st;
				for (; vi !== null; ) {
					const Ii = vi === pt.body;
					if (Ii) (Qt = 0), (ui = hn(Qe).innerHeight);
					else {
						const Ni = vi.getBoundingClientRect();
						(Qt = Ni.top), (ui = Ni.bottom);
					}
					let Mi = 0;
					if (
						(Pt < Qt ? (Mi = -(Qt - Pt)) : zt > ui && (Mi = zt - ui), Mi !== 0)
					)
						if (Ii) Ct.scrollBy(0, Mi);
						else {
							const Ni = vi.scrollTop;
							vi.scrollTop += Mi;
							const Ri = vi.scrollTop - Ni;
							(Pt -= Ri), (zt -= Ri);
						}
					if (Ii) break;
					vi = Os(vi);
				}
			}
			function St(Qe) {
				return Pi()._updateTags.has(Qe);
			}
			function vt(Qe) {
				Si(), Pi()._updateTags.add(Qe);
			}
			function oi(Qe, Ge = 0) {
				Ge !== 0 && (0, w.default)(!1, "TODO");
				const st = wi();
				if (!ii(st) || !ln(Qe)) return st;
				const { anchor: pt, focus: Ct } = st,
					Pt = pt.getNode(),
					zt = Ct.getNode();
				return (
					Ei(Pt, Qe) && pt.set(Qe.__key, 0, "element"),
					Ei(zt, Qe) && Ct.set(Qe.__key, 0, "element"),
					st
				);
			}
			function Ei(Qe, Ge) {
				let st = Qe.getParent();
				for (; st !== null; ) {
					if (st.is(Ge)) return !0;
					st = st.getParent();
				}
				return !1;
			}
			function tn(Qe) {
				const Ge = (0, E.$Ngb)();
				return (Ge && Ge.defaultView) || null;
			}
			function hn(Qe) {
				const Ge = Qe._window;
				return Ge === null && (0, w.default)(!1, "window object not found"), Ge;
			}
			function In(Qe) {
				return (ln(Qe) && Qe.isInline()) || (Xn(Qe) && Qe.isInline());
			}
			function kn(Qe) {
				let Ge = Qe.getParentOrThrow();
				for (; Ge !== null; ) {
					if (Wn(Ge)) return Ge;
					Ge = Ge.getParentOrThrow();
				}
				return Ge;
			}
			function Wn(Qe) {
				return it(Qe) || (ln(Qe) && Qe.isShadowRoot());
			}
			function ys(Qe) {
				const Ge = Qe.constructor.clone(Qe);
				return Un(Ge, null), Ge;
			}
			function fs(Qe) {
				const Ge = Pi(),
					st = Qe.constructor.getType(),
					pt = Ge._nodes.get(st);
				pt === void 0 &&
					(0, w.default)(
						!1,
						'$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.',
					);
				const Ct = pt.replace;
				if (Ct !== null) {
					const Pt = Ct(Qe);
					return (
						Pt instanceof Qe.constructor ||
							(0, w.default)(
								!1,
								"$initializeNode failed. Ensure replacement node is a subclass of the original node.",
							),
						Pt
					);
				}
				return Qe;
			}
			function bs(Qe, Ge) {
				const st = Qe.getParent();
				it(st) &&
					!ln(Ge) &&
					!Xn(Ge) &&
					(0, w.default)(
						!1,
						"Only element or decorator nodes can be inserted in to the root node",
					);
			}
			function Ls(Qe) {
				const Ge = dn(Qe);
				return (
					Ge === null &&
						(0, w.default)(
							!1,
							"Expected node with key %s to exist but it's not in the nodeMap.",
							Qe,
						),
					Ge
				);
			}
			function Gs(Qe) {
				const Ge = Qe.theme,
					st = C.$Bfb.document.createElement("div");
				(st.contentEditable = "false"),
					st.setAttribute("data-lexical-cursor", "true");
				let pt = Ge.blockCursor;
				if (pt !== void 0) {
					if (typeof pt == "string") {
						const Ct = pt.split(" ");
						pt = Ge.blockCursor = Ct;
					}
					pt !== void 0 && st.classList.add(...pt);
				}
				return st;
			}
			function er(Qe) {
				return (Xn(Qe) || (ln(Qe) && !Qe.canBeEmpty())) && !Qe.isInline();
			}
			function Nr(Qe, Ge, st) {
				st.style.removeProperty("caret-color"), (Ge._blockCursorElement = null);
				const pt = Qe.parentElement;
				pt !== null && pt.removeChild(Qe);
			}
			function Fs(Qe, Ge, st) {
				let pt = Qe._blockCursorElement;
				if (
					ii(st) &&
					st.isCollapsed() &&
					st.anchor.type === "element" &&
					Ge.contains(document.activeElement)
				) {
					const Ct = st.anchor,
						Pt = Ct.getNode(),
						zt = Ct.offset,
						Qt = Pt.getChildrenSize();
					let ui = !1,
						vi = null;
					if (zt === Qt) {
						const Ii = Pt.getChildAtIndex(zt - 1);
						er(Ii) && (ui = !0);
					} else {
						const Ii = Pt.getChildAtIndex(zt);
						if (er(Ii)) {
							const Mi = Ii.getPreviousSibling();
							(Mi === null || er(Mi)) &&
								((ui = !0), (vi = Qe.getElementByKey(Ii.__key)));
						}
					}
					if (ui) {
						const Ii = Qe.getElementByKey(Pt.__key);
						pt === null && (Qe._blockCursorElement = pt = Gs(Qe._config)),
							(Ge.style.caretColor = "transparent"),
							vi === null ? Ii.appendChild(pt) : Ii.insertBefore(pt, vi);
						return;
					}
				}
				pt !== null && Nr(pt, Qe, Ge);
			}
			function Ds(Qe) {
				return t.CAN_USE_DOM ? (Qe || window).getSelection() : null;
			}
			function _r(Qe, Ge) {
				let st = Qe.getChildAtIndex(Ge);
				st == null && (st = Qe),
					(0, w.default)(!Wn(Qe), "Can not call $splitNode() on root element");
				const pt = (zt) => {
						const Qt = zt.getParentOrThrow(),
							ui = Wn(Qt),
							vi = zt === st && !ui ? zt : ys(zt);
						if (ui) return zt.insertAfter(vi), [zt, vi, vi];
						{
							const [Ii, Mi, Ni] = pt(Qt),
								Ri = zt.getNextSiblings();
							return Ni.append(vi, ...Ri), [Ii, Mi, vi];
						}
					},
					[Ct, Pt] = pt(st);
				return [Ct, Pt];
			}
			function ur(Qe, Ge) {
				let st = Qe;
				for (; st !== Jn() && st != null; ) {
					if (Ge(st)) return st;
					st = st.getParent();
				}
				return null;
			}
			function eo(Qe) {
				const Ge = [],
					st = [Qe];
				for (; st.length > 0; ) {
					const pt = st.pop();
					(0, w.default)(pt !== void 0, "Stack.length > 0; can't be undefined"),
						ln(pt) && st.unshift(...pt.getChildren()),
						pt !== Qe && Ge.push(pt);
				}
				return Ge;
			}
			function an(Qe) {
				return {};
			}
			(e.SELECTION_CHANGE_COMMAND = an("SELECTION_CHANGE_COMMAND")),
				(e.CLICK_COMMAND = an("CLICK_COMMAND")),
				(e.DELETE_CHARACTER_COMMAND = an("DELETE_CHARACTER_COMMAND")),
				(e.INSERT_LINE_BREAK_COMMAND = an("INSERT_LINE_BREAK_COMMAND")),
				(e.INSERT_PARAGRAPH_COMMAND = an("INSERT_PARAGRAPH_COMMAND")),
				(e.CONTROLLED_TEXT_INSERTION_COMMAND = an(
					"CONTROLLED_TEXT_INSERTION_COMMAND",
				)),
				(e.PASTE_COMMAND = an("PASTE_COMMAND")),
				(e.REMOVE_TEXT_COMMAND = an("REMOVE_TEXT_COMMAND")),
				(e.DELETE_WORD_COMMAND = an("DELETE_WORD_COMMAND")),
				(e.DELETE_LINE_COMMAND = an("DELETE_LINE_COMMAND")),
				(e.FORMAT_TEXT_COMMAND = an("FORMAT_TEXT_COMMAND")),
				(e.UNDO_COMMAND = an("UNDO_COMMAND")),
				(e.REDO_COMMAND = an("REDO_COMMAND")),
				(e.KEY_DOWN_COMMAND = an("KEYDOWN_COMMAND")),
				(e.KEY_ARROW_RIGHT_COMMAND = an("KEY_ARROW_RIGHT_COMMAND")),
				(e.MOVE_TO_END = an("MOVE_TO_END")),
				(e.KEY_ARROW_LEFT_COMMAND = an("KEY_ARROW_LEFT_COMMAND")),
				(e.MOVE_TO_START = an("MOVE_TO_START")),
				(e.KEY_ARROW_UP_COMMAND = an("KEY_ARROW_UP_COMMAND")),
				(e.KEY_ARROW_DOWN_COMMAND = an("KEY_ARROW_DOWN_COMMAND")),
				(e.KEY_COMMAND_ARROW_DOWN_COMMAND = an(
					"KEY_COMMAND_ARROW_DOWN_COMMAND",
				)),
				(e.KEY_COMMAND_ARROW_UP_COMMAND = an("KEY_COMMAND_ARROW_UP_COMMAND")),
				(e.KEY_COMMAND_ARROW_LEFT_COMMAND = an(
					"KEY_COMMAND_ARROW_LEFT_COMMAND",
				)),
				(e.KEY_COMMAND_ARROW_RIGHT_COMMAND = an(
					"KEY_COMMAND_ARROW_RIGHT_COMMAND",
				)),
				(e.KEY_ENTER_COMMAND = an("KEY_ENTER_COMMAND")),
				(e.KEY_SPACE_COMMAND = an("KEY_SPACE_COMMAND")),
				(e.KEY_BACKSPACE_COMMAND = an("KEY_BACKSPACE_COMMAND")),
				(e.KEY_ESCAPE_COMMAND = an("KEY_ESCAPE_COMMAND")),
				(e.KEY_DELETE_COMMAND = an("KEY_DELETE_COMMAND")),
				(e.KEY_ALT_ARROW_UP_COMMAND = an("KEY_ALT_ARROW_UP_COMMAND")),
				(e.KEY_ALT_ARROW_DOWN_COMMAND = an("KEY_ALT_ARROW_DOWN_COMMAND")),
				(e.KEY_COMMAND_ENTER_COMMAND = an("KEY_COMMAND_ENTER_COMMAND")),
				(e.KEY_COMMAND_ABORT_COMMAND = an("KEY_COMMAND_ABORT_COMMAND")),
				(e.KEY_COMMAND_K_COMMAND = an("KEY_COMMAND_K_COMMAND")),
				(e.KEY_COMMAND_Y_COMMAND = an("KEY_COMMAND_Y_COMMAND")),
				(e.KEY_COMMAND_D_COMMAND = an("KEY_COMMAND_D_COMMAND")),
				(e.KEY_COMMAND_E_COMMAND = an("KEY_COMMAND_E_COMMAND")),
				(e.KEY_MAC_CTRL_C_COMMAND = an("KEY_COMMAND_C_COMMAND")),
				(e.KEY_COMMAND_H_COMMAND = an("KEY_COMMAND_H_COMMAND")),
				(e.KEY_COMMAND_1_COMMAND = an("KEY_COMMAND_1_COMMAND")),
				(e.KEY_COMMAND_2_COMMAND = an("KEY_COMMAND_2_COMMAND")),
				(e.KEY_COMMAND_3_COMMAND = an("KEY_COMMAND_3_COMMAND")),
				(e.KEY_COMMAND_4_COMMAND = an("KEY_COMMAND_4_COMMAND")),
				(e.KEY_COMMAND_5_COMMAND = an("KEY_COMMAND_5_COMMAND")),
				(e.KEY_COMMAND_6_COMMAND = an("KEY_COMMAND_6_COMMAND")),
				(e.KEY_COMMAND_7_COMMAND = an("KEY_COMMAND_7_COMMAND")),
				(e.KEY_COMMAND_8_COMMAND = an("KEY_COMMAND_8_COMMAND")),
				(e.KEY_COMMAND_9_COMMAND = an("KEY_COMMAND_9_COMMAND")),
				(e.KEY_COMMAND_0_COMMAND = an("KEY_COMMAND_0_COMMAND")),
				(e.KEY_COMMAND_SHIFT_K_COMMAND = an("KEY_COMMAND_SHIFT_K_COMMAND")),
				(e.KEY_COMMAND_SHIFT_D_COMMAND = an("KEY_COMMAND_SHIFT_D_COMMAND")),
				(e.KEY_COMMAND_SHIFT_S_COMMAND = an("KEY_COMMAND_SHIFT_S_COMMAND")),
				(e.KEY_COMMAND_S_COMMAND = an("KEY_COMMAND_S_COMMAND")),
				(e.KEY_COMMAND_J_COMMAND = an("KEY_COMMAND_J_COMMAND")),
				(e.KEY_COMMAND_Y_OR_CNTRL_SHIFT_Y_COMMAND = an(
					"KEY_COMMAND_Y_COMMAND",
				)),
				(e.KEY_COMMAND_U_COMMAND = an("KEY_COMMAND_U_COMMAND")),
				(e.KEY_COMMAND_I_COMMAND = an("KEY_COMMAND_I_COMMAND")),
				(e.KEY_COMMAND_L_COMMAND = an("KEY_COMMAND_L_COMMAND")),
				(e.KEY_COMMAND_Z_COMMAND = an("KEY_COMMAND_Z_COMMAND")),
				(e.KEY_COMMAND_T_COMMAND = an("KEY_COMMAND_T_COMMAND")),
				(e.KEY_COMMAND_P_COMMAND = an("KEY_COMMAND_P_COMMAND")),
				(e.KEY_COMMAND_B_COMMAND = an("KEY_COMMAND_B_COMMAND")),
				(e.KEY_COMMAND_A_COMMAND = an("KEY_COMMAND_A_COMMAND")),
				(e.KEY_COMMAND_SHIFT_Z_COMMAND = an("KEY_COMMAND_SHIFT_Z_COMMAND")),
				(e.KEY_COMMAND_N_COMMAND = an("KEY_COMMAND_N_COMMAND")),
				(e.KEY_COMMAND_M_COMMAND = an("KEY_COMMAND_M_COMMAND")),
				(e.KEY_COMMAND_G_COMMAND = an("KEY_COMMAND_G_COMMAND")),
				(e.KEY_COMMAND_W_COMMAND = an("KEY_COMMAND_W_COMMAND")),
				(e.KEY_COMMAND_R_COMMAND = an("KEY_COMMAND_R_COMMAND")),
				(e.KEY_COMMAND_V_COMMAND = an("KEY_COMMAND_V_COMMAND")),
				(e.KEY_COMMAND_SLASH_COMMAND = an("KEY_COMMAND_SLASH_COMMAND")),
				(e.KEY_COMMAND_DOT_COMMAND = an("KEY_COMMAND_DOT_COMMAND")),
				(e.KEY_COMMAND_SHIFT_SLASH_COMMAND = an(
					"KEY_COMMAND_SHIFT_SLASH_COMMAND",
				)),
				(e.KEY_BACKSPACE_DELETE_COMMAND = an("KEY_BACKSPACE_DELETE_COMMAND")),
				(e.KEY_COMMAND_LEFT_BRACKET_COMMAND = an(
					"KEY_COMMAND_LEFT_BRACKET_COMMAND",
				)),
				(e.KEY_COMMAND_RIGHT_BRACKET_COMMAND = an(
					"KEY_COMMAND_RIGHT_BRACKET_COMMAND",
				)),
				(e.KEY_TAB_COMMAND = an("KEY_TAB_COMMAND")),
				(e.KEY_ALT_COMMAND = an("KEY_ALT_COMMAND")),
				(e.KEY_ALT_UP_COMMAND = an("KEY_ALT_UP_COMMAND")),
				(e.KEY_COMMAND_COMMAND = an("KEY_COMMAND_COMMAND")),
				(e.KEY_COMMAND_UP_COMMAND = an("KEY_COMMAND_UP_COMMAND")),
				(e.KEY_ALT_1_COMMAND = an("KEY_ALT_1_COMMAND")),
				(e.KEY_ALT_2_COMMAND = an("KEY_ALT_2_COMMAND")),
				(e.KEY_ALT_3_COMMAND = an("KEY_ALT_3_COMMAND")),
				(e.KEY_ALT_4_COMMAND = an("KEY_ALT_4_COMMAND")),
				(e.KEY_ALT_5_COMMAND = an("KEY_ALT_5_COMMAND")),
				(e.KEY_COMMAND_ESCAPE_COMMAND = an("KEY_COMMAND_ESCAPE_COMMAND")),
				(e.KEY_SHIFT_DOWN_COMMAND = an("KEY_SHIFT_DOWN_COMMAND")),
				(e.KEY_SHIFT_UP_COMMAND = an("KEY_SHIFT_UP_COMMAND")),
				(e.INSERT_TAB_COMMAND = an("INSERT_TAB_COMMAND")),
				(e.INDENT_CONTENT_COMMAND = an("INDENT_CONTENT_COMMAND")),
				(e.OUTDENT_CONTENT_COMMAND = an("OUTDENT_CONTENT_COMMAND")),
				(e.DROP_COMMAND = an("DROP_COMMAND")),
				(e.FORMAT_ELEMENT_COMMAND = an("FORMAT_ELEMENT_COMMAND")),
				(e.DRAGSTART_COMMAND = an("DRAGSTART_COMMAND")),
				(e.DRAGOVER_COMMAND = an("DRAGOVER_COMMAND")),
				(e.DRAGEND_COMMAND = an("DRAGEND_COMMAND")),
				(e.COPY_COMMAND = an("COPY_COMMAND")),
				(e.CUT_COMMAND = an("CUT_COMMAND")),
				(e.CLEAR_EDITOR_COMMAND = an("CLEAR_EDITOR_COMMAND")),
				(e.CLEAR_HISTORY_COMMAND = an("CLEAR_HISTORY_COMMAND")),
				(e.CAN_REDO_COMMAND = an("CAN_REDO_COMMAND")),
				(e.CAN_UNDO_COMMAND = an("CAN_UNDO_COMMAND")),
				(e.FOCUS_COMMAND = an("FOCUS_COMMAND")),
				(e.BLUR_COMMAND = an("BLUR_COMMAND")),
				(e.KEY_MODIFIER_COMMAND = an("KEY_MODIFIER_COMMAND")),
				(e.DOM_ELEMENT_TYPE = 1),
				(e.DOM_TEXT_TYPE = 3),
				(e.NO_DIRTY_NODES = 0),
				(e.HAS_DIRTY_NODES = 1),
				(e.FULL_RECONCILE = 2),
				(e.IS_NORMAL = 0),
				(e.IS_TOKEN = 1),
				(e.IS_SEGMENTED = 2),
				(e.IS_BOLD = 1),
				(e.IS_ITALIC = 2),
				(e.IS_STRIKETHROUGH = 4),
				(e.IS_UNDERLINE = 8),
				(e.IS_CODE = 16),
				(e.IS_SUBSCRIPT = 32),
				(e.IS_SUPERSCRIPT = 64),
				(e.IS_HIGHLIGHT = 128),
				(e.IS_ALL_FORMATTING =
					e.IS_BOLD |
					e.IS_ITALIC |
					e.IS_STRIKETHROUGH |
					e.IS_UNDERLINE |
					e.IS_CODE |
					e.IS_SUBSCRIPT |
					e.IS_SUPERSCRIPT |
					e.IS_HIGHLIGHT),
				(e.IS_DIRECTIONLESS = 1),
				(e.IS_UNMERGEABLE = 2),
				(e.IS_ALIGN_LEFT = 1),
				(e.IS_ALIGN_CENTER = 2),
				(e.IS_ALIGN_RIGHT = 3),
				(e.IS_ALIGN_JUSTIFY = 4),
				(e.IS_ALIGN_START = 5),
				(e.IS_ALIGN_END = 6),
				(e.NON_BREAKING_SPACE = "\xA0");
			const ho = "\u200B";
			(e.COMPOSITION_SUFFIX =
				i.IS_SAFARI || i.IS_IOS || i.IS_APPLE_WEBKIT
					? e.NON_BREAKING_SPACE
					: ho),
				(e.DOUBLE_LINE_BREAK = `

`),
				(e.COMPOSITION_START_CHAR = i.IS_FIREFOX
					? e.NON_BREAKING_SPACE
					: e.COMPOSITION_SUFFIX);
			const fo = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
				To =
					"A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
			(e.RTL_REGEX = new RegExp("^[^" + To + "]*[" + fo + "]")),
				(e.LTR_REGEX = new RegExp("^[^" + fo + "]*[" + To + "]")),
				(e.TEXT_TYPE_TO_FORMAT = {
					bold: e.IS_BOLD,
					code: e.IS_CODE,
					highlight: e.IS_HIGHLIGHT,
					italic: e.IS_ITALIC,
					strikethrough: e.IS_STRIKETHROUGH,
					subscript: e.IS_SUBSCRIPT,
					superscript: e.IS_SUPERSCRIPT,
					underline: e.IS_UNDERLINE,
				}),
				(e.DETAIL_TYPE_TO_DETAIL = {
					directionless: e.IS_DIRECTIONLESS,
					unmergeable: e.IS_UNMERGEABLE,
				}),
				(e.ELEMENT_TYPE_TO_FORMAT = {
					center: e.IS_ALIGN_CENTER,
					end: e.IS_ALIGN_END,
					justify: e.IS_ALIGN_JUSTIFY,
					left: e.IS_ALIGN_LEFT,
					right: e.IS_ALIGN_RIGHT,
					start: e.IS_ALIGN_START,
				}),
				(e.ELEMENT_FORMAT_TO_TYPE = {
					[e.IS_ALIGN_CENTER]: "center",
					[e.IS_ALIGN_END]: "end",
					[e.IS_ALIGN_JUSTIFY]: "justify",
					[e.IS_ALIGN_LEFT]: "left",
					[e.IS_ALIGN_RIGHT]: "right",
					[e.IS_ALIGN_START]: "start",
				}),
				(e.TEXT_MODE_TO_TYPE = {
					normal: e.IS_NORMAL,
					segmented: e.IS_SEGMENTED,
					token: e.IS_TOKEN,
				}),
				(e.TEXT_TYPE_TO_MODE = {
					[e.IS_NORMAL]: "normal",
					[e.IS_SEGMENTED]: "segmented",
					[e.IS_TOKEN]: "token",
				});
			function qr(Qe, Ge) {
				return Ge & e.IS_CODE
					? "code"
					: Ge & e.IS_HIGHLIGHT
						? "mark"
						: Ge & e.IS_SUBSCRIPT
							? "sub"
							: Ge & e.IS_SUPERSCRIPT
								? "sup"
								: null;
			}
			function Rr(Qe, Ge) {
				return Ge & e.IS_BOLD ? "strong" : Ge & e.IS_ITALIC ? "em" : "span";
			}
			function go(Qe, Ge, st, pt, Ct) {
				const Pt = pt.classList;
				let zt = hs(Ct, "base");
				zt !== void 0 && Pt.add(...zt), (zt = hs(Ct, "underlineStrikethrough"));
				let Qt = !1;
				const ui = Ge & e.IS_UNDERLINE && Ge & e.IS_STRIKETHROUGH,
					vi = st & e.IS_UNDERLINE && st & e.IS_STRIKETHROUGH;
				zt !== void 0 &&
					(vi ? ((Qt = !0), ui || Pt.add(...zt)) : ui && Pt.remove(...zt));
				for (const Ii in e.TEXT_TYPE_TO_FORMAT) {
					const Mi = Ii,
						Ni = e.TEXT_TYPE_TO_FORMAT[Mi];
					if (((zt = hs(Ct, Ii)), zt !== void 0))
						if (st & Ni) {
							if (Qt && (Ii === "underline" || Ii === "strikethrough")) {
								Ge & Ni && Pt.remove(...zt);
								continue;
							}
							(!(Ge & Ni) ||
								(ui && Ii === "underline") ||
								Ii === "strikethrough") &&
								Pt.add(...zt);
						} else Ge & Ni && Pt.remove(...zt);
				}
			}
			function Bs(Qe, Ge) {
				const st = Qe.length,
					pt = Ge.length;
				let Ct = 0,
					Pt = 0;
				for (; Ct < st && Ct < pt && Qe[Ct] === Ge[Ct]; ) Ct++;
				for (
					;
					Pt + Ct < st && Pt + Ct < pt && Qe[st - Pt - 1] === Ge[pt - Pt - 1];
				)
					Pt++;
				return [Ct, st - Ct - Pt, Ge.slice(Ct, pt - Pt)];
			}
			function to(Qe, Ge, st) {
				const pt = Ge.firstChild,
					Ct = st.isComposing(),
					Pt = Ct ? e.COMPOSITION_SUFFIX : "",
					zt = Qe + Pt;
				if (pt == null) Ge.textContent = zt;
				else {
					const Qt = pt.nodeValue;
					if (Qt !== zt)
						if (Ct || i.IS_FIREFOX) {
							const [ui, vi, Ii] = Bs(Qt, zt);
							vi !== 0 && pt.deleteData(ui, vi), pt.insertData(ui, Ii);
						} else pt.nodeValue = zt;
				}
			}
			function io(Qe, Ge, st, pt, Ct, Pt) {
				to(Ct, Qe, Ge);
				const Qt = Pt.theme.text;
				Qt !== void 0 && go(st, 0, pt, Qe, Qt);
			}
			function Vr(Qe, Ge) {
				const st = C.$Bfb.document.createElement(Ge);
				return st.appendChild(Qe), st;
			}
			class dr extends Ce {
				static getType() {
					return "text";
				}
				static clone(Ge) {
					return new dr(Ge.__text, Ge.__key);
				}
				constructor(Ge, st) {
					super(st),
						(this.__text = Ge),
						(this.__format = 0),
						(this.__style = ""),
						(this.__mode = 0),
						(this.__detail = 0);
				}
				getFormat() {
					return this.getLatest().__format;
				}
				getDetail() {
					return this.getLatest().__detail;
				}
				getMode() {
					const Ge = this.getLatest();
					return e.TEXT_TYPE_TO_MODE[Ge.__mode];
				}
				getStyle() {
					return this.getLatest().__style;
				}
				isToken() {
					return this.getLatest().__mode === e.IS_TOKEN;
				}
				isComposing() {
					return this.__key === sn();
				}
				isSegmented() {
					return this.getLatest().__mode === e.IS_SEGMENTED;
				}
				isDirectionless() {
					return (this.getLatest().__detail & e.IS_DIRECTIONLESS) !== 0;
				}
				isUnmergeable() {
					return (this.getLatest().__detail & e.IS_UNMERGEABLE) !== 0;
				}
				hasFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return (this.getFormat() & st) !== 0;
				}
				isSimpleText() {
					return this.__type === "text" && this.__mode === 0;
				}
				getTextContent() {
					return this.getLatest().__text;
				}
				getFormatFlags(Ge, st) {
					const Ct = this.getLatest().__format;
					return xn(Ct, Ge, st);
				}
				createDOM(Ge) {
					const st = this.__format,
						pt = qr(this, st),
						Ct = Rr(this, st),
						Pt = pt === null ? Ct : pt,
						zt = C.$Bfb.document.createElement(Pt);
					let Qt = zt;
					pt !== null &&
						((Qt = C.$Bfb.document.createElement(Ct)), zt.appendChild(Qt));
					const ui = this.__text;
					io(Qt, this, Ct, st, ui, Ge);
					const vi = this.__style;
					return vi !== "" && (zt.style.cssText = vi), zt;
				}
				updateDOM(Ge, st, pt) {
					const Ct = this.__text,
						Pt = Ge.__format,
						zt = this.__format,
						Qt = qr(this, Pt),
						ui = qr(this, zt),
						vi = Rr(this, Pt),
						Ii = Rr(this, zt);
					if ((Qt === null ? vi : Qt) !== (ui === null ? Ii : ui)) return !0;
					if (Qt === ui && vi !== Ii) {
						const Qi = st.firstChild;
						Qi == null &&
							(0, w.default)(
								!1,
								"updateDOM: prevInnerDOM is null or undefined",
							);
						const rn = C.$Bfb.document.createElement(Ii);
						return io(rn, this, Ii, zt, Ct, pt), st.replaceChild(rn, Qi), !1;
					}
					let Ri = st;
					ui !== null &&
						Qt !== null &&
						((Ri = st.firstChild),
						Ri == null &&
							(0, w.default)(!1, "updateDOM: innerDOM is null or undefined")),
						to(Ct, Ri, this);
					const ji = pt.theme.text;
					ji !== void 0 && Pt !== zt && go(Ii, Pt, zt, Ri, ji);
					const Xi = Ge.__style,
						on = this.__style;
					return Xi !== on && (st.style.cssText = on), !1;
				}
				static importDOM() {
					return {
						"#text": () => ({ conversion: bo, priority: 0 }),
						b: () => ({ conversion: no, priority: 0 }),
						code: () => ({ conversion: Ps, priority: 0 }),
						em: () => ({ conversion: Ps, priority: 0 }),
						i: () => ({ conversion: Ps, priority: 0 }),
						s: () => ({ conversion: Ps, priority: 0 }),
						span: () => ({ conversion: Po, priority: 0 }),
						strong: () => ({ conversion: Ps, priority: 0 }),
						sub: () => ({ conversion: Ps, priority: 0 }),
						sup: () => ({ conversion: Ps, priority: 0 }),
						u: () => ({ conversion: Ps, priority: 0 }),
					};
				}
				static importJSON(Ge) {
					const st = cs(Ge.text);
					return (
						st.setFormat(Ge.format),
						st.setDetail(Ge.detail),
						st.setMode(Ge.mode),
						st.setStyle(Ge.style),
						st
					);
				}
				exportDOM(Ge) {
					let { element: st } = super.exportDOM(Ge);
					return (
						st !== null &&
							(this.hasFormat("bold") && (st = Vr(st, "b")),
							this.hasFormat("italic") && (st = Vr(st, "i")),
							this.hasFormat("strikethrough") && (st = Vr(st, "s")),
							this.hasFormat("underline") && (st = Vr(st, "u"))),
						{ element: st }
					);
				}
				exportJSON() {
					return {
						detail: this.getDetail(),
						format: this.getFormat(),
						mode: this.getMode(),
						style: this.getStyle(),
						text: this.getTextContent(),
						type: "text",
						version: 1,
					};
				}
				selectionTransform(Ge, st) {}
				setFormat(Ge) {
					const st = this.getWritable();
					return (
						(st.__format =
							typeof Ge == "string" ? e.TEXT_TYPE_TO_FORMAT[Ge] : Ge),
						st
					);
				}
				setDetail(Ge) {
					const st = this.getWritable();
					return (
						(st.__detail =
							typeof Ge == "string" ? e.DETAIL_TYPE_TO_DETAIL[Ge] : Ge),
						st
					);
				}
				setStyle(Ge) {
					const st = this.getWritable();
					return (st.__style = Ge), st;
				}
				toggleFormat(Ge) {
					const st = e.TEXT_TYPE_TO_FORMAT[Ge];
					return this.setFormat(this.getFormat() ^ st);
				}
				toggleDirectionless() {
					const Ge = this.getWritable();
					return (Ge.__detail ^= e.IS_DIRECTIONLESS), Ge;
				}
				toggleUnmergeable() {
					const Ge = this.getWritable();
					return (Ge.__detail ^= e.IS_UNMERGEABLE), Ge;
				}
				setMode(Ge) {
					const st = e.TEXT_MODE_TO_TYPE[Ge];
					if (this.__mode === st) return this;
					const pt = this.getWritable();
					return (pt.__mode = st), pt;
				}
				setTextContent(Ge) {
					if (this.__text === Ge) return this;
					const st = this.getWritable();
					return (st.__text = Ge), st;
				}
				select(Ge, st) {
					Si();
					let pt = Ge,
						Ct = st;
					const Pt = wi(),
						zt = this.getTextContent(),
						Qt = this.__key;
					if (typeof zt == "string") {
						const ui = zt.length;
						pt === void 0 && (pt = ui), Ct === void 0 && (Ct = ui);
					} else (pt = 0), (Ct = 0);
					if (ii(Pt)) {
						const ui = sn();
						(ui === Pt.anchor.key || ui === Pt.focus.key) && _n(Qt),
							Pt.setTextNodeRange(this, pt, this, Ct);
					} else return qi(Qt, pt, Qt, Ct, "text", "text");
					return Pt;
				}
				spliceText(Ge, st, pt, Ct) {
					const Pt = this.getWritable(),
						zt = Pt.__text,
						Qt = pt.length;
					let ui = Ge;
					ui < 0 && ((ui = Qt + ui), ui < 0 && (ui = 0));
					const vi = wi();
					if (Ct && ii(vi)) {
						const Mi = Ge + Qt;
						vi.setTextNodeRange(Pt, Mi, Pt, Mi);
					}
					const Ii = zt.slice(0, ui) + pt + zt.slice(ui + st);
					return (Pt.__text = Ii), Pt;
				}
				canInsertTextBefore() {
					return !0;
				}
				canInsertTextAfter() {
					return !0;
				}
				splitText(...Ge) {
					Si();
					const st = this.getLatest(),
						pt = st.getTextContent(),
						Ct = st.__key,
						Pt = sn(),
						zt = new Set(Ge),
						Qt = [],
						ui = pt.length;
					let vi = "";
					for (let Cn = 0; Cn < ui; Cn++)
						vi !== "" && zt.has(Cn) && (Qt.push(vi), (vi = "")), (vi += pt[Cn]);
					vi !== "" && Qt.push(vi);
					const Ii = Qt.length;
					if (Ii === 0) return [];
					if (Qt[0] === pt) return [st];
					const Mi = Qt[0],
						Ni = st.getParentOrThrow();
					let Ri;
					const Ki = st.getFormat(),
						ji = st.getStyle(),
						Xi = st.__detail;
					let on = !1;
					st.isSegmented()
						? ((Ri = cs(Mi)),
							(Ri.__format = Ki),
							(Ri.__style = ji),
							(Ri.__detail = Xi),
							(on = !0))
						: ((Ri = st.getWritable()), (Ri.__text = Mi));
					const Qi = wi(),
						rn = [Ri];
					let pn = Mi.length;
					for (let Cn = 1; Cn < Ii; Cn++) {
						const Tn = Qt[Cn],
							Vn = Tn.length,
							Zn = cs(Tn).getWritable();
						(Zn.__format = Ki), (Zn.__style = ji), (Zn.__detail = Xi);
						const On = Zn.__key,
							Kn = pn + Vn;
						if (ii(Qi)) {
							const Ss = Qi.anchor,
								gs = Qi.focus;
							Ss.key === Ct &&
								Ss.type === "text" &&
								Ss.offset > pn &&
								Ss.offset <= Kn &&
								((Ss.key = On), (Ss.offset -= pn), (Qi.dirty = !0)),
								gs.key === Ct &&
									gs.type === "text" &&
									gs.offset > pn &&
									gs.offset <= Kn &&
									((gs.key = On), (gs.offset -= pn), (Qi.dirty = !0));
						}
						Pt === Ct && _n(On), (pn = Kn), rn.push(Zn);
					}
					Us(this);
					const bn = Ni.getWritable(),
						gn = this.getIndexWithinParent();
					return (
						on ? (bn.splice(gn, 0, rn), this.remove()) : bn.splice(gn, 1, rn),
						ii(Qi) && ai(Qi, Ni, gn, Ii - 1),
						rn
					);
				}
				mergeWithSibling(Ge) {
					const st = Ge === this.getPreviousSibling();
					!st &&
						Ge !== this.getNextSibling() &&
						(0, w.default)(
							!1,
							"mergeWithSibling: sibling must be a previous or next sibling",
						);
					const pt = this.__key,
						Ct = Ge.__key,
						Pt = this.__text,
						zt = Pt.length;
					sn() === Ct && _n(pt);
					const ui = wi();
					if (ii(ui)) {
						const Ni = ui.anchor,
							Ri = ui.focus;
						Ni !== null &&
							Ni.key === Ct &&
							(ut(Ni, st, pt, Ge, zt), (ui.dirty = !0)),
							Ri !== null &&
								Ri.key === Ct &&
								(ut(Ri, st, pt, Ge, zt), (ui.dirty = !0));
					}
					const vi = Ge.__text,
						Ii = st ? vi + Pt : Pt + vi;
					this.setTextContent(Ii);
					const Mi = this.getWritable();
					return Ge.remove(), Mi;
				}
				isTextEntity() {
					return !1;
				}
			}
			e.TextNode = dr;
			function Po(Qe) {
				const Ge = Qe,
					st = Ge.style.fontWeight === "700",
					pt = Ge.style.textDecoration === "line-through",
					Ct = Ge.style.fontStyle === "italic",
					Pt = Ge.style.textDecoration === "underline",
					zt = Ge.style.verticalAlign;
				return {
					forChild: (Qt) => (
						mn(Qt) &&
							(st && Qt.toggleFormat("bold"),
							pt && Qt.toggleFormat("strikethrough"),
							Ct && Qt.toggleFormat("italic"),
							Pt && Qt.toggleFormat("underline"),
							zt === "sub" && Qt.toggleFormat("subscript"),
							zt === "super" && Qt.toggleFormat("superscript")),
						Qt
					),
					node: null,
				};
			}
			function no(Qe) {
				const st = Qe.style.fontWeight === "normal";
				return {
					forChild: (pt) => (mn(pt) && !st && pt.toggleFormat("bold"), pt),
					node: null,
				};
			}
			const mo = new WeakMap();
			function po(Qe) {
				return (
					Qe.nodeName === "PRE" ||
					(Qe.nodeType === e.DOM_ELEMENT_TYPE &&
						Qe.style.whiteSpace.startsWith("pre"))
				);
			}
			function so(Qe) {
				let Ge,
					st = Qe.parentNode;
				const pt = [Qe];
				for (; st !== null && (Ge = mo.get(st)) === void 0 && !po(st); )
					pt.push(st), (st = st.parentNode);
				const Ct = Ge === void 0 ? st : Ge;
				for (let Pt = 0; Pt < pt.length; Pt++) mo.set(pt[Pt], Ct);
				return Ct;
			}
			function bo(Qe) {
				const Ge = Qe,
					st = Qe.parentElement;
				(0, w.default)(
					st !== null,
					"Expected parentElement of Text not to be null",
				);
				let pt = Ge.textContent || "";
				if (so(Ge) !== null) {
					const Ct = pt.split(/(\r?\n|\t)/),
						Pt = [],
						zt = Ct.length;
					for (let Qt = 0; Qt < zt; Qt++) {
						const ui = Ct[Qt];
						ui ===
							`
` ||
						ui ===
							`\r
`
							? Pt.push(gr())
							: ui === "	"
								? Pt.push(Ar())
								: ui !== "" && Pt.push(cs(ui));
					}
					return { node: Pt };
				}
				if (
					((pt = pt
						.replace(/\r?\n|\t/gm, " ")
						.replace("\r", "")
						.replace(/\s+/g, " ")),
					pt === "")
				)
					return { node: null };
				if (pt[0] === " ") {
					let Ct = Ge,
						Pt = !0;
					for (; Ct !== null && (Ct = $o(Ct, !1)) !== null; ) {
						const zt = Ct.textContent || "";
						if (zt.length > 0) {
							zt.match(/(?:\s|\r?\n|\t)$/) && (pt = pt.slice(1)), (Pt = !1);
							break;
						}
					}
					Pt && (pt = pt.slice(1));
				}
				if (pt[pt.length - 1] === " ") {
					let Ct = Ge,
						Pt = !0;
					for (; Ct !== null && (Ct = $o(Ct, !0)) !== null; )
						if (
							(Ct.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length > 0
						) {
							Pt = !1;
							break;
						}
					Pt && (pt = pt.slice(0, pt.length - 1));
				}
				return pt === "" ? { node: null } : { node: cs(pt) };
			}
			const ko = new RegExp(
				/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/,
				"i",
			);
			function $o(Qe, Ge) {
				let st = Qe;
				for (;;) {
					let pt;
					for (; (pt = Ge ? st.nextSibling : st.previousSibling) === null; ) {
						const Pt = st.parentElement;
						if (Pt === null) return null;
						st = Pt;
					}
					if (((st = pt), st.nodeType === e.DOM_ELEMENT_TYPE)) {
						const Pt = st.style.display;
						if (
							(Pt === "" && st.nodeName.match(ko) === null) ||
							(Pt !== "" && !Pt.startsWith("inline"))
						)
							return null;
					}
					let Ct = st;
					for (; (Ct = Ge ? st.firstChild : st.lastChild) !== null; ) st = Ct;
					if (st.nodeType === e.DOM_TEXT_TYPE) return st;
					if (st.nodeName === "BR") return null;
				}
			}
			const yo = {
				code: "code",
				em: "italic",
				i: "italic",
				s: "strikethrough",
				strong: "bold",
				sub: "subscript",
				sup: "superscript",
				u: "underline",
			};
			function Ps(Qe) {
				const Ge = yo[Qe.nodeName.toLowerCase()];
				return Ge === void 0
					? { node: null }
					: {
							forChild: (st) => (
								mn(st) && !st.hasFormat(Ge) && st.toggleFormat(Ge), st
							),
							node: null,
						};
			}
			function cs(Qe = "") {
				return fs(new dr(Qe));
			}
			function mn(Qe) {
				return Qe instanceof dr;
			}
			class hr extends dr {
				static getType() {
					return "tab";
				}
				static clone(Ge) {
					const st = new hr(Ge.__key);
					return (
						(st.__text = Ge.__text),
						(st.__format = Ge.__format),
						(st.__style = Ge.__style),
						st
					);
				}
				constructor(Ge) {
					super("	", Ge), (this.__detail = e.IS_UNMERGEABLE);
				}
				static importDOM() {
					return null;
				}
				static importJSON(Ge) {
					const st = Ar();
					return st.setFormat(Ge.format), st.setStyle(Ge.style), st;
				}
				exportJSON() {
					return { ...super.exportJSON(), type: "tab", version: 1 };
				}
				setTextContent(Ge) {
					(0, w.default)(!1, "TabNode does not support setTextContent");
				}
				setDetail(Ge) {
					(0, w.default)(!1, "TabNode does not support setDetail");
				}
				setMode(Ge) {
					(0, w.default)(!1, "TabNode does not support setMode");
				}
				canInsertTextBefore() {
					return !1;
				}
				canInsertTextAfter() {
					return !1;
				}
			}
			e.TabNode = hr;
			function Ar() {
				return fs(new hr());
			}
			function wo(Qe) {
				return Qe instanceof hr;
			}
			class tr extends Ce {
				constructor(Ge) {
					super(Ge),
						(this.__first = null),
						(this.__last = null),
						(this.__size = 0),
						(this.__format = 0),
						(this.__indent = 0),
						(this.__dir = null);
				}
				getFormat() {
					return this.getLatest().__format;
				}
				getFormatType() {
					const Ge = this.getFormat();
					return e.ELEMENT_FORMAT_TO_TYPE[Ge] || "";
				}
				getIndent() {
					return this.getLatest().__indent;
				}
				getChildren() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) Ge.push(st), (st = st.getNextSibling());
					return Ge;
				}
				getChildrenKeys() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) Ge.push(st.__key), (st = st.getNextSibling());
					return Ge;
				}
				getChildrenSize() {
					return this.getLatest().__size;
				}
				isEmpty() {
					return this.getChildrenSize() === 0;
				}
				isDirty() {
					const st = Pi()._dirtyElements;
					return st !== null && st.has(this.__key);
				}
				isLastChild() {
					const Ge = this.getLatest(),
						st = this.getParentOrThrow().getLastChild();
					return st !== null && st.is(Ge);
				}
				getAllTextNodes() {
					const Ge = [];
					let st = this.getFirstChild();
					for (; st !== null; ) {
						if ((mn(st) && Ge.push(st), ln(st))) {
							const pt = st.getAllTextNodes();
							Ge.push(...pt);
						}
						st = st.getNextSibling();
					}
					return Ge;
				}
				getFirstDescendant() {
					let Ge = this.getFirstChild();
					for (; Ge !== null; ) {
						if (ln(Ge)) {
							const st = Ge.getFirstChild();
							if (st !== null) {
								Ge = st;
								continue;
							}
						}
						break;
					}
					return Ge;
				}
				getLastDescendant() {
					let Ge = this.getLastChild();
					for (; Ge !== null; ) {
						if (ln(Ge)) {
							const st = Ge.getLastChild();
							if (st !== null) {
								Ge = st;
								continue;
							}
						}
						break;
					}
					return Ge;
				}
				getDescendantByIndex(Ge) {
					const st = this.getChildren(),
						pt = st.length;
					if (Ge >= pt) {
						const Pt = st[pt - 1];
						return (ln(Pt) && Pt.getLastDescendant()) || Pt || null;
					}
					const Ct = st[Ge];
					return (ln(Ct) && Ct.getFirstDescendant()) || Ct || null;
				}
				getFirstChild() {
					const st = this.getLatest().__first;
					return st === null ? null : dn(st);
				}
				getFirstChildOrThrow() {
					const Ge = this.getFirstChild();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a first child.",
								this.__key,
							),
						Ge
					);
				}
				getLastChild() {
					const st = this.getLatest().__last;
					return st === null ? null : dn(st);
				}
				getLastChildOrThrow() {
					const Ge = this.getLastChild();
					return (
						Ge === null &&
							(0, w.default)(
								!1,
								"Expected node %s to have a last child.",
								this.__key,
							),
						Ge
					);
				}
				getChildAtIndex(Ge) {
					const st = this.getChildrenSize();
					let pt, Ct;
					if (Ge < st / 2) {
						for (pt = this.getFirstChild(), Ct = 0; pt !== null && Ct <= Ge; ) {
							if (Ct === Ge) return pt;
							(pt = pt.getNextSibling()), Ct++;
						}
						return null;
					}
					for (
						pt = this.getLastChild(), Ct = st - 1;
						pt !== null && Ct >= Ge;
					) {
						if (Ct === Ge) return pt;
						(pt = pt.getPreviousSibling()), Ct--;
					}
					return null;
				}
				getTextContent() {
					let Ge = "";
					const st = this.getChildren(),
						pt = st.length;
					for (let Ct = 0; Ct < pt; Ct++) {
						const Pt = st[Ct];
						(Ge += Pt.getTextContent()),
							ln(Pt) &&
								Ct !== pt - 1 &&
								!Pt.isInline() &&
								(Ge += e.DOUBLE_LINE_BREAK);
					}
					return Ge;
				}
				getTextContentSize() {
					let Ge = 0;
					const st = this.getChildren(),
						pt = st.length;
					for (let Ct = 0; Ct < pt; Ct++) {
						const Pt = st[Ct];
						(Ge += Pt.getTextContentSize()),
							ln(Pt) &&
								Ct !== pt - 1 &&
								!Pt.isInline() &&
								(Ge += e.DOUBLE_LINE_BREAK.length);
					}
					return Ge;
				}
				getDirection() {
					return this.getLatest().__dir;
				}
				hasFormat(Ge) {
					if (Ge !== "") {
						const st = e.ELEMENT_TYPE_TO_FORMAT[Ge];
						return (this.getFormat() & st) !== 0;
					}
					return !1;
				}
				select(Ge, st) {
					Si();
					const pt = wi();
					let Ct = Ge,
						Pt = st;
					const zt = this.getChildrenSize();
					if (!this.canBeEmpty()) {
						if (Ge === 0 && st === 0) {
							const ui = this.getFirstChild();
							if (mn(ui) || ln(ui)) return ui.select(0, 0);
						} else if (
							(Ge === void 0 || Ge === zt) &&
							(st === void 0 || st === zt)
						) {
							const ui = this.getLastChild();
							if (mn(ui) || ln(ui)) return ui.select();
						}
					}
					Ct === void 0 && (Ct = zt), Pt === void 0 && (Pt = zt);
					const Qt = this.__key;
					if (ii(pt))
						pt.anchor.set(Qt, Ct, "element"),
							pt.focus.set(Qt, Pt, "element"),
							(pt.dirty = !0);
					else return qi(Qt, Ct, Qt, Pt, "element", "element");
					return pt;
				}
				selectStart() {
					const Ge = this.getFirstDescendant();
					return ln(Ge) || mn(Ge)
						? Ge.select(0, 0)
						: Ge !== null
							? Ge.selectPrevious()
							: this.select(0, 0);
				}
				selectEnd() {
					const Ge = this.getLastDescendant();
					return ln(Ge) || mn(Ge)
						? Ge.select()
						: Ge !== null
							? Ge.selectNext()
							: this.select();
				}
				clear() {
					const Ge = this.getWritable();
					return this.getChildren().forEach((pt) => pt.remove()), Ge;
				}
				append(...Ge) {
					return this.splice(this.getChildrenSize(), 0, Ge);
				}
				setDirection(Ge) {
					const st = this.getWritable();
					return (st.__dir = Ge), st;
				}
				setFormat(Ge) {
					const st = this.getWritable();
					return (
						(st.__format = Ge !== "" ? e.ELEMENT_TYPE_TO_FORMAT[Ge] : 0), this
					);
				}
				setIndent(Ge) {
					const st = this.getWritable();
					return (st.__indent = Ge), this;
				}
				splice(Ge, st, pt) {
					const Ct = pt.length,
						Pt = this.getChildrenSize(),
						zt = this.getWritable(),
						Qt = zt.__key,
						ui = [],
						vi = [],
						Ii = this.getChildAtIndex(Ge + st);
					let Mi = null,
						Ni = Pt - st + Ct;
					if (Ge !== 0)
						if (Ge === Pt) Mi = this.getLastChild();
						else {
							const Ki = this.getChildAtIndex(Ge);
							Ki !== null && (Mi = Ki.getPreviousSibling());
						}
					if (st > 0) {
						let Ki = Mi === null ? this.getFirstChild() : Mi.getNextSibling();
						for (let ji = 0; ji < st; ji++) {
							Ki === null && (0, w.default)(!1, "splice: sibling not found");
							const Xi = Ki.getNextSibling(),
								on = Ki.__key,
								Qi = Ki.getWritable();
							Qn(Qi), vi.push(on), (Ki = Xi);
						}
					}
					let Ri = Mi;
					for (let Ki = 0; Ki < Ct; Ki++) {
						const ji = pt[Ki];
						Ri !== null && ji.is(Ri) && (Mi = Ri = Ri.getPreviousSibling());
						const Xi = ji.getWritable();
						Xi.__parent === Qt && Ni--, Qn(Xi);
						const on = ji.__key;
						if (Ri === null) (zt.__first = on), (Xi.__prev = null);
						else {
							const Qi = Ri.getWritable();
							(Qi.__next = on), (Xi.__prev = Qi.__key);
						}
						ji.__key === Qt &&
							(0, w.default)(!1, "append: attempting to append self"),
							(Xi.__parent = Qt),
							ui.push(on),
							(Ri = ji);
					}
					if (Ge + st === Pt) {
						if (Ri !== null) {
							const Ki = Ri.getWritable();
							(Ki.__next = null), (zt.__last = Ri.__key);
						}
					} else if (Ii !== null) {
						const Ki = Ii.getWritable();
						if (Ri !== null) {
							const ji = Ri.getWritable();
							(Ki.__prev = Ri.__key), (ji.__next = Ii.__key);
						} else Ki.__prev = null;
					}
					if (((zt.__size = Ni), vi.length)) {
						const Ki = wi();
						if (ii(Ki)) {
							const ji = new Set(vi),
								Xi = new Set(ui),
								{ anchor: on, focus: Qi } = Ki;
							fr(on, ji, Xi) && $t(on, on.getNode(), this, Mi, Ii),
								fr(Qi, ji, Xi) && $t(Qi, Qi.getNode(), this, Mi, Ii),
								Ni === 0 && !this.canBeEmpty() && !Wn(this) && this.remove();
						}
					}
					return zt;
				}
				exportJSON() {
					return {
						children: [],
						direction: this.getDirection(),
						format: this.getFormatType(),
						indent: this.getIndent(),
						type: "element",
						version: 1,
					};
				}
				insertNewAfter(Ge, st) {
					return null;
				}
				canIndent() {
					return !0;
				}
				collapseAtStart(Ge) {
					return !1;
				}
				excludeFromCopy(Ge) {
					return !1;
				}
				canExtractContents() {
					return !0;
				}
				canReplaceWith(Ge) {
					return !0;
				}
				canInsertAfter(Ge) {
					return !0;
				}
				canBeEmpty() {
					return !0;
				}
				canInsertTextBefore() {
					return !0;
				}
				canInsertTextAfter() {
					return !0;
				}
				isInline() {
					return !1;
				}
				isShadowRoot() {
					return !1;
				}
				canMergeWith(Ge) {
					return !1;
				}
				extractWithChild(Ge, st, pt) {
					return !1;
				}
			}
			e.ElementNode = tr;
			function ln(Qe) {
				return Qe instanceof tr;
			}
			function fr(Qe, Ge, st) {
				let pt = Qe.getNode();
				for (; pt; ) {
					const Ct = pt.__key;
					if (Ge.has(Ct) && !st.has(Ct)) return !0;
					pt = pt.getParent();
				}
				return !1;
			}
			class xs extends Ce {
				static getType() {
					return "linebreak";
				}
				static clone(Ge) {
					return new xs(Ge.__key);
				}
				constructor(Ge) {
					super(Ge);
				}
				getTextContent() {
					return `
`;
				}
				createDOM() {
					return C.$Bfb.document.createElement("br");
				}
				updateDOM() {
					return !1;
				}
				static importDOM() {
					return {
						br: (Ge) => {
							const st = Ge.parentElement;
							let pt, Ct;
							return st !== null &&
								((pt = st.firstChild) === Ge ||
									(pt.nextSibling === Ge &&
										pt.nodeType === e.DOM_TEXT_TYPE &&
										(pt.textContent || "").match(/^[\s|\r?\n|\t]+$/) !==
											null)) &&
								((Ct = st.lastChild) === Ge ||
									(Ct.previousSibling === Ge &&
										Ct.nodeType === e.DOM_TEXT_TYPE &&
										(Ct.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null))
								? null
								: { conversion: ro, priority: 0 };
						},
					};
				}
				static importJSON(Ge) {
					return gr();
				}
				exportJSON() {
					return { type: "linebreak", version: 1 };
				}
			}
			e.LineBreakNode = xs;
			function ro(Qe) {
				return { node: gr() };
			}
			function gr() {
				return fs(new xs());
			}
			function Or(Qe) {
				return Qe instanceof xs;
			}
			class Hr extends tr {}
			e.DEPRECATED_GridRowNode = Hr;
			function Fr(Qe) {
				return Qe instanceof Hr;
			}
			class vo extends tr {
				constructor(Ge, st) {
					super(st), (this.__colSpan = Ge), (this.__rowSpan = 1);
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						colSpan: this.__colSpan,
						rowSpan: this.__rowSpan,
					};
				}
				getColSpan() {
					return this.__colSpan;
				}
				setColSpan(Ge) {
					return (this.getWritable().__colSpan = Ge), this;
				}
				getRowSpan() {
					return this.__rowSpan;
				}
				setRowSpan(Ge) {
					return (this.getWritable().__rowSpan = Ge), this;
				}
			}
			e.DEPRECATED_GridCellNode = vo;
			function zs(Qe) {
				return Qe instanceof vo;
			}
			class Co extends tr {}
			e.DEPRECATED_GridNode = Co;
			function Kr(Qe) {
				return Qe instanceof Co;
			}
			class Lo extends Ce {
				constructor(Ge) {
					super(Ge);
				}
				decorate(Ge, st) {
					(0, w.default)(!1, "decorate: base method not extended");
				}
				isIsolated() {
					return !1;
				}
				isInline() {
					return !0;
				}
				isKeyboardSelectable() {
					return !0;
				}
			}
			e.DecoratorNode = Lo;
			function Xn(Qe) {
				return Qe instanceof Lo;
			}
			class Br extends tr {
				static getType() {
					return "root";
				}
				static clone() {
					return new Br();
				}
				constructor() {
					super("root"), (this.__cachedText = null);
				}
				getTopLevelElementOrThrow() {
					(0, w.default)(
						!1,
						"getTopLevelElementOrThrow: root nodes are not top level elements",
					);
				}
				getTextContent() {
					const Ge = this.__cachedText;
					return (_e() || Pi()._dirtyType === e.NO_DIRTY_NODES) && Ge !== null
						? Ge
						: super.getTextContent();
				}
				remove() {
					(0, w.default)(!1, "remove: cannot be called on root nodes");
				}
				replace(Ge) {
					(0, w.default)(!1, "replace: cannot be called on root nodes");
				}
				insertBefore(Ge) {
					(0, w.default)(!1, "insertBefore: cannot be called on root nodes");
				}
				insertAfter(Ge) {
					(0, w.default)(!1, "insertAfter: cannot be called on root nodes");
				}
				updateDOM(Ge, st) {
					return !1;
				}
				append(...Ge) {
					for (let st = 0; st < Ge.length; st++) {
						const pt = Ge[st];
						!ln(pt) &&
							!Xn(pt) &&
							(0, w.default)(
								!1,
								"rootNode.append: Only element or decorator nodes can be appended to the root node",
							);
					}
					return super.append(...Ge);
				}
				static importJSON(Ge) {
					const st = Jn();
					return (
						st.setFormat(Ge.format),
						st.setIndent(Ge.indent),
						st.setDirection(Ge.direction),
						st
					);
				}
				exportJSON() {
					return {
						children: [],
						direction: this.getDirection(),
						format: this.getFormatType(),
						indent: this.getIndent(),
						type: "root",
						version: 1,
					};
				}
				collapseAtStart() {
					return !0;
				}
			}
			e.RootNode = Br;
			function Ht() {
				return new Br();
			}
			function it(Qe) {
				return Qe instanceof Br;
			}
			class ot extends tr {
				static getType() {
					return "paragraph";
				}
				static clone(Ge) {
					return new ot(Ge.__key);
				}
				createDOM(Ge) {
					const st = C.$Bfb.document.createElement("p"),
						pt = hs(Ge.theme, "paragraph");
					return pt !== void 0 && st.classList.add(...pt), st;
				}
				updateDOM(Ge, st, pt) {
					return !1;
				}
				static importDOM() {
					return { p: (Ge) => ({ conversion: dt, priority: 0 }) };
				}
				exportDOM(Ge) {
					const { element: st } = super.exportDOM(Ge);
					if (
						(st &&
							this.isEmpty() &&
							st.append(C.$Bfb.document.createElement("br")),
						st)
					) {
						const pt = this.getFormatType();
						st.style.textAlign = pt;
						const Ct = this.getDirection();
						Ct && (st.dir = Ct);
						const Pt = this.getIndent();
						Pt > 0 && (st.style.textIndent = `${Pt * 20}px`);
					}
					return { element: st };
				}
				static importJSON(Ge) {
					const st = yt();
					return (
						st.setFormat(Ge.format),
						st.setIndent(Ge.indent),
						st.setDirection(Ge.direction),
						st
					);
				}
				exportJSON() {
					return { ...super.exportJSON(), type: "paragraph", version: 1 };
				}
				insertNewAfter(Ge, st) {
					const pt = yt(),
						Ct = this.getDirection();
					return pt.setDirection(Ct), this.insertAfter(pt, st), pt;
				}
				collapseAtStart() {
					const Ge = this.getChildren();
					if (
						Ge.length === 0 ||
						(mn(Ge[0]) && Ge[0].getTextContent().trim() === "")
					) {
						if (this.getNextSibling() !== null)
							return this.selectNext(), this.remove(), !0;
						if (this.getPreviousSibling() !== null)
							return this.selectPrevious(), this.remove(), !0;
					}
					return !1;
				}
			}
			e.ParagraphNode = ot;
			function dt(Qe) {
				const Ge = yt();
				if (Qe.style) {
					Ge.setFormat(Qe.style.textAlign);
					const st = parseInt(Qe.style.textIndent, 10) / 20;
					st > 0 && Ge.setIndent(st);
				}
				return { node: Ge };
			}
			function yt() {
				return fs(new ot());
			}
			function Ot(Qe) {
				return Qe instanceof ot;
			}
		},
	),
		