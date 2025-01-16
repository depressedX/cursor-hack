define(
			de[3811],
			he([
				1, 0, 27, 56, 46, 65, 4, 31, 43, 447, 846, 18, 11, 71, 1048, 17, 40,
				505, 91, 8, 130, 1238, 55, 3768, 178, 1143,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nSc = S),
					(C = mt(C)),
					(0, w.$qtb)(
						n.ID,
						n.$rpc,
						w.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, y.$s6)($.$mSc.ID, $.$mSc, y.WorkbenchPhase.BlockRestore),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.NextThread,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.nextCommentThread();
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.Alt | t.KeyCode.F9,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.PreviousThread,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.previousCommentThread();
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.F9,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.NextRange,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.nextCommentingRange();
						},
						when: b.$Kj.and(
							f.$YK,
							b.$Kj.or(
								c.EditorContextKeys.focus,
								o.CommentContextKeys.commentFocused,
								b.$Kj.and(
									s.$MLb,
									s.$SLb.isEqualTo(v.AccessibleViewProviderId.Comments),
								),
							),
						),
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.DownArrow,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.DownArrow,
							),
						},
						weight: m.KeybindingWeight.EditorContrib,
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.NextRange,
							title: C.localize(5045, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeEditorHasCommentingRange,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.PreviousRange,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.previousCommentingRange();
						},
						when: b.$Kj.and(
							f.$YK,
							b.$Kj.or(
								c.EditorContextKeys.focus,
								o.CommentContextKeys.commentFocused,
								b.$Kj.and(
									s.$MLb,
									s.$SLb.isEqualTo(v.AccessibleViewProviderId.Comments),
								),
							),
						),
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.UpArrow,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.UpArrow,
							),
						},
						weight: m.KeybindingWeight.EditorContrib,
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.PreviousRange,
							title: C.localize(5046, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeEditorHasCommentingRange,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ToggleCommenting,
						handler: (T) => {
							const P = T.get(r.$62b),
								k = P.isCommentingEnabled;
							P.enableCommenting(!k);
						},
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ToggleCommenting,
							title: C.localize(5047, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Add,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							const D = P?.range
									? new g.$iL(
											P.range.startLineNumber,
											P.range.startLineNumber,
											P.range.endLineNumber,
											P.range.endColumn,
										)
									: P?.fileComment
										? void 0
										: k.getSelection(),
								M = T.get(p.$4N);
							try {
								await L.addOrToggleCommentAtLine(D, void 0);
							} catch {
								M.error(C.localize(5048, null));
							}
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyC,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyC,
							),
						},
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.Add,
							title: C.localize(5049, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeCursorHasCommentingRange,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.CollapseAll,
						handler: (T) => I(T)?.collapseAll(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.CollapseAll,
							title: C.localize(5050, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ExpandAll,
						handler: (T) => I(T)?.expandAll(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ExpandAll,
							title: C.localize(5051, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ExpandUnresolved,
						handler: (T) => I(T)?.expandUnresolved(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ExpandUnresolved,
							title: C.localize(5052, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Submit,
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter,
						when: u.$h3b,
						handler: (T, P) => {
							const k = T.get(E.$dtb).getFocusedCodeEditor();
							k instanceof u.$k3b && k.getParentThread().submitComment();
						},
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Hide,
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyCode.Escape,
						secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
						when: u.$h3b,
						handler: (T, P) => {
							const k = T.get(E.$dtb).getFocusedCodeEditor();
							k instanceof u.$k3b && k.getParentThread().collapse();
						},
					});
				function S(T) {
					let P = T.get(a.$IY).activeTextEditorControl;
					return (
						(0, i.$$sb)(P) &&
							(P.getOriginalEditor().hasTextFocus()
								? (P = P.getOriginalEditor())
								: (P = P.getModifiedEditor())),
						!(0, i.$0sb)(P) || !P.hasModel() ? null : P
					);
				}
				function I(T) {
					const P = S(T);
					if (!P) return;
					const k = n.$rpc.get(P);
					if (k) return k;
				}
			},
		),
		