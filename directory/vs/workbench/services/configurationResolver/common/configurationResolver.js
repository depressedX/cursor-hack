import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/errors.js';
define(de[358], he([1, 0, 5, 29]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Aeb = e.VariableKind = e.$zeb = void 0),
				(e.$zeb = (0, t.$Mi)("configurationResolverService"));
			var w;
			(function (C) {
				(C.Unknown = "unknown"),
					(C.Env = "env"),
					(C.Config = "config"),
					(C.Command = "command"),
					(C.Input = "input"),
					(C.ExtensionInstallFolder = "extensionInstallFolder"),
					(C.WorkspaceFolder = "workspaceFolder"),
					(C.Cwd = "cwd"),
					(C.WorkspaceFolderBasename = "workspaceFolderBasename"),
					(C.UserHome = "userHome"),
					(C.LineNumber = "lineNumber"),
					(C.SelectedText = "selectedText"),
					(C.File = "file"),
					(C.FileWorkspaceFolder = "fileWorkspaceFolder"),
					(C.FileWorkspaceFolderBasename = "fileWorkspaceFolderBasename"),
					(C.RelativeFile = "relativeFile"),
					(C.RelativeFileDirname = "relativeFileDirname"),
					(C.FileDirname = "fileDirname"),
					(C.FileExtname = "fileExtname"),
					(C.FileBasename = "fileBasename"),
					(C.FileBasenameNoExtension = "fileBasenameNoExtension"),
					(C.FileDirnameBasename = "fileDirnameBasename"),
					(C.ExecPath = "execPath"),
					(C.ExecInstallFolder = "execInstallFolder"),
					(C.PathSeparator = "pathSeparator"),
					(C.PathSeparatorAlias = "/");
			})(w || (e.VariableKind = w = {}));
			class E extends i.$fb {
				constructor(d, m) {
					super(m), (this.variable = d);
				}
			}
			e.$Aeb = E;
		}),
		