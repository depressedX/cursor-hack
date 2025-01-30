import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/glob.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/lazy.js';
define(
			Pe[570],
			Ne([1, 0, 4, 51, 2, 6, 17, 11, 32, 71]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$qid = void 0),
					(P = tt(P));
				class p {
					get ignoreCreateEvents() {
						return !!(this.h & 1);
					}
					get ignoreChangeEvents() {
						return !!(this.h & 2);
					}
					get ignoreDeleteEvents() {
						return !!(this.h & 4);
					}
					constructor(g, c, h, $, T, a) {
						(this.a = Math.random()),
							(this.b = new e.$re()),
							(this.c = new e.$re()),
							(this.d = new e.$re()),
							(this.h = 0),
							a?.ignoreCreateEvents && (this.h += 1),
							a?.ignoreChangeEvents && (this.h += 2),
							a?.ignoreDeleteEvents && (this.h += 4);
						const u = (0, r.$Jk)(T),
							s = typeof T == "string",
							f = a?.correlate,
							o = $((w) => {
								if (
									!(typeof w.session == "number" && w.session !== this.a) &&
									!(f && typeof w.session > "u")
								) {
									if (!a?.ignoreCreateEvents)
										for (const m of w.created) {
											const E = S.URI.revive(m);
											u(E.fsPath) &&
												(!s || c.getWorkspaceFolder(E)) &&
												this.b.fire(E);
										}
									if (!a?.ignoreChangeEvents)
										for (const m of w.changed) {
											const E = S.URI.revive(m);
											u(E.fsPath) &&
												(!s || c.getWorkspaceFolder(E)) &&
												this.c.fire(E);
										}
									if (!a?.ignoreDeleteEvents)
										for (const m of w.deleted) {
											const E = S.URI.revive(m);
											u(E.fsPath) &&
												(!s || c.getWorkspaceFolder(E)) &&
												this.d.fire(E);
										}
								}
							});
						this.g = I.$nbb.from(
							this.i(g, h, T, a, a?.correlate),
							this.b,
							this.c,
							this.d,
							o,
						);
					}
					i(g, c, h, $, T) {
						const a = I.$nbb.from();
						if (
							typeof h == "string" ||
							($?.ignoreChangeEvents &&
								$?.ignoreCreateEvents &&
								$?.ignoreDeleteEvents)
						)
							return a;
						const u = g.getProxy(N.$lbb.MainThreadFileSystemEventService);
						let s = !1;
						(h.pattern.includes(r.$Fk) || h.pattern.includes(r.$Gk)) &&
							(s = !0);
						let f;
						return (
							T &&
								($?.ignoreChangeEvents ||
									$?.ignoreCreateEvents ||
									$?.ignoreDeleteEvents) &&
								((f =
									l.FileChangeFilter.UPDATED |
									l.FileChangeFilter.ADDED |
									l.FileChangeFilter.DELETED),
								$?.ignoreChangeEvents && (f &= ~l.FileChangeFilter.UPDATED),
								$?.ignoreCreateEvents && (f &= ~l.FileChangeFilter.ADDED),
								$?.ignoreDeleteEvents && (f &= ~l.FileChangeFilter.DELETED)),
							u.$watch(
								c.identifier.value,
								this.a,
								h.baseUri,
								{ recursive: s, excludes: $?.excludes ?? [], filter: f },
								!!T,
							),
							I.$nbb.from({ dispose: () => u.$unwatch(this.a) })
						);
					}
					dispose() {
						this.g.dispose();
					}
					get onDidCreate() {
						return this.b.event;
					}
					get onDidChange() {
						return this.c.event;
					}
					get onDidDelete() {
						return this.d.event;
					}
				}
				class y {
					constructor(g) {
						(this.a = g),
							(this.session = this.a.session),
							(this.b = new n.$Y(() => this.a.created.map(S.URI.revive))),
							(this.c = new n.$Y(() => this.a.changed.map(S.URI.revive))),
							(this.d = new n.$Y(() => this.a.deleted.map(S.URI.revive)));
					}
					get created() {
						return this.b.value;
					}
					get changed() {
						return this.c.value;
					}
					get deleted() {
						return this.d.value;
					}
				}
				class d {
					constructor(g, c, h) {
						(this.j = g),
							(this.k = c),
							(this.l = h),
							(this.a = new e.$re()),
							(this.b = new e.$re()),
							(this.c = new e.$re()),
							(this.d = new e.$re()),
							(this.g = new e.$te()),
							(this.h = new e.$te()),
							(this.i = new e.$te()),
							(this.onDidRenameFile = this.b.event),
							(this.onDidCreateFile = this.c.event),
							(this.onDidDeleteFile = this.d.event);
					}
					createFileSystemWatcher(g, c, h, $) {
						return new p(this.j, g, c, this.a.event, P.GlobPattern.from(h), $);
					}
					$onFileEvent(g) {
						this.a.fire(new y(g));
					}
					$onDidRunFileOperation(g, c) {
						switch (g) {
							case l.FileOperation.MOVE:
								this.b.fire(
									Object.freeze({
										files: c.map((h) => ({
											oldUri: S.URI.revive(h.source),
											newUri: S.URI.revive(h.target),
										})),
									}),
								);
								break;
							case l.FileOperation.DELETE:
								this.d.fire(
									Object.freeze({
										files: c.map((h) => S.URI.revive(h.target)),
									}),
								);
								break;
							case l.FileOperation.CREATE:
							case l.FileOperation.COPY:
								this.c.fire(
									Object.freeze({
										files: c.map((h) => S.URI.revive(h.target)),
									}),
								);
								break;
							default:
						}
					}
					getOnWillRenameFileEvent(g) {
						return this.m(g, this.g);
					}
					getOnWillCreateFileEvent(g) {
						return this.m(g, this.h);
					}
					getOnWillDeleteFileEvent(g) {
						return this.m(g, this.i);
					}
					m(g, c) {
						return (h, $, T) => {
							const a = function (s) {
								h.call($, s);
							};
							return (a.extension = g), c.event(a, void 0, T);
						};
					}
					async $onWillRunFileOperation(g, c, h, $) {
						switch (g) {
							case l.FileOperation.MOVE:
								return await this.n(
									this.g,
									{
										files: c.map((T) => ({
											oldUri: S.URI.revive(T.source),
											newUri: S.URI.revive(T.target),
										})),
									},
									h,
									$,
								);
							case l.FileOperation.DELETE:
								return await this.n(
									this.i,
									{ files: c.map((T) => S.URI.revive(T.target)) },
									h,
									$,
								);
							case l.FileOperation.CREATE:
							case l.FileOperation.COPY:
								return await this.n(
									this.h,
									{ files: c.map((T) => S.URI.revive(T.target)) },
									h,
									$,
								);
						}
					}
					async n(g, c, h, $) {
						const T = new Set(),
							a = [];
						if (
							(await g.fireAsync(c, $, async (s, f) => {
								const o = Date.now(),
									w = await Promise.resolve(s);
								w instanceof I.$zbb &&
									(a.push([f.extension, w]),
									T.add(
										f.extension.displayName ?? f.extension.identifier.value,
									)),
									Date.now() - o > h &&
										this.k.warn(
											"SLOW file-participant",
											f.extension.identifier,
										);
							}),
							$.isCancellationRequested || a.length === 0)
						)
							return;
						const u = { edits: [] };
						for (const [, s] of a) {
							const { edits: f } = P.WorkspaceEdit.from(s, {
								getTextDocumentVersion: (o) => this.l.getDocument(o)?.version,
								getNotebookDocumentVersion: () => {},
							});
							u.edits = u.edits.concat(f);
						}
						return { edit: u, extensionNames: Array.from(T) };
					}
				}
				t.$qid = d;
			},
		),
		