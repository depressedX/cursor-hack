import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/files/common/files.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/event.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/log/common/log.js';
define(
			de[3536],
			he([1, 0, 29, 3, 23, 9, 22, 131, 6, 30, 250, 76, 34]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*lifecycle*/,
 w /*network*/,
 E /*uri*/,
 C /*files*/,
 d /*preferences*/,
 m /*event*/,
 r /*platform*/,
 u /*jsonContributionRegistry*/,
 a /*buffer*/,
 h /*log*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bEc = void 0),
					(u = mt(u));
				const n = r.$Io.as(u.$Jo.JSONContribution);
				let g = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.SCHEMA = w.Schemas.vscode;
					}
					constructor(o, f) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.a = this.D(new m.$re())),
							(this.onDidChangeFile = this.a.event),
							(this.capabilities =
								C.FileSystemProviderCapabilities.Readonly +
								C.FileSystemProviderCapabilities.FileReadWrite),
							(this.onDidChangeCapabilities = m.Event.None),
							this.D(
								n.onDidChangeSchema((b) => {
									this.a.fire([
										{
											resource: E.URI.parse(b),
											type: C.FileChangeType.UPDATED,
										},
									]);
								}),
							),
							this.D(
								o.onDidDefaultSettingsContentChanged((b) => {
									this.a.fire([
										{ resource: b, type: C.FileChangeType.UPDATED },
									]);
								}),
							);
					}
					async readFile(o) {
						if (o.scheme !== c.SCHEMA) throw new t.$db();
						let f;
						if (
							(o.authority === "schemas"
								? (f = this.f(o))
								: o.authority === "defaultsettings" &&
									(f = this.b.getDefaultSettingsContent(o)),
							f)
						)
							return a.$Te.fromString(f).buffer;
						throw C.FileSystemProviderErrorCode.FileNotFound;
					}
					async stat(o) {
						if (
							n.hasSchemaContent(o.toString()) ||
							this.b.hasDefaultSettingsContent(o)
						) {
							const f = Date.now();
							return {
								type: C.FileType.File,
								permissions: C.FilePermission.Readonly,
								mtime: f,
								ctime: f,
								size: 0,
							};
						}
						throw C.FileSystemProviderErrorCode.FileNotFound;
					}
					watch(o, f) {
						return i.$1c.None;
					}
					async mkdir(o) {}
					async readdir(o) {
						return [];
					}
					async rename(o, f, b) {}
					async delete(o, f) {}
					async writeFile() {
						throw new t.$db();
					}
					f(o) {
						const f = Date.now(),
							b = n.getSchemaContent(o.toString()) ?? "{}",
							s = this.c.getLevel();
						if (s === h.LogLevel.Debug || s === h.LogLevel.Trace) {
							const l = Date.now(),
								y = JSON.stringify(
									n.getSchemaContributions().schemas[o.toString()],
								);
							this.c.debug(
								`${o.toString()}: ${y.length} -> ${b.length} (${Math.round(((y.length - b.length) / y.length) * 100)}%) Took ${l - f}ms`,
							);
						}
						return b;
					}
				};
				(e.$bEc = g), (e.$bEc = g = c = Ne([j(0, d.$7Z), j(1, h.$ik)], g));
			},
		),
		