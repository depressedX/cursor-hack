import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
define(de[3140], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Wc = m),
				(t = mt(t));
			const i = {
					id: "dotnetCore",
					label: ".NET Core",
					sort: "NET Core",
					autoDetect: !1,
					description: t.localize(9953, null),
					content: [
						"{",
						"	// See https://go.microsoft.com/fwlink/?LinkId=733558",
						"	// for the documentation about the tasks.json format",
						'	"version": "2.0.0",',
						'	"tasks": [',
						"		{",
						'			"label": "build",',
						'			"command": "dotnet",',
						'			"type": "shell",',
						'			"args": [',
						'				"build",',
						"				// Ask dotnet build to generate full paths for file names.",
						'				"/property:GenerateFullPaths=true",',
						"				// Do not generate summary otherwise it leads to duplicate errors in Problems panel",
						'				"/consoleloggerparameters:NoSummary"',
						"			],",
						'			"group": "build",',
						'			"presentation": {',
						'				"reveal": "silent"',
						"			},",
						'			"problemMatcher": "$msCompile"',
						"		}",
						"	]",
						"}",
					].join(`
`),
				},
				w = {
					id: "msbuild",
					label: "MSBuild",
					autoDetect: !1,
					description: t.localize(9954, null),
					content: [
						"{",
						"	// See https://go.microsoft.com/fwlink/?LinkId=733558",
						"	// for the documentation about the tasks.json format",
						'	"version": "2.0.0",',
						'	"tasks": [',
						"		{",
						'			"label": "build",',
						'			"type": "shell",',
						'			"command": "msbuild",',
						'			"args": [',
						"				// Ask msbuild to generate full paths for file names.",
						'				"/property:GenerateFullPaths=true",',
						'				"/t:build",',
						"				// Do not generate summary otherwise it leads to duplicate errors in Problems panel",
						'				"/consoleloggerparameters:NoSummary"',
						"			],",
						'			"group": "build",',
						'			"presentation": {',
						"				// Reveal the output only if unrecognized errors occur.",
						'				"reveal": "silent"',
						"			},",
						"			// Use the standard MS compiler pattern to detect errors, warnings and infos",
						'			"problemMatcher": "$msCompile"',
						"		}",
						"	]",
						"}",
					].join(`
`),
				},
				E = {
					id: "externalCommand",
					label: "Others",
					autoDetect: !1,
					description: t.localize(9955, null),
					content: [
						"{",
						"	// See https://go.microsoft.com/fwlink/?LinkId=733558",
						"	// for the documentation about the tasks.json format",
						'	"version": "2.0.0",',
						'	"tasks": [',
						"		{",
						'			"label": "echo",',
						'			"type": "shell",',
						'			"command": "echo Hello"',
						"		}",
						"	]",
						"}",
					].join(`
`),
				},
				C = {
					id: "maven",
					label: "maven",
					sort: "MVN",
					autoDetect: !1,
					description: t.localize(9956, null),
					content: [
						"{",
						"	// See https://go.microsoft.com/fwlink/?LinkId=733558",
						"	// for the documentation about the tasks.json format",
						'	"version": "2.0.0",',
						'	"tasks": [',
						"		{",
						'			"label": "verify",',
						'			"type": "shell",',
						'			"command": "mvn -B verify",',
						'			"group": "build"',
						"		},",
						"		{",
						'			"label": "test",',
						'			"type": "shell",',
						'			"command": "mvn -B test",',
						'			"group": "test"',
						"		}",
						"	]",
						"}",
					].join(`
`),
				};
			let d = null;
			function m() {
				return (
					d ||
						((d = [i, w, C].sort((r, u) =>
							(r.sort || r.label).localeCompare(u.sort || u.label),
						)),
						d.push(E)),
					d
				);
			}
		}),
		