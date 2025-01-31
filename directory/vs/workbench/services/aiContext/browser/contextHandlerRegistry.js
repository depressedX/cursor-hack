import '../../../../../require.js';
import '../../../../../exports.js';
import './contextHandlers/dummyContextHandler.js';
import './contextHandlers/cmdKCurrentFileContextHandler.js';
import './contextHandlers/cmdKQueryEtcContextHandler.js';
import './contextHandlers/cmdkDefinitionsContextHandler.js';
import './contextHandlers/lintsContextHandler.js';
import './contextHandlers/visibleTabsContextHandler.js';
import './contextHandlers/recentLocationsContextHandler.js';
import './contextHandlers/chatHistoryContextHandler.js';
import './contextHandlers/fileContextHandler.js';
import './contextHandlers/terminalCmdKDefaultsContextHandler.js';
import './contextHandlers/terminalContextHandler.js';
import './contextHandlers/codeSelectionContextHandler.js';
import './contextHandlers/lspSubgraphContextHandler.js';
import './contextHandlers/commitNotesContextHandler.js';
import './contextHandlers/diffHistoryContextHandler.js';
import './contextHandlers/cmdkMessagesInDiffConversationContextHandler.js';
define(
			de[3995],
			he([
				1, 0, 3241, 3666, 3237, 3238, 3242, 3647, 3994, 3932, 3667, 3668, 1876,
				3239, 3993, 3240, 3992, 3646,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dummyContextHandler*/,
 i /*cmdKCurrentFileContextHandler*/,
 w /*cmdKQueryEtcContextHandler*/,
 E /*cmdkDefinitionsContextHandler*/,
 C /*lintsContextHandler*/,
 d /*visibleTabsContextHandler*/,
 m /*recentLocationsContextHandler*/,
 r /*chatHistoryContextHandler*/,
 u /*fileContextHandler*/,
 a /*terminalCmdKDefaultsContextHandler*/,
 h /*terminalContextHandler*/,
 c /*codeSelectionContextHandler*/,
 n /*lspSubgraphContextHandler*/,
 g /*commitNotesContextHandler*/,
 p /*diffHistoryContextHandler*/,
 o /*cmdkMessagesInDiffConversationContextHandler*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WZc = void 0),
					(e.$WZc = {
						file: (f, b) => f.createInstance(u.$OZc, b),
						cmdKCurrentFile: (f, b) => f.createInstance(i.$HZc, b),
						cmdKQueryEtc: (f, b) => f.createInstance(w.$IZc, b),
						cmdKDefinitions: (f, b) => f.createInstance(E.$JZc, b),
						documentation: (f, b) => f.createInstance(t.$GZc, b),
						lints: (f, b) => f.createInstance(C.$KZc, b),
						codeSelection: (f, b) => f.createInstance(c.$RZc, b),
						customInstructions: (f, b) => f.createInstance(t.$GZc, b),
						visibleTabs: (f, b) => f.createInstance(d.$LZc, b),
						recentLocations: (f, b) => f.createInstance(m.$MZc, b),
						chatHistory: (f, b) => f.createInstance(r.$NZc, b),
						terminalCmdKDefaults: (f, b) => f.createInstance(a.$QZc, b),
						terminalHistory: (f, b) => f.createInstance(h.$PZc, b),
						lspSubgraph: (f, b) => f.createInstance(n.$SZc, b),
						commitNotes: (f, b) => f.createInstance(g.$TZc, b),
						diffHistory: (f, b) => f.createInstance(p.$UZc, b),
						pastCmdkMessagesInDiffSessions: (f, b) =>
							f.createInstance(o.$VZc, b),
					});
			},
		)
