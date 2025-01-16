define(de[2976], he([1, 0, 76]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jdd = void 0),
				(e.$kdd = w);
			const i = (E, C, d) => `import json
import os
import base64

${C ? `os.chdir(base64.b64decode("${(0, t.$cf)(t.$Te.fromString(C))}").decode("utf-8"))` : ""}

CURSOR_IDE_ACTION_IDENTIFIER = "cursor-unique-ide-action-identifier-31972ee0d628"

class IDE:
    def open(self, path: str):
        """
        Opens the file at the given path. This will let you examine the contents of a file.
        """
        x = input(CURSOR_IDE_ACTION_IDENTIFIER + json.dumps({
            "method": "open",
            "accessUuid": "${d}",
            "args": {
                "tabId": "${E}",
                "path": path
            }
        }))
        return x

    def new(self, path: str):
        """
        Creates a new file at the given path and opens it.
        """
        x = input(CURSOR_IDE_ACTION_IDENTIFIER + json.dumps({
            "method": "new",
            "accessUuid": "${d}",
            "args": {
                "tabId": "${E}",
                "path": path
            }
        }))
        return x

    def exec(self, cmd: str):
        x = input(CURSOR_IDE_ACTION_IDENTIFIER + json.dumps({
            "method": "exec",
            "accessUuid": "${d}",
            "args": {
                "tabId": "${E}",
                "cmd": cmd
            }
        }))
        return x

    def edit(self, path: str, instruction: str = ""):
        """
        Edits the given file using an auto-edit function in the IDE. With just a short instruction, the IDE infers based on the conversation history how the file should be edited.

        For example, if you have talked about how file \`main.ts\` needs to add a function to parse JWTs, then \`ide.edit("main.ts", "add the JWT function")\` is sufficient.
        """
        x = input(CURSOR_IDE_ACTION_IDENTIFIER + json.dumps({
            "method": "edit",
            "accessUuid": "${d}",
            "args": {
                "tabId": "${E}",
                "path": path,
                "instruction": instruction
            }
        }))
        return x

    def semsearch(self, query: str, top_k: int = 20, include_glob: str = "", exclude_glob: str = ""):
        """
        Returns a list of the semantically closest code blocks. Each code block is a dictionary with the following structure:
        {
            'path': string,
            'content': string,
            'range': {
                'start_line': int,
                'end_line': int
            }
        }
        """
        x = input(CURSOR_IDE_ACTION_IDENTIFIER + json.dumps({
            "method": "semsearch",
            "accessUuid": "${d}",
            "args": {
                "tabId": "${E}",
                "query": query,
                "top_k": top_k,
                "include_glob": include_glob,
                "exclude_glob": exclude_glob
            }
        }))
        return json.loads(x)


ide = IDE()`;
			e.$jdd = i;
			function w(E) {
				if (E === void 0) return;
				const C = E.match(/"accessUuid": "(.*?)"/);
				return C ? C[1] : void 0;
			}
		}),
		