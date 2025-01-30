import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/files/common/files.js';
import '../common/editSessions.js';
import '../../../../base/common/errors.js';
define(
			de[3058],
			he([1, 0, 3, 6, 22, 685, 29]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*event*/,
 w /*files*/,
 E /*editSessions*/,
 C /*errors*/) {
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
		