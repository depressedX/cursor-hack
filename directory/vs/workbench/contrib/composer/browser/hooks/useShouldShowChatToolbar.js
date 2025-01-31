import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import './useComposerCollectedStatuses.js';
import './useShouldShowApplyLastMessage.js';
define(de[4158], he([1, 0, 13, 1366, 1066]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*useComposerCollectedStatuses*/,
 w /*useShouldShowApplyLastMessage*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useShouldShowChatToolbar = E);
			function E(C) {
				const {
						shouldShowSaveAll: d,
						shouldShowAcceptAll: m,
						shouldShowRejectAll: r,
						shouldShowCompletedFiles: u,
						shouldShowCancel: a,
						shouldShowReapplyLastMessage: h,
					} = (0, i.useComposerCollectedStatuses)(C),
					c = (0, w.useShouldShowApplyLastMessage)(C);
				return (0, t.createMemo)(
					() => a() || d() || m() || r() || h() || u() || c(),
				);
			}
		})
