define(de[3057], he([1, 0, 767, 230, 2705]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, i.$Ubd)(t.$dp, w.$ep.ChannelName, { channelClientCtor: w.$fp });
		}),
		define(
			de[685],
			he([1, 0, 76, 14, 4, 8, 5, 79, 136]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O1c =
						e.$L1c =
						e.$K1c =
						e.$J1c =
						e.$I1c =
						e.$H1c =
						e.$G1c =
						e.$F1c =
						e.$E1c =
						e.$D1c =
						e.$C1c =
						e.$B1c =
						e.FileType =
						e.ChangeType =
						e.$A1c =
						e.$z1c =
						e.$y1c =
							void 0),
					(e.$M1c = a),
					(e.$N1c = h),
					(e.$y1c = (0, w.localize2)(5992, "Cloud Changes")),
					(e.$z1c = (0, C.$Mi)("IEditSessionsStorageService")),
					(e.$A1c = (0, C.$Mi)("IEditSessionsLogService"));
				var r;
				(function (c) {
					(c[(c.Addition = 1)] = "Addition"),
						(c[(c.Deletion = 2)] = "Deletion");
				})(r || (e.ChangeType = r = {}));
				var u;
				(function (c) {
					c[(c.File = 1)] = "File";
				})(u || (e.FileType = u = {})),
					(e.$B1c = 3),
					(e.$C1c = "editSessionsSignedIn"),
					(e.$D1c = new E.$5j(e.$C1c, !1)),
					(e.$E1c = "editSessionsPending"),
					(e.$F1c = new E.$5j(e.$E1c, !1)),
					(e.$G1c = "workbench.view.editSessions"),
					(e.$H1c = "workbench.views.editSessions.data"),
					(e.$I1c = (0, w.localize2)(5993, "Cloud Changes")),
					(e.$J1c = (0, d.$$O)(
						"edit-sessions-view-icon",
						i.$ak.cloudDownload,
						(0, w.localize)(5991, null),
					)),
					(e.$K1c = new E.$5j("editSessionsShowView", !1)),
					(e.$L1c = "vscode-edit-sessions");
				function a(c, n) {
					switch (c) {
						case 1:
							return t.$Te.fromString(n);
						case 2:
							return (0, t.$af)(n);
						default:
							throw new Error(
								"Upgrade to a newer version to decode this content.",
							);
					}
				}
				function h(c) {
					const n = new m.$Gj();
					return n.update(c), n.digest();
				}
				e.$O1c = "editSessions";
			},
		),
		define(
			de[3058],
			he([1, 0, 3, 6, 22, 685, 29]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S1c = void 0);
				let d = class {
					static {
						this.SCHEMA = E.$L1c;
					}
					constructor(r) {
						(this.a = r),
							(this.capabilities =
								w.FileSystemProviderCapabilities.Readonly +
								w.FileSystemProviderCapabilities.FileReadWrite),
							(this.onDidChangeCapabilities = i.Event.None),
							(this.onDidChangeFile = i.Event.None);
					}
					async readFile(r) {
						const u =
							/(?<ref>[^/]+)\/(?<folderName>[^/]+)\/(?<filePath>.*)/.exec(
								r.path.substring(1),
							);
						if (!u?.groups) throw w.FileSystemProviderErrorCode.FileNotFound;
						const { ref: a, folderName: h, filePath: c } = u.groups,
							n = await this.a.read("editSessions", a);
						if (!n) throw w.FileSystemProviderErrorCode.FileNotFound;
						const g = JSON.parse(n.content),
							p = g.folders
								.find((o) => o.name === h)
								?.workingChanges.find((o) => o.relativeFilePath === c);
						if (!p || p.type === E.ChangeType.Deletion)
							throw w.FileSystemProviderErrorCode.FileNotFound;
						return (0, E.$M1c)(g.version, p.contents).buffer;
					}
					async stat(r) {
						const u = await this.readFile(r),
							a = Date.now();
						return {
							type: w.FileType.File,
							permissions: w.FilePermission.Readonly,
							mtime: a,
							ctime: a,
							size: u.byteLength,
						};
					}
					watch(r, u) {
						return t.$1c.None;
					}
					async mkdir(r) {}
					async readdir(r) {
						return [];
					}
					async rename(r, u, a) {}
					async delete(r, u) {}
					async writeFile() {
						throw new C.$db();
					}
				};
				(e.$S1c = d), (e.$S1c = d = Ne([j(0, E.$z1c)], d));
			},
		),
		define(
			de[3059],
			he([1, 0, 19, 4, 113, 34, 685]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q1c = void 0);
				let d = class extends E.$nk {
					constructor(r, u) {
						super(),
							(this.g = this.D(
								r.createLogger((0, t.$nh)(u.logsHome, `${C.$O1c}.log`), {
									id: C.$O1c,
									name: (0, i.localize)(5994, null),
								}),
							));
					}
					trace(r, ...u) {
						this.g.trace(r, ...u);
					}
					debug(r, ...u) {
						this.g.debug(r, ...u);
					}
					info(r, ...u) {
						this.g.info(r, ...u);
					}
					warn(r, ...u) {
						this.g.warn(r, ...u);
					}
					error(r, ...u) {
						this.g.error(r, ...u);
					}
					flush() {
						this.g.flush();
					}
				};
				(e.$Q1c = d), (e.$Q1c = d = Ne([j(0, E.$jk), j(1, w.$Ti)], d));
			},
		),
		