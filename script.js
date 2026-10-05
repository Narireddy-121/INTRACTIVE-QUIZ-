/* ==========================================================================
   QUIZ MASTER PRO - QUESTION BANK & LOGIC ENGINE
   Structure: languages -> topics -> questions
   ========================================================================== */

const quizData = {
  // ------------------------------------------------------------------------
  // 1. C PROGRAMMING
  // ------------------------------------------------------------------------
  c: {
    id: "c",
    name: "C Language",
    icon: "🅲",
    category: "systems",
    description: "Low-level procedural language and foundational computer science fundamentals.",
    topics: {
      basics: {
        id: "basics",
        name: "Basics",
        icon: "🔰",
        desc: "Syntax, main function, headers, and C compilation stages.",
        questions: [
          {
            q: "Who is known as the father of the C programming language?",
            o: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
            a: 1,
            difficulty: "easy",
            explanation: "Dennis Ritchie developed the C programming language at Bell Labs between 1969 and 1973."
          },
          {
            q: "Which file extension is used for standard C header files?",
            o: [".c", ".h", ".cpp", ".ch"],
            a: 1,
            difficulty: "easy",
            explanation: "C header files use the `.h` extension and contain function declarations and macro definitions."
          },
          {
            q: "What is the return type of the main() function in ISO standard C?",
            o: ["void", "int", "float", "char"],
            a: 1,
            difficulty: "easy",
            explanation: "Standard C requires `main()` to return an integer (`int`) representing exit status to the operating system."
          },
          {
            q: "Which compilation stage converts C source code into assembly code?",
            o: ["Preprocessor", "Compiler", "Assembler", "Linker"],
            a: 1,
            difficulty: "medium",
            explanation: "The compiler translates preprocessed C code into platform-specific assembly code."
          },
          {
            q: "What does the preprocessor directive `#include <stdio.h>` do?",
            o: ["Compiles standard I/O library", "Inserts contents of stdio.h before compilation", "Allocates input/output buffers", "Links runtime C binaries"],
            a: 1,
            difficulty: "medium",
            explanation: "The C preprocessor replaces `#include` with the actual header file contents before the compiler analyzes the code."
          },
          {
            q: "What is the result of token pasting operator `##` in C preprocessor?",
            o: ["Concatenates two tokens into one", "Compares two string literals", "Converts argument to string", "Expands macro recursively"],
            a: 0,
            difficulty: "hard",
            explanation: "The `##` token-pasting operator merges two tokens into a single token during macro preprocessing."
          }
        ]
      },
      variables: {
        id: "variables",
        name: "Variables & Data Types",
        icon: "📦",
        desc: "Primitive types, modifiers, memory sizes, and variable scopes.",
        questions: [
          {
            q: "What is the standard format specifier used to print an integer in C?",
            o: ["%f", "%d", "%s", "%c"],
            a: 1,
            difficulty: "easy",
            explanation: "`%d` (or `%i`) is used in `printf` and `scanf` for signed decimal integers."
          },
          {
            q: "What is the size of a `char` data type in standard C?",
            o: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
            a: 0,
            difficulty: "easy",
            explanation: "By definition in the C standard, `sizeof(char)` is always exactly 1 byte."
          },
          {
            q: "What will `sizeof('a')` evaluate to in standard C?",
            o: ["1", "sizeof(int)", "0", "Compiler error"],
            a: 1,
            difficulty: "medium",
            explanation: "In C, character literals like `'a'` are integer character constants of type `int`, so `sizeof('a') == sizeof(int)`."
          },
          {
            q: "Which keyword prevents modification of a variable's value?",
            o: ["static", "const", "volatile", "register"],
            a: 1,
            difficulty: "easy",
            explanation: "The `const` type qualifier makes a variable read-only."
          },
          {
            q: "What is the default initial value of a static local variable in C?",
            o: ["Garbage value", "0", "-1", "Null pointer"],
            a: 1,
            difficulty: "medium",
            explanation: "Static variables are stored in the BSS segment and initialized to zero by default."
          },
          {
            q: "What is the purpose of the `volatile` qualifier in C?",
            o: ["Optimizes memory reads", "Prevents compiler from caching the variable in registers", "Stores variable in CPU cache", "Protects variable from threading races"],
            a: 1,
            difficulty: "hard",
            explanation: "`volatile` tells the compiler that the variable may change unexpectedly (e.g., hardware register) and prevents aggressive optimization."
          }
        ]
      },
      operators: {
        id: "operators",
        name: "Operators",
        icon: "➕",
        desc: "Arithmetic, bitwise, relational, logical, and precedence rules.",
        questions: [
          {
            q: "Which operator is used to calculate the remainder of division in C?",
            o: ["/", "%", "//", "mod"],
            a: 1,
            difficulty: "easy",
            explanation: "The modulus operator `%` produces the remainder of integer division."
          },
          {
            q: "What is the result of the expression `5 + 2 * 3` in C?",
            o: ["21", "11", "17", "16"],
            a: 1,
            difficulty: "easy",
            explanation: "Multiplication (`*`) has higher precedence than addition (`+`), so `2 * 3 = 6`, then `5 + 6 = 11`."
          },
          {
            q: "What is the value of `x` after: `int a = 5; int x = a++;`?",
            o: ["5", "6", "4", "Undefined"],
            a: 0,
            difficulty: "medium",
            explanation: "Postfix `a++` returns the original value (5) before incrementing `a` to 6."
          },
          {
            q: "Which bitwise operator is used for Bitwise XOR in C?",
            o: ["&", "|", "^", "~"],
            a: 2,
            difficulty: "medium",
            explanation: "The caret `^` represents bitwise exclusive OR in C."
          },
          {
            q: "What is the output of `!0` in C?",
            o: ["0", "1", "-1", "false"],
            a: 1,
            difficulty: "easy",
            explanation: "In C, logical NOT on 0 (false) yields 1 (true)."
          },
          {
            q: "What is the associativity of the assignment operator (`=`) in C?",
            o: ["Left to Right", "Right to Left", "Non-associative", "Depends on compiler"],
            a: 1,
            difficulty: "hard",
            explanation: "Assignment operators evaluate from right to left (e.g. `a = b = c`)."
          }
        ]
      },
      conditionals: {
        id: "conditionals",
        name: "Conditional Statements",
        icon: "🔀",
        desc: "if-else branching, switch-case, and ternary operator.",
        questions: [
          {
            q: "Which keyword is used for multi-way branching against integer constants?",
            o: ["select", "switch", "branch", "choice"],
            a: 1,
            difficulty: "easy",
            explanation: "`switch` statements allow branching based on integer or character expressions."
          },
          {
            q: "What happens if a `break` statement is omitted in a C switch case?",
            o: ["Syntax error occurs", "Execution falls through to the next case", "Program terminates immediately", "The switch restarts"],
            a: 1,
            difficulty: "medium",
            explanation: "Without `break`, execution continues sequentially into subsequent cases (fall-through)."
          },
          {
            q: "Can a floating point variable (like `float x`) be used in a `switch(x)` expression in C?",
            o: ["Yes, always", "No, switch requires an integral or enum type", "Yes, with warning", "Only in C99 and newer"],
            a: 1,
            difficulty: "medium",
            explanation: "C switch expressions must evaluate to an integral or enumeration type."
          },
          {
            q: "What does the ternary operator `(cond ? a : b)` return if `cond` is false?",
            o: ["a", "b", "0", "null"],
            a: 1,
            difficulty: "easy",
            explanation: "If `cond` evaluates to false (0), the expression after the colon (`b`) is evaluated and returned."
          },
          {
            q: "What will `if (x = 0)` evaluate to in C?",
            o: ["True branch", "False branch", "Compilation error", "Runtime exception"],
            a: 1,
            difficulty: "medium",
            explanation: "`x = 0` assigns 0 to `x` and yields 0, which evaluates to false."
          }
        ]
      },
      loops: {
        id: "loops",
        name: "Loops",
        icon: "🔁",
        desc: "for, while, do-while loops, break and continue statements.",
        questions: [
          {
            q: "Which loop guarantees that its body will execute at least once?",
            o: ["for loop", "while loop", "do-while loop", "nested loop"],
            a: 2,
            difficulty: "easy",
            explanation: "`do-while` evaluates its condition at the bottom, guaranteeing at least one execution."
          },
          {
            q: "What statement terminates the current loop immediately?",
            o: ["continue", "break", "return", "exit"],
            a: 1,
            difficulty: "easy",
            explanation: "`break` halts loop execution and transfers control to the statement following the loop."
          },
          {
            q: "What statement skips the rest of the current iteration and starts the next?",
            o: ["skip", "continue", "pass", "next"],
            a: 1,
            difficulty: "easy",
            explanation: "`continue` skips subsequent statements in the current iteration and tests the loop condition."
          },
          {
            q: "What is an infinite loop in C using `for`?",
            o: ["for (; ;)", "for (0; 0; 0)", "for (null)", "for (stop)"],
            a: 0,
            difficulty: "medium",
            explanation: "`for (; ;)` with an empty condition test is standard C syntax for an infinite loop."
          },
          {
            q: "In a `for (init; cond; step)` loop, when is `step` executed?",
            o: ["Before each iteration", "At the end of each iteration body", "Only once at the start", "When condition is false"],
            a: 1,
            difficulty: "medium",
            explanation: "The increment/step expression runs after the loop body finishes, right before re-checking the condition."
          }
        ]
      },
      functions: {
        id: "functions",
        name: "Functions",
        icon: "⚙️",
        desc: "Prototypes, parameters, recursion, and pass-by-value.",
        questions: [
          {
            q: "How are arguments passed to functions by default in C?",
            o: ["Pass by reference", "Pass by value", "Pass by pointer", "Pass by name"],
            a: 1,
            difficulty: "easy",
            explanation: "C is strictly pass-by-value. Pointers are passed by value to simulate pass-by-reference."
          },
          {
            q: "What is a function prototype in C?",
            o: ["The compiled binary of a function", "A declaration that tells the compiler the function signature before definition", "A macro template", "The entry point of the executable"],
            a: 1,
            difficulty: "easy",
            explanation: "A prototype informs the compiler about function name, return type, and parameter types before its implementation."
          },
          {
            q: "What is it called when a function calls itself?",
            o: ["Iteration", "Recursion", "Inlining", "Polymorphism"],
            a: 1,
            difficulty: "easy",
            explanation: "Recursion is the programming technique where a function calls itself to solve smaller subproblems."
          },
          {
            q: "What header is required to use variable-length argument lists (`va_list`)?",
            o: ["<stdlib.h>", "<stdarg.h>", "<string.h>", "<varargs.h>"],
            a: 1,
            difficulty: "hard",
            explanation: "`<stdarg.h>` provides macros like `va_start`, `va_arg`, and `va_end` for variadic functions."
          },
          {
            q: "What keyword suggests that the compiler replace function calls with function code inline?",
            o: ["macro", "inline", "fastcall", "register"],
            a: 1,
            difficulty: "medium",
            explanation: "The `inline` keyword suggests expanding the function body directly at call sites to reduce overhead."
          }
        ]
      },
      arrays: {
        id: "arrays",
        name: "Arrays",
        icon: "📊",
        desc: "1D & multidimensional arrays, indexing, and memory layout.",
        questions: [
          {
            q: "What is the index of the first element in a C array?",
            o: ["1", "0", "-1", "Depends on declaration"],
            a: 1,
            difficulty: "easy",
            explanation: "C arrays are zero-indexed, meaning the first element is at index 0."
          },
          {
            q: "Given `int arr[5];`, what is the index of the last valid element?",
            o: ["5", "4", "6", "0"],
            a: 1,
            difficulty: "easy",
            explanation: "An array of size 5 has valid indices from 0 to 4 (`size - 1`)."
          },
          {
            q: "How are elements of a C array arranged in memory?",
            o: ["Scattered across heap", "Contiguous memory locations", "Linked list nodes", "Random memory addresses"],
            a: 1,
            difficulty: "easy",
            explanation: "Array elements are stored contiguously in sequential memory addresses."
          },
          {
            q: "What is the result of accessing `arr[10]` if `arr` has only 5 elements?",
            o: ["Compiler error", "ArrayIndexOutOfBoundsException", "Undefined behavior", "Program returns 0"],
            a: 2,
            difficulty: "medium",
            explanation: "C does not perform bounds checking; accessing out-of-bounds indices leads to undefined behavior."
          },
          {
            q: "If `arr` is an integer array, which expression is equivalent to `arr[i]`?",
            o: ["*(arr + i)", "&arr[i]", "*arr + i", "arr + *i"],
            a: 0,
            difficulty: "medium",
            explanation: "Array indexing `arr[i]` is syntactic sugar for pointer arithmetic `*(arr + i)`."
          },
          {
            q: "In a 2D array `int a[3][4]`, how many total elements are allocated?",
            o: ["7", "12", "14", "34"],
            a: 1,
            difficulty: "easy",
            explanation: "`3 * 4 = 12` integer elements are allocated in row-major order."
          }
        ]
      },
      strings: {
        id: "strings",
        name: "Strings",
        icon: "🔤",
        desc: "Null-terminated char arrays and standard string.h functions.",
        questions: [
          {
            q: "How are strings represented in C?",
            o: ["Built-in String object", "Null-terminated (`\\0`) character arrays", "Byte arrays with length prefix", "Dynamic vector of characters"],
            a: 1,
            difficulty: "easy",
            explanation: "In C, strings are sequences of characters terminated by a null byte `\\0`."
          },
          {
            q: "Which function calculates the length of a string excluding the null terminator?",
            o: ["size()", "strlen()", "length()", "strsize()"],
            a: 1,
            difficulty: "easy",
            explanation: "`strlen()` from `<string.h>` counts characters up to (but not including) the `\\0` character."
          },
          {
            q: "Which function copies one string into another in C?",
            o: ["strcopy()", "strcpy()", "memcpy_str()", "clone()"],
            a: 1,
            difficulty: "easy",
            explanation: "`strcpy(dest, src)` copies the characters from `src` to `dest`."
          },
          {
            q: "What does `strcmp(\"apple\", \"apple\")` return?",
            o: ["1", "-1", "0", "true"],
            a: 2,
            difficulty: "medium",
            explanation: "`strcmp()` returns 0 when both strings are identical in content."
          },
          {
            q: "Why is `gets()` dangerous and deprecated in modern C standards?",
            o: ["It causes memory leaks", "It cannot check buffer bounds leading to buffer overflows", "It requires root permissions", "It only accepts numbers"],
            a: 1,
            difficulty: "medium",
            explanation: "`gets()` has no bounds checking and can overflow target buffers; `fgets()` should be used instead."
          }
        ]
      },
      pointers: {
        id: "pointers",
        name: "Pointers",
        icon: "🎯",
        desc: "Memory addresses, dereferencing, pointer arithmetic, and void pointers.",
        questions: [
          {
            q: "Which operator is used to obtain the address of a variable in C?",
            o: ["*", "&", "->", "%"],
            a: 1,
            difficulty: "easy",
            explanation: "The address-of operator `&` retrieves the memory address where a variable is stored."
          },
          {
            q: "Which operator is used to dereference a pointer in C?",
            o: ["&", "*", "->", "@"],
            a: 1,
            difficulty: "easy",
            explanation: "The dereference operator `*` accesses the value stored at the address pointed to."
          },
          {
            q: "What is a pointer that points to nothing valid called?",
            o: ["Dangling pointer", "Null pointer", "Void pointer", "Wild pointer"],
            a: 1,
            difficulty: "easy",
            explanation: "A NULL pointer has value 0 and indicates that the pointer does not reference any valid object."
          },
          {
            q: "What happens when you increment a pointer `int *p` by 1 (`p++`)?",
            o: ["It increments address by 1 byte", "It increments address by `sizeof(int)` bytes", "It increments the value pointed to", "Undefined behavior"],
            a: 1,
            difficulty: "medium",
            explanation: "Pointer arithmetic scales by the size of the underlying type (`sizeof(int)`)."
          },
          {
            q: "What is a 'dangling pointer' in C?",
            o: ["A pointer initialized to NULL", "A pointer that points to deallocated or freed memory", "A pointer without a type", "A circular pointer"],
            a: 1,
            difficulty: "medium",
            explanation: "A dangling pointer still holds the address of memory that has already been freed."
          },
          {
            q: "Can pointer arithmetic be performed on a `void *` pointer in standard ANSI C?",
            o: ["Yes, treats it as 1 byte", "No, void has an incomplete type with no size", "Yes, treats it as 4 bytes", "Only with compiler flag"],
            a: 1,
            difficulty: "hard",
            explanation: "Standard C forbids arithmetic on `void*` because `void` has an incomplete type with no defined size (though GCC has an extension treating it as 1 byte)."
          }
        ]
      },
      structures: {
        id: "structures",
        name: "Structures",
        icon: "🏗️",
        desc: "struct definitions, unions, typedef, and memory alignment.",
        questions: [
          {
            q: "Which keyword defines a user-defined composite data type in C?",
            o: ["class", "struct", "object", "interface"],
            a: 1,
            difficulty: "easy",
            explanation: "`struct` allows grouping variables of different types under a single name."
          },
          {
            q: "Which operator accesses a structure member through a pointer to that structure?",
            o: [".", "->", "::", "&"],
            a: 1,
            difficulty: "easy",
            explanation: "The arrow operator `->` accesses members via a pointer (e.g. `ptr->member`)."
          },
          {
            q: "What is the primary difference between a `struct` and a `union` in C?",
            o: ["Unions cannot hold integers", "All members in a union share the same memory location", "Structs cannot use pointers", "Unions are compiled in C++ only"],
            a: 1,
            difficulty: "medium",
            explanation: "In a union, all members share the same memory space, and the union's size equals its largest member."
          },
          {
            q: "Which keyword creates an alias for an existing data type in C?",
            o: ["alias", "typedef", "define", "using"],
            a: 1,
            difficulty: "easy",
            explanation: "`typedef` creates new synonym names for types (e.g., `typedef unsigned long ulong;`)."
          },
          {
            q: "Why might `sizeof(struct { char c; int i; })` be 8 bytes instead of 5?",
            o: ["Compiler error", "Memory padding and structure alignment", "Integers require 7 bytes", "Char is 4 bytes inside structs"],
            a: 1,
            difficulty: "hard",
            explanation: "Compilers insert padding bytes so members are aligned to natural memory boundaries for performance."
          }
        ]
      },
      file_handling: {
        id: "file_handling",
        name: "File Handling",
        icon: "📁",
        desc: "FILE pointers, fopen modes, fread, fwrite, and fclose.",
        questions: [
          {
            q: "Which function is used to open a file stream in C?",
            o: ["file_open()", "fopen()", "open()", "create_file()"],
            a: 1,
            difficulty: "easy",
            explanation: "`FILE *fopen(const char *filename, const char *mode)` opens a file and returns a stream pointer."
          },
          {
            q: "What does `fopen()` return if the file cannot be opened?",
            o: ["-1", "0", "NULL", "EOF"],
            a: 2,
            difficulty: "easy",
            explanation: "`fopen()` returns `NULL` when an error occurs during file opening."
          },
          {
            q: "Which file mode opens a file for appending data to the end?",
            o: ["\"r\"", "\"w\"", "\"a\"", "\"x\""],
            a: 2,
            difficulty: "easy",
            explanation: "Mode `\"a\"` opens the file for writing at the end without truncating existing content."
          },
          {
            q: "What constant indicates the end of a file in C I/O operations?",
            o: ["END", "NULL", "EOF", "TERMINATE"],
            a: 2,
            difficulty: "medium",
            explanation: "`EOF` (End of File) is a negative integer (usually -1) defined in `<stdio.h>`."
          },
          {
            q: "Which function writes binary blocks of data to a file stream?",
            o: ["fputs()", "fwrite()", "fprintf()", "write_raw()"],
            a: 1,
            difficulty: "medium",
            explanation: "`fwrite()` writes binary items of specified size and count to a `FILE*` stream."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 2. JAVA
  // ------------------------------------------------------------------------
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    category: "enterprise",
    description: "Object-oriented, platform-independent enterprise programming language.",
    topics: {
      basics: {
        id: "basics",
        name: "Java Basics",
        icon: "🔰",
        desc: "JVM, JRE, JDK, bytecode, and write once run anywhere paradigm.",
        questions: [
          {
            q: "What does WORA stand for in Java's philosophy?",
            o: ["Write Once, Read Anywhere", "Write Once, Run Anywhere", "Work Once, Run Always", "Wide Open Resource Access"],
            a: 1,
            difficulty: "easy",
            explanation: "Java's core slogan is 'Write Once, Run Anywhere' due to JVM bytecode execution."
          },
          {
            q: "What component executes Java bytecode on a machine?",
            o: ["JDK", "JVM", "JRE compiler", "JIT source builder"],
            a: 1,
            difficulty: "easy",
            explanation: "The Java Virtual Machine (JVM) interprets and JIT-compiles bytecode into native machine instructions."
          },
          {
            q: "What is the entry point signature for a standard Java standalone application?",
            o: [
              "public static void main(String[] args)",
              "public void main(String[] args)",
              "static int main(String args[])",
              "public static int main(String[] args)"
            ],
            a: 0,
            difficulty: "easy",
            explanation: "Standard main method must be `public static void main(String[] args)`."
          },
          {
            q: "What file extension is generated after compiling a Java file?",
            o: [".java", ".class", ".exe", ".jar"],
            a: 1,
            difficulty: "easy",
            explanation: "Compiling `.java` files with `javac` generates `.class` bytecode files."
          },
          {
            q: "What is the purpose of the JIT compiler in the JVM?",
            o: ["Translates Java code to bytecode", "Compiles frequently executed bytecode into native machine code at runtime", "Cleans garbage memory", "Checks code security"],
            a: 1,
            difficulty: "medium",
            explanation: "Just-In-Time (JIT) compiler converts hot bytecode into native machine instructions for performance."
          }
        ]
      },
      variables: {
        id: "variables",
        name: "Variables & Data Types",
        icon: "📦",
        desc: "Primitive types, wrappers, autoboxing, and type casting.",
        questions: [
          {
            q: "How many primitive data types are there in Java?",
            o: ["6", "7", "8", "10"],
            a: 2,
            difficulty: "easy",
            explanation: "Java has 8 primitive types: byte, short, int, long, float, double, char, and boolean."
          },
          {
            q: "What is the size of an `int` primitive in Java?",
            o: ["16 bits (2 bytes)", "32 bits (4 bytes)", "64 bits (8 bytes)", "Platform dependent"],
            a: 1,
            difficulty: "easy",
            explanation: "In Java, an `int` is strictly guaranteed to be 32 bits (4 bytes) across all platforms."
          },
          {
            q: "What is the default value of a boolean instance variable in Java?",
            o: ["true", "false", "0", "null"],
            a: 1,
            difficulty: "easy",
            explanation: "The default value for boolean member variables in a Java class is `false`."
          },
          {
            q: "What is autoboxing in Java?",
            o: ["Automatic serialization of classes", "Automatic conversion of primitive types to wrapper objects", "Packaging classes into JAR", "Memory allocation by JVM"],
            a: 1,
            difficulty: "medium",
            explanation: "Autoboxing is the automatic conversion between primitive types (e.g., `int`) and their wrapper classes (e.g., `Integer`)."
          },
          {
            q: "Which keyword is used to declare a constant in Java?",
            o: ["const", "final", "static", "immutable"],
            a: 1,
            difficulty: "easy",
            explanation: "The `final` keyword prevents a variable from being reassigned after initialization."
          }
        ]
      },
      operators: {
        id: "operators",
        name: "Operators",
        icon: "➕",
        desc: "Arithmetic, short-circuit logical operators, and instanceof.",
        questions: [
          {
            q: "What is the difference between `&` and `&&` in Java?",
            o: ["No difference", "`&&` performs short-circuit evaluation while `&` evaluates both sides", "`&` is logical and `&&` is bitwise", "`&` cannot be used with boolean"],
            a: 1,
            difficulty: "medium",
            explanation: "`&&` is a short-circuit operator that skips the right operand if the left operand is false."
          },
          {
            q: "Which operator checks if an object is an instance of a specific class or interface?",
            o: ["typeof", "isInstance", "instanceof", "as"],
            a: 2,
            difficulty: "easy",
            explanation: "`instanceof` tests whether an object has a given type or interface in its hierarchy."
          },
          {
            q: "What does the expression `10 >> 1` evaluate to in Java?",
            o: ["20", "5", "10", "1"],
            a: 1,
            difficulty: "medium",
            explanation: "Right bit-shift by 1 divides an integer by 2 (`10 / 2 = 5`)."
          },
          {
            q: "What does the unsigned right shift operator `>>>` do in Java?",
            o: ["Fills leftmost bits with sign bit", "Fills leftmost bits with zeros always", "Rotates bits circularly", "Inverts the shifted bits"],
            a: 1,
            difficulty: "hard",
            explanation: "`>>>` shifts bits right and always fills high-order bits with zero, regardless of sign."
          }
        ]
      },
      conditionals: {
        id: "conditionals",
        name: "Conditional Statements",
        icon: "🔀",
        desc: "if-else-if, switch expressions, and pattern matching.",
        questions: [
          {
            q: "Can `String` objects be used in Java `switch` statements?",
            o: ["No, never", "Yes, supported since Java 7", "Only in Java 17+", "Only with switch expressions"],
            a: 1,
            difficulty: "easy",
            explanation: "Java 7 introduced support for `String` objects in `switch` statements."
          },
          {
            q: "What happens if no `break` or arrow `->` is provided in a switch case?",
            o: ["Compilation fails", "Fall-through occurs to the next case", "Exception thrown at runtime", "Default case executes"],
            a: 1,
            difficulty: "easy",
            explanation: "Classic switch statements without `break` fall through to executing subsequent case bodies."
          },
          {
            q: "Can a `null` variable be evaluated in `switch(str)`?",
            o: ["Yes, matches default", "Throws NullPointerException", "Yields false", "Compiles but returns empty"],
            a: 1,
            difficulty: "medium",
            explanation: "Passing `null` as the selector expression in a switch throws `NullPointerException`."
          }
        ]
      },
      loops: {
        id: "loops",
        name: "Loops",
        icon: "🔁",
        desc: "for, enhanced for-each, while, do-while, and loop labels.",
        questions: [
          {
            q: "What interface must an object implement to be iterated with the enhanced `for-each` loop?",
            o: ["Iterator", "Iterable", "Collection", "List"],
            a: 1,
            difficulty: "medium",
            explanation: "The enhanced `for (T item : list)` loop requires the target object to implement `java.lang.Iterable`."
          },
          {
            q: "Can labeled `break` statements break out of nested outer loops in Java?",
            o: ["No, Java does not support labels", "Yes, labeled breaks can terminate specified outer loops", "Only with goto", "Only inside try-catch"],
            a: 1,
            difficulty: "medium",
            explanation: "Java supports labeled loops so `break labelName;` can exit directly from nested loops."
          },
          {
            q: "What is the output of `for(;;)` in Java?",
            o: ["Syntax error", "An infinite loop", "Runs exactly 0 times", "Throws StackOverflowError"],
            a: 1,
            difficulty: "easy",
            explanation: "`for(;;)` compiles to an infinite loop in Java."
          }
        ]
      },
      arrays: {
        id: "arrays",
        name: "Arrays",
        icon: "📊",
        desc: "Array declaration, length property, Arrays utility class.",
        questions: [
          {
            q: "How do you find the number of elements in a Java array `int[] arr`?",
            o: ["arr.length()", "arr.length", "arr.size()", "arr.count"],
            a: 1,
            difficulty: "easy",
            explanation: "Arrays in Java have a built-in `length` field (not a method)."
          },
          {
            q: "What exception is thrown when accessing index 5 of an array with 3 elements in Java?",
            o: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IndexError", "NoSuchElementException"],
            a: 1,
            difficulty: "easy",
            explanation: "Java throws `java.lang.ArrayIndexOutOfBoundsException` at runtime for invalid indices."
          },
          {
            q: "Are arrays in Java objects stored on the heap?",
            o: ["No, stored on stack only", "Yes, all arrays are dynamic objects on the heap", "Only object arrays are on heap", "Depends on size"],
            a: 1,
            difficulty: "medium",
            explanation: "In Java, all arrays (including primitive arrays) are objects allocated on the heap."
          }
        ]
      },
      strings: {
        id: "strings",
        name: "Strings",
        icon: "🔤",
        desc: "String immutability, String Pool, StringBuilder, and StringBuffer.",
        questions: [
          {
            q: "Are `String` objects mutable in Java?",
            o: ["Yes, always", "No, String objects are strictly immutable", "Only when declared final", "Mutable via methods"],
            a: 1,
            difficulty: "easy",
            explanation: "Java `String` objects are immutable. Any modification creates a new String instance."
          },
          {
            q: "Which class is recommended for mutable string operations in a single-threaded environment?",
            o: ["StringBuffer", "StringBuilder", "StringWriter", "StringVector"],
            a: 1,
            difficulty: "easy",
            explanation: "`StringBuilder` is faster than `StringBuffer` because its methods are not synchronized."
          },
          {
            q: "Where are string literals stored in JVM memory?",
            o: ["Stack frame", "String Constant Pool (in Heap)", "Registers", "Native memory"],
            a: 1,
            difficulty: "medium",
            explanation: "String literals are stored in the String Constant Pool, which resides inside the JVM heap."
          },
          {
            q: "What does `s1.equals(s2)` test when comparing two strings in Java?",
            o: ["Memory address equality", "Character sequence value equality", "Hash code equality only", "Length equality"],
            a: 1,
            difficulty: "easy",
            explanation: "`equals()` tests logical content equality, whereas `==` checks reference identity."
          }
        ]
      },
      oop: {
        id: "oop",
        name: "OOP",
        icon: "🧩",
        desc: "Encapsulation, abstraction, constructors, and access modifiers.",
        questions: [
          {
            q: "Which access modifier gives the widest visibility in Java?",
            o: ["protected", "private", "public", "default (package-private)"],
            a: 2,
            difficulty: "easy",
            explanation: "`public` members are accessible from any class in any package."
          },
          {
            q: "What is encapsulation in Object-Oriented Programming?",
            o: ["Inheriting from multiple parents", "Bundling data and methods into a unit and hiding internal state", "Writing abstract methods", "Calling super() constructors"],
            a: 1,
            difficulty: "easy",
            explanation: "Encapsulation hides class fields (e.g. `private`) and exposes them via getters/setters."
          },
          {
            q: "Does a constructor have a return type in Java?",
            o: ["Yes, void", "No return type, not even void", "Yes, Object", "Yes, int"],
            a: 1,
            difficulty: "easy",
            explanation: "Constructors have no return type and share the exact same name as the class."
          },
          {
            q: "What keyword refers to the current class instance in Java?",
            o: ["self", "this", "super", "current"],
            a: 1,
            difficulty: "easy",
            explanation: "`this` refers to the current instance of the class."
          }
        ]
      },
      inheritance: {
        id: "inheritance",
        name: "Inheritance",
        icon: "🧬",
        desc: "extends, implements, super, overriding, and polymorphism.",
        questions: [
          {
            q: "Which keyword is used to inherit a class in Java?",
            o: ["implements", "extends", "inherits", "subclass"],
            a: 1,
            difficulty: "easy",
            explanation: "`extends` is used to inherit a class (`class Dog extends Animal`)."
          },
          {
            q: "Does Java support multiple inheritance of classes?",
            o: ["Yes, using commas", "No, Java avoids multiple inheritance of classes to prevent ambiguity", "Yes, via virtual classes", "Only in Java 8+"],
            a: 1,
            difficulty: "easy",
            explanation: "Java does not permit multiple class inheritance to avoid the diamond problem, but permits multiple interface implementation."
          },
          {
            q: "What keyword calls a superclass constructor or method?",
            o: ["parent", "super", "base", "root"],
            a: 1,
            difficulty: "easy",
            explanation: "`super()` invokes the parent class constructor, and `super.method()` calls superclass methods."
          },
          {
            q: "What annotation informs the compiler that a method is intended to override a superclass method?",
            o: ["@Overwrite", "@Override", "@Inherit", "@Poly"],
            a: 1,
            difficulty: "easy",
            explanation: "`@Override` provides compile-time verification that a method matches a superclass signature."
          }
        ]
      },
      exceptions: {
        id: "exceptions",
        name: "Exception Handling",
        icon: "🛡️",
        desc: "try, catch, finally, throw, throws, and checked vs unchecked.",
        questions: [
          {
            q: "Which block always executes regardless of whether an exception was thrown or caught?",
            o: ["catch", "finally", "final", "after"],
            a: 1,
            difficulty: "easy",
            explanation: "The `finally` block executes after try/catch, typically used to close resources."
          },
          {
            q: "Which of the following is an unchecked (Runtime) exception in Java?",
            o: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
            a: 2,
            difficulty: "medium",
            explanation: "`NullPointerException` inherits from `RuntimeException` and does not require explicit handling."
          },
          {
            q: "What is the base class for all errors and exceptions in Java?",
            o: ["java.lang.Exception", "java.lang.Throwable", "java.lang.Error", "java.lang.Object"],
            a: 1,
            difficulty: "medium",
            explanation: "`Throwable` is the root superclass of both `Exception` and `Error`."
          },
          {
            q: "What keyword is used in a method declaration to indicate that it might raise an exception?",
            o: ["throw", "throws", "raise", "catches"],
            a: 1,
            difficulty: "easy",
            explanation: "`throws` is placed in the method signature to specify checked exceptions it can propagate."
          }
        ]
      },
      collections: {
        id: "collections",
        name: "Collections",
        icon: "📚",
        desc: "List, Set, Map, ArrayList, HashMap, and Iterators.",
        questions: [
          {
            q: "Which collection interface does NOT allow duplicate elements?",
            o: ["List", "Set", "Queue", "Vector"],
            a: 1,
            difficulty: "easy",
            explanation: "`Set` represents a collection with no duplicate elements."
          },
          {
            q: "Does `java.util.Map` inherit from the `Collection` interface?",
            o: ["Yes, directly", "No, Map has its own independent hierarchy", "Only in Java 11+", "Yes, via Iterable"],
            a: 1,
            difficulty: "medium",
            explanation: "`Map` works with key-value pairs and does not extend the `Collection` interface."
          },
          {
            q: "What is the average time complexity for `get()` and `put()` in a `HashMap`?",
            o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
            a: 2,
            difficulty: "medium",
            explanation: "A well-distributed hash map provides constant time O(1) performance for lookups and insertions."
          },
          {
            q: "Which List implementation is based on a doubly linked list?",
            o: ["ArrayList", "LinkedList", "Vector", "Stack"],
            a: 1,
            difficulty: "easy",
            explanation: "`java.util.LinkedList` implements `List` and `Deque` using a doubly-linked list."
          }
        ]
      },
      multithreading: {
        id: "multithreading",
        name: "Multithreading",
        icon: "⚡",
        desc: "Thread class, Runnable, synchronized, and concurrency utilities.",
        questions: [
          {
            q: "Which method starts execution of a thread in Java?",
            o: ["run()", "start()", "execute()", "init()"],
            a: 1,
            difficulty: "easy",
            explanation: "`start()` creates a new operating system thread and then invokes `run()`."
          },
          {
            q: "What functional interface can be implemented to create a task for a Thread?",
            o: ["Callable", "Runnable", "Threadable", "Process"],
            a: 1,
            difficulty: "easy",
            explanation: "`Runnable` has a single `public void run()` method and is commonly passed to `Thread`."
          },
          {
            q: "Which keyword prevents concurrent access to a critical section of code?",
            o: ["volatile", "synchronized", "atomic", "locked"],
            a: 1,
            difficulty: "easy",
            explanation: "`synchronized` acquires an intrinsic lock on an object to guarantee mutual exclusion."
          },
          {
            q: "What is the state of a thread waiting for another thread to release a lock?",
            o: ["TIMED_WAITING", "BLOCKED", "RUNNABLE", "TERMINATED"],
            a: 1,
            difficulty: "medium",
            explanation: "A thread waiting to enter a synchronized block or method is in the `BLOCKED` state."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 3. PYTHON
  // ------------------------------------------------------------------------
  python: {
    id: "python",
    name: "Python",
    icon: "🐍",
    category: "scripting",
    description: "High-level, dynamically typed language known for clarity, versatility, and rich ecosystems.",
    topics: {
      basics: {
        id: "basics",
        name: "Python Basics",
        icon: "🔰",
        desc: "Indentation, comments, dynamic typing, and the Python interpreter.",
        questions: [
          {
            q: "How does Python delimit blocks of code?",
            o: ["Curly braces `{}`", "Indentation (whitespace)", "Begin/End keywords", "Semicolons `;`"],
            a: 1,
            difficulty: "easy",
            explanation: "Python enforces clean structure through consistent whitespace indentation."
          },
          {
            q: "Which symbol denotes a single-line comment in Python?",
            o: ["//", "/*", "#", "--"],
            a: 2,
            difficulty: "easy",
            explanation: "The hash `#` character starts a single-line comment."
          },
          {
            q: "What function outputs text to the standard console in Python?",
            o: ["echo()", "console.log()", "print()", "printf()"],
            a: 2,
            difficulty: "easy",
            explanation: "`print()` is Python's built-in function to display output to the terminal."
          },
          {
            q: "Is Python a statically typed or dynamically typed language?",
            o: ["Statically typed", "Dynamically typed", "Assembly typed", "Strongly untyped"],
            a: 1,
            difficulty: "easy",
            explanation: "Python is dynamically typed; variable types are resolved at runtime."
          }
        ]
      },
      variables: {
        id: "variables",
        name: "Variables & Types",
        icon: "📦",
        desc: "int, float, bool, str, NoneType, and type conversion.",
        questions: [
          {
            q: "What is the type of the value `None` in Python?",
            o: ["void", "null", "NoneType", "undefined"],
            a: 2,
            difficulty: "easy",
            explanation: "In Python, `None` is an instance of `NoneType`."
          },
          {
            q: "What is the result of `type(3.14)` in Python?",
            o: ["<class 'double'>", "<class 'float'>", "<class 'real'>", "<class 'decimal'>"],
            a: 1,
            difficulty: "easy",
            explanation: "Python represents standard floating-point numbers as `<class 'float'>`."
          },
          {
            q: "What will `int('42')` produce in Python?",
            o: ["Integer 42", "String '42'", "Float 42.0", "ValueError"],
            a: 0,
            difficulty: "easy",
            explanation: "`int()` parses a numeric string into an integer."
          }
        ]
      },
      operators: {
        id: "operators",
        name: "Operators",
        icon: "➕",
        desc: "Floor division, exponentiation, identity (is), and membership (in).",
        questions: [
          {
            q: "Which operator performs floor division in Python?",
            o: ["/", "//", "%", "div"],
            a: 1,
            difficulty: "easy",
            explanation: "`//` rounds down the division quotient to the nearest integer."
          },
          {
            q: "Which operator is used to raise a number to a power in Python?",
            o: ["^", "**", "^^", "pow"],
            a: 1,
            difficulty: "easy",
            explanation: "`**` is the exponentiation operator (e.g. `2 ** 3 == 8`)."
          },
          {
            q: "What does `a is b` check in Python?",
            o: ["Value equality", "Object identity (same memory address)", "Type compatibility", "Subset relationship"],
            a: 1,
            difficulty: "medium",
            explanation: "`is` checks if two references point to the exact same object in memory (`id(a) == id(b)`)."
          }
        ]
      },
      control_flow: {
        id: "control_flow",
        name: "Control Flow",
        icon: "🔀",
        desc: "if, elif, else, and ternary conditional expressions.",
        questions: [
          {
            q: "What keyword is used for 'else if' in Python?",
            o: ["elseif", "else if", "elif", "elsif"],
            a: 2,
            difficulty: "easy",
            explanation: "Python uses `elif` as shorthand for 'else if'."
          },
          {
            q: "How is a ternary operator written in Python?",
            o: ["x ? a : b", "a if x else b", "if x then a else b", "choose(x, a, b)"],
            a: 1,
            difficulty: "easy",
            explanation: "Python's conditional expression syntax is `result = a if condition else b`."
          }
        ]
      },
      loops: {
        id: "loops",
        name: "Loops",
        icon: "🔁",
        desc: "for-in, while, range(), and the unique for-else clause.",
        questions: [
          {
            q: "What does `range(2, 6)` produce?",
            o: ["[2, 3, 4, 5, 6]", "[2, 3, 4, 5]", "[3, 4, 5]", "[2, 4, 6]"],
            a: 1,
            difficulty: "easy",
            explanation: "`range(start, stop)` produces values from `start` up to but not including `stop` (2, 3, 4, 5)."
          },
          {
            q: "When does an `else` clause attached to a `for` loop execute in Python?",
            o: ["Every iteration", "When the loop completes normally without encountering a `break`", "Only if the loop raised an exception", "Never"],
            a: 1,
            difficulty: "medium",
            explanation: "The `else` block of a loop runs when the iterable is exhausted without a `break` being hit."
          }
        ]
      },
      functions: {
        id: "functions",
        name: "Functions",
        icon: "⚙️",
        desc: "def, *args, **kwargs, lambda expressions, and decorators.",
        questions: [
          {
            q: "Which keyword defines a function in Python?",
            o: ["function", "fn", "def", "lambda"],
            a: 2,
            difficulty: "easy",
            explanation: "`def` is the keyword used to define functions in Python."
          },
          {
            q: "What allows a function to accept an arbitrary number of keyword arguments?",
            o: ["*args", "**kwargs", "&params", "$props"],
            a: 1,
            difficulty: "medium",
            explanation: "`**kwargs` collects arbitrary keyword arguments into a dictionary."
          },
          {
            q: "What is an anonymous, single-expression function called in Python?",
            o: ["closure", "arrow function", "lambda function", "inline def"],
            a: 2,
            difficulty: "easy",
            explanation: "Python creates anonymous functions using the `lambda` keyword."
          }
        ]
      },
      lists: {
        id: "lists",
        name: "Lists & Tuples",
        icon: "📋",
        desc: "List slicing, mutability, list comprehensions, and tuples.",
        questions: [
          {
            q: "What is the main difference between a list and a tuple in Python?",
            o: ["Lists are faster", "Lists are mutable, tuples are immutable", "Tuples cannot store strings", "Lists have fixed length"],
            a: 1,
            difficulty: "easy",
            explanation: "Lists `[ ]` can be modified after creation; tuples `( )` are immutable."
          },
          {
            q: "What does `arr[::-1]` do on a Python list?",
            o: ["Clears the list", "Reverses the list", "Sorts the list", "Returns the first element"],
            a: 1,
            difficulty: "easy",
            explanation: "A step of `-1` in slice syntax reverses the sequence."
          },
          {
            q: "What is the output of `[x * 2 for x in [1, 2, 3]]`?",
            o: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "6", "[2, 2, 2]"],
            a: 1,
            difficulty: "easy",
            explanation: "This list comprehension multiplies every item in the list by 2."
          }
        ]
      },
      dictionaries: {
        id: "dictionaries",
        name: "Dictionaries & Sets",
        icon: "📖",
        desc: "Key-value mappings, set operations, and hashing.",
        questions: [
          {
            q: "How do you access the value of key `'age'` in `d = {'age': 25}` safely without raising a KeyError?",
            o: ["d.fetch('age')", "d.get('age')", "d['age']", "d.find('age')"],
            a: 1,
            difficulty: "easy",
            explanation: "`d.get('key')` returns `None` (or a fallback default) if the key is missing."
          },
          {
            q: "Can a Python set contain duplicate values?",
            o: ["Yes", "No, sets contain only unique elements", "Only if strings", "Depends on initialization"],
            a: 1,
            difficulty: "easy",
            explanation: "Sets are unordered collections of unique elements."
          }
        ]
      },
      strings: {
        id: "strings",
        name: "Strings",
        icon: "🔤",
        desc: "f-strings, string formatting, splitting, and join.",
        questions: [
          {
            q: "What prefix is used for formatted string literals introduced in Python 3.6?",
            o: ["s\"...\"", "f\"...\"", "format\"...\"", "$\"...\""],
            a: 1,
            difficulty: "easy",
            explanation: "f-strings (prefixed with `f` or `F`) allow expressions inside curly braces `{name}`."
          },
          {
            q: "Which method joins elements of an iterable into a single string?",
            o: ["concat()", "join()", "merge()", "append()"],
            a: 1,
            difficulty: "easy",
            explanation: "`\"delimiter\".join(iterable)` concatenates items with the given delimiter."
          }
        ]
      },
      oop: {
        id: "oop",
        name: "OOP in Python",
        icon: "🧩",
        desc: "Classes, self, __init__, inheritance, and dunder methods.",
        questions: [
          {
            q: "What is the constructor method in a Python class?",
            o: ["__new__", "__init__", "constructor()", "__create__"],
            a: 1,
            difficulty: "easy",
            explanation: "`__init__` initializes newly created class instances."
          },
          {
            q: "What does the `self` parameter represent in an instance method?",
            o: ["The class object itself", "The current instance of the class", "The parent module", "The global namespace"],
            a: 1,
            difficulty: "easy",
            explanation: "`self` represents the specific instance invoking the method."
          }
        ]
      },
      file_handling: {
        id: "file_handling",
        name: "File Handling",
        icon: "📁",
        desc: "open(), with statements, context managers, and read/write.",
        questions: [
          {
            q: "Why is the `with open(...)` construct preferred for file operations?",
            o: ["It runs faster", "It guarantees the file is properly closed even if an exception occurs", "It writes directly to SSD", "It compresses file data"],
            a: 1,
            difficulty: "easy",
            explanation: "The `with` statement utilizes context management to automatically close files upon exit."
          },
          {
            q: "Which mode opens a file for writing and truncates it if it already exists?",
            o: ["'r'", "'w'", "'a'", "'x'"],
            a: 1,
            difficulty: "easy",
            explanation: "Mode `'w'` opens a file for writing and truncates existing content."
          }
        ]
      },
      exceptions: {
        id: "exceptions",
        name: "Exception Handling",
        icon: "🛡️",
        desc: "try, except, else, finally, and custom exceptions.",
        questions: [
          {
            q: "Which block handles an exception that occurs inside a `try` block?",
            o: ["catch", "except", "rescue", "handle"],
            a: 1,
            difficulty: "easy",
            explanation: "Python uses `except` to catch and handle exceptions."
          },
          {
            q: "What keyword is used to trigger an exception manually in Python?",
            o: ["throw", "raise", "error", "fire"],
            a: 1,
            difficulty: "easy",
            explanation: "In Python, exceptions are explicitly triggered with `raise`."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 4. JAVASCRIPT
  // ------------------------------------------------------------------------
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    category: "web",
    description: "The ubiquitous language of the web, browsers, Node.js, and modern full-stack development.",
    topics: {
      basics: {
        id: "basics",
        name: "Basics & Syntax",
        icon: "🔰",
        desc: "Console, data types, dynamic typing, and primitive values.",
        questions: [
          {
            q: "Which keyword outputs information to the web browser developer console?",
            o: ["print()", "console.log()", "document.write()", "terminal.out()"],
            a: 1,
            difficulty: "easy",
            explanation: "`console.log()` prints debugging information to the browser console."
          },
          {
            q: "What is the result of `typeof NaN` in JavaScript?",
            o: ["'nan'", "'undefined'", "'number'", "'object'"],
            a: 2,
            difficulty: "medium",
            explanation: "In JavaScript, NaN (Not a Number) is technically a numeric data type."
          },
          {
            q: "What does `typeof null` evaluate to due to a legacy design quirk?",
            o: ["'null'", "'undefined'", "'object'", "'boolean'"],
            a: 2,
            difficulty: "medium",
            explanation: "`typeof null` returns `'object'` because of how early JS represented type tags in memory."
          }
        ]
      },
      variables: {
        id: "variables",
        name: "Variables & Scope",
        icon: "📦",
        desc: "var, let, const, hoisting, and block vs function scope.",
        questions: [
          {
            q: "Which keyword creates a block-scoped reassignable variable?",
            o: ["var", "let", "const", "def"],
            a: 1,
            difficulty: "easy",
            explanation: "`let` has block scope `{}` and permits reassignment."
          },
          {
            q: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
            o: ["Memory leak in closures", "The period between entering scope and variable declaration with let/const", "Time before garbage collection", "Async setTimeout delay"],
            a: 1,
            difficulty: "hard",
            explanation: "Variables declared with `let` and `const` cannot be accessed before their declaration line."
          },
          {
            q: "Does `const` mean that object properties cannot be modified?",
            o: ["Yes, entire object is frozen", "No, the variable binding is immutable, but the object itself remains mutable", "Only in strict mode", "Yes, throws TypeError"],
            a: 1,
            difficulty: "medium",
            explanation: "`const` prevents reassignment of the variable reference, but object properties can still be modified."
          }
        ]
      },
      operators: {
        id: "operators",
        name: "Operators",
        icon: "➕",
        desc: "Equality (== vs ===), nullish coalescing, and logical operators.",
        questions: [
          {
            q: "What is the difference between `==` and `===`?",
            o: ["No difference", "`===` checks both value and type without coercion", "`==` is faster", "`===` assigns values"],
            a: 1,
            difficulty: "easy",
            explanation: "Strict equality `===` does not perform implicit type coercion."
          },
          {
            q: "What does the nullish coalescing operator `??` check for?",
            o: ["Falsy values (0, false, '')", "Only null or undefined", "NaN only", "Negative numbers"],
            a: 1,
            difficulty: "medium",
            explanation: "`a ?? b` returns `b` only if `a` is strictly `null` or `undefined`."
          }
        ]
      },
      conditionals: {
        id: "conditionals",
        name: "Conditionals & Loops",
        icon: "🔁",
        desc: "if/else, switch, for-of, and for-in loops.",
        questions: [
          {
            q: "Which loop iterates over values of an iterable like an Array?",
            o: ["for...in", "for...of", "for...each", "repeat...while"],
            a: 1,
            difficulty: "easy",
            explanation: "`for...of` iterates over iterable values; `for...in` iterates over object keys."
          },
          {
            q: "Which of the following is considered falsy in JavaScript?",
            o: ["[]", "'false'", "0", "{}"],
            a: 2,
            difficulty: "easy",
            explanation: "In JavaScript, `0`, `\"\"`, `null`, `undefined`, `NaN`, and `false` are falsy."
          }
        ]
      },
      functions: {
        id: "functions",
        name: "Functions & Arrow Functions",
        icon: "⚙️",
        desc: "Arrow functions, lexical this, closures, and default arguments.",
        questions: [
          {
            q: "How do arrow functions handle the `this` keyword?",
            o: ["They bind this to window", "They lexically inherit `this` from the enclosing scope", "They have their own dynamic this", "They throw an error if this is used"],
            a: 1,
            difficulty: "medium",
            explanation: "Arrow functions do not bind their own `this`; they capture it from the outer lexical context."
          },
          {
            q: "What is a closure in JavaScript?",
            o: ["A function bundled together with references to its surrounding lexical environment", "A function that has terminated", "A private class constructor", "A syntax error"],
            a: 0,
            difficulty: "medium",
            explanation: "A closure gives a function access to its outer scope even after the outer function has finished executing."
          }
        ]
      },
      arrays: {
        id: "arrays",
        name: "Arrays & Methods",
        icon: "📊",
        desc: "map, filter, reduce, find, slice, and splice.",
        questions: [
          {
            q: "Which array method creates a new array populated with the results of calling a provided function?",
            o: ["forEach()", "map()", "filter()", "push()"],
            a: 1,
            difficulty: "easy",
            explanation: "`map()` transforms each item and returns a new array."
          },
          {
            q: "Which method mutates the original array in JavaScript?",
            o: ["slice()", "concat()", "splice()", "filter()"],
            a: 2,
            difficulty: "medium",
            explanation: "`splice()` mutates the original array in place by removing or inserting elements."
          },
          {
            q: "What does `[3, 1, 20].sort()` evaluate to by default in JS?",
            o: ["[1, 3, 20]", "[1, 20, 3]", "[20, 3, 1]", "TypeError"],
            a: 1,
            difficulty: "medium",
            explanation: "By default, `.sort()` converts items to strings and compares UTF-16 code units, placing `'20'` before `'3'`."
          }
        ]
      },
      dom: {
        id: "dom",
        name: "DOM Manipulation",
        icon: "🌐",
        desc: "querySelector, event listeners, bubbling, and element creation.",
        questions: [
          {
            q: "Which method selects the first element matching a CSS selector?",
            o: ["document.find()", "document.querySelector()", "document.getElement()", "document.selectFirst()"],
            a: 1,
            difficulty: "easy",
            explanation: "`querySelector()` matches the first element satisfying the CSS selector."
          },
          {
            q: "What method registers an event handler on a DOM element?",
            o: ["attach()", "addEventListener()", "on()", "bindEvent()"],
            a: 1,
            difficulty: "easy",
            explanation: "`addEventListener()` attaches an event listener function to an element."
          }
        ]
      },
      async: {
        id: "async",
        name: "Async JS & Promises",
        icon: "⚡",
        desc: "Promises, async/await, event loop, and fetch API.",
        questions: [
          {
            q: "What are the three states of a JavaScript Promise?",
            o: ["Waiting, Active, Done", "Pending, Fulfilled, Rejected", "Init, Running, Error", "Open, Processing, Closed"],
            a: 1,
            difficulty: "easy",
            explanation: "Promises are always in one of three states: pending, fulfilled, or rejected."
          },
          {
            q: "What does an `async` function always return?",
            o: ["A boolean", "A Promise", "Undefined", "The value synchronously"],
            a: 1,
            difficulty: "easy",
            explanation: "`async` functions automatically wrap their return values in a Promise."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 5. C++
  // ------------------------------------------------------------------------
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "🅲⁺⁺",
    category: "systems",
    description: "High-performance systems programming with classes, templates, and STL.",
    topics: {
      basics: {
        id: "basics",
        name: "C++ Basics",
        icon: "🔰",
        desc: "Cin, cout, namespaces, references, and headers.",
        questions: [
          {
            q: "Which stream object is used to print output to standard console in C++?",
            o: ["cin", "cout", "printf", "out"],
            a: 1,
            difficulty: "easy",
            explanation: "`std::cout` represents the standard character output stream."
          },
          {
            q: "Which header is required for `cin` and `cout`?",
            o: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<stream>"],
            a: 1,
            difficulty: "easy",
            explanation: "`#include <iostream>` provides the standard stream objects."
          }
        ]
      },
      oop: {
        id: "oop",
        name: "OOP & Classes",
        icon: "🧩",
        desc: "Constructors, destructors, access specifiers, and operator overloading.",
        questions: [
          {
            q: "What is the default access specifier for members of a `class` in C++?",
            o: ["public", "private", "protected", "friend"],
            a: 1,
            difficulty: "easy",
            explanation: "In C++, `class` members are private by default; `struct` members are public by default."
          },
          {
            q: "What symbol precedes the destructor name in C++?",
            o: ["!", "~", "#", "$"],
            a: 1,
            difficulty: "easy",
            explanation: "Destructors are denoted by a tilde `~` before the class name (e.g. `~MyClass()`)."
          }
        ]
      },
      stl: {
        id: "stl",
        name: "STL Containers",
        icon: "🧰",
        desc: "vector, map, set, iterators, and algorithms.",
        questions: [
          {
            q: "Which STL container represents a dynamically resizable array?",
            o: ["std::array", "std::vector", "std::list", "std::deque"],
            a: 1,
            difficulty: "easy",
            explanation: "`std::vector` is a sequence container encapsulating dynamic arrays."
          },
          {
            q: "What is the average time complexity for insertion into `std::unordered_map`?",
            o: ["O(log n)", "O(1)", "O(n)", "O(n^2)"],
            a: 1,
            difficulty: "medium",
            explanation: "`std::unordered_map` uses hashing to provide average O(1) operations."
          }
        ]
      },
      pointers: {
        id: "pointers",
        name: "Pointers & References",
        icon: "🎯",
        desc: "Raw pointers, references, smart pointers (unique_ptr, shared_ptr).",
        questions: [
          {
            q: "Which smart pointer owns and manages another object through unique ownership?",
            o: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"],
            a: 1,
            difficulty: "medium",
            explanation: "`std::unique_ptr` maintains sole ownership of a resource."
          },
          {
            q: "Can a C++ reference `int &ref = x;` be reseated to refer to another variable?",
            o: ["Yes, anytime", "No, references cannot be reseated after binding", "Only with std::move", "Only if declared mutable"],
            a: 1,
            difficulty: "medium",
            explanation: "References must be initialized on declaration and can never be rebound to another object."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 6. HTML
  // ------------------------------------------------------------------------
  html: {
    id: "html",
    name: "HTML",
    icon: "🌐",
    category: "web",
    description: "HyperText Markup Language, the standard structure and backbone of web documents.",
    topics: {
      basics: {
        id: "basics",
        name: "Basics & Structure",
        icon: "🔰",
        desc: "Doctype, head, body, meta tags, and element attributes.",
        questions: [
          {
            q: "What does HTML stand for?",
            o: ["Hyper Trainer Marking Language", "HyperText Markup Language", "Hyper Tool Multi Language", "Home Tool Markup Language"],
            a: 1,
            difficulty: "easy",
            explanation: "HTML stands for HyperText Markup Language."
          },
          {
            q: "Which tag declares the document type for HTML5?",
            o: ["<!DOCTYPE html>", "<html5>", "<!DOCTYPE HTML5>", "<doctype>"],
            a: 0,
            difficulty: "easy",
            explanation: "`<!DOCTYPE html>` is the standard declaration for HTML5."
          }
        ]
      },
      forms: {
        id: "forms",
        name: "Forms & Inputs",
        icon: "📝",
        desc: "Form tag, inputs, labels, buttons, validation, and submission.",
        questions: [
          {
            q: "Which input type creates a password field that hides user input?",
            o: ["type='secret'", "type='password'", "type='hidden'", "type='secure'"],
            a: 1,
            difficulty: "easy",
            explanation: "`<input type='password'>` masks input characters."
          },
          {
            q: "Which attribute specifies where to send form-data when a form is submitted?",
            o: ["method", "action", "target", "href"],
            a: 1,
            difficulty: "easy",
            explanation: "The `action` attribute specifies the URL processing the form data."
          }
        ]
      },
      semantic: {
        id: "semantic",
        name: "Semantic HTML",
        icon: "🏷️",
        desc: "header, nav, article, section, aside, footer, and accessibility.",
        questions: [
          {
            q: "Which semantic tag represents navigation links in HTML5?",
            o: ["<menu>", "<nav>", "<links>", "<navigate>"],
            a: 1,
            difficulty: "easy",
            explanation: "`<nav>` is the semantic container for primary navigation links."
          },
          {
            q: "Which HTML5 tag is designed for self-contained, syndicate-ready content?",
            o: ["<div>", "<section>", "<article>", "<aside>"],
            a: 2,
            difficulty: "medium",
            explanation: "`<article>` defines independent, reusable pieces of content."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 7. CSS
  // ------------------------------------------------------------------------
  css: {
    id: "css",
    name: "CSS",
    icon: "🎨",
    category: "web",
    description: "Cascading Style Sheets for layout, modern typography, animations, and responsive design.",
    topics: {
      box_model: {
        id: "box_model",
        name: "Selectors & Box Model",
        icon: "📦",
        desc: "Margin, border, padding, content, and box-sizing.",
        questions: [
          {
            q: "What components make up the CSS Box Model from inside out?",
            o: ["Content, Margin, Padding, Border", "Content, Padding, Border, Margin", "Padding, Content, Border, Margin", "Border, Content, Padding, Margin"],
            a: 1,
            difficulty: "easy",
            explanation: "From inside out: Content -> Padding -> Border -> Margin."
          },
          {
            q: "What CSS property ensures padding and border are included in an element's total width and height?",
            o: ["box-sizing: border-box;", "box-sizing: content-box;", "box-model: include;", "display: border-box;"],
            a: 0,
            difficulty: "easy",
            explanation: "`box-sizing: border-box` makes width calculate including padding and border."
          }
        ]
      },
      flexbox: {
        id: "flexbox",
        name: "Flexbox Layout",
        icon: "📐",
        desc: "justify-content, align-items, flex-direction, and flex-grow.",
        questions: [
          {
            q: "Which property aligns flex items along the main axis?",
            o: ["align-items", "justify-content", "align-content", "text-align"],
            a: 1,
            difficulty: "easy",
            explanation: "`justify-content` aligns items along the flex container's main axis."
          },
          {
            q: "What value of `flex-direction` arranges items vertically?",
            o: ["row", "column", "vertical", "stack"],
            a: 1,
            difficulty: "easy",
            explanation: "`flex-direction: column` lays out items top-to-bottom."
          }
        ]
      },
      grid: {
        id: "grid",
        name: "CSS Grid",
        icon: "▦",
        desc: "grid-template-columns, gap, fr units, and grid areas.",
        questions: [
          {
            q: "What unit represents a fraction of available space in CSS Grid?",
            o: ["px", "%", "fr", "em"],
            a: 2,
            difficulty: "easy",
            explanation: "`fr` represents a fractional unit of the free grid container space."
          },
          {
            q: "Which shorthand property sets spacing between rows and columns in CSS Grid?",
            o: ["margin", "gap", "spacing", "grid-padding"],
            a: 1,
            difficulty: "easy",
            explanation: "The `gap` property defines the gutter size between rows and columns."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 8. SQL
  // ------------------------------------------------------------------------
  sql: {
    id: "sql",
    name: "SQL",
    icon: "🗄️",
    category: "database",
    description: "Structured Query Language for relational database querying, design, and management.",
    topics: {
      basics: {
        id: "basics",
        name: "Basic Queries",
        icon: "🔍",
        desc: "SELECT, WHERE, DISTINCT, ORDER BY, and LIMIT.",
        questions: [
          {
            q: "Which SQL clause filters records based on specific criteria?",
            o: ["FILTER", "WHERE", "ORDER BY", "HAVING"],
            a: 1,
            difficulty: "easy",
            explanation: "The `WHERE` clause specifies search conditions to filter rows."
          },
          {
            q: "Which SQL keyword sorts the result set in ascending or descending order?",
            o: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"],
            a: 1,
            difficulty: "easy",
            explanation: "`ORDER BY column [ASC|DESC]` sorts the returned rows."
          }
        ]
      },
      joins: {
        id: "joins",
        name: "SQL Joins",
        icon: "🔗",
        desc: "INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
        questions: [
          {
            q: "Which JOIN returns all rows from the left table and matching rows from the right table?",
            o: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
            a: 1,
            difficulty: "easy",
            explanation: "`LEFT JOIN` returns all left table records with nulls for non-matching right records."
          },
          {
            q: "What does an `INNER JOIN` return?",
            o: ["All records from both tables", "Only rows that have matching values in both tables", "All unmatched rows", "Cartesian product only"],
            a: 1,
            difficulty: "easy",
            explanation: "`INNER JOIN` selects rows that have matching values in both tables."
          }
        ]
      },
      aggregates: {
        id: "aggregates",
        name: "Aggregate Functions & GROUP BY",
        icon: "📈",
        desc: "COUNT, SUM, AVG, MIN, MAX, GROUP BY, and HAVING.",
        questions: [
          {
            q: "Which clause filters groups created by the `GROUP BY` statement?",
            o: ["WHERE", "HAVING", "FILTER", "LIMIT"],
            a: 1,
            difficulty: "medium",
            explanation: "`HAVING` filters aggregated groups; `WHERE` filters individual rows before grouping."
          },
          {
            q: "Which function calculates the total number of rows matching a query?",
            o: ["TOTAL()", "COUNT()", "SUM()", "ROWS()"],
            a: 1,
            difficulty: "easy",
            explanation: "`COUNT()` counts records matching specified conditions."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 9. DART
  // ------------------------------------------------------------------------
  dart: {
    id: "dart",
    name: "Dart",
    icon: "🎯",
    category: "scripting",
    description: "Client-optimized programming language power-driving Flutter apps and fast cross-platform UIs.",
    topics: {
      basics: {
        id: "basics",
        name: "Dart Basics",
        icon: "🔰",
        desc: "Main function, sound null safety, and basic types.",
        questions: [
          {
            q: "Which framework was Dart primarily designed to power for mobile and cross-platform apps?",
            o: ["React Native", "Flutter", "Ionic", "Xamarin"],
            a: 1,
            difficulty: "easy",
            explanation: "Dart is the primary programming language behind Google's Flutter framework."
          },
          {
            q: "How do you declare a nullable integer variable in modern sound-null-safe Dart?",
            o: ["int? x;", "nullable int x;", "int x = null;", "optional<int> x;"],
            a: 0,
            difficulty: "easy",
            explanation: "A question mark `?` denotes nullable types in Dart (e.g., `int?`)."
          }
        ]
      },
      oop: {
        id: "oop",
        name: "OOP & Classes",
        icon: "🧩",
        desc: "Constructors, mixins, factory constructors, and cascade operators.",
        questions: [
          {
            q: "Which keyword allows reusing a class's code in multiple class hierarchies without inheritance in Dart?",
            o: ["extends", "implements", "mixin / with", "include"],
            a: 2,
            difficulty: "medium",
            explanation: "Mixins (applied using the `with` keyword) provide code reuse across multiple class trees."
          },
          {
            q: "What is the cascade operator `..` used for in Dart?",
            o: ["Concatenating strings", "Performing a sequence of operations on the same object", "Exponentiation", "Bitwise comparison"],
            a: 1,
            difficulty: "medium",
            explanation: "The cascade operator `..` (or `?..`) chains multiple method calls or property assignments on the same object."
          }
        ]
      },
      async: {
        id: "async",
        name: "Asynchronous Dart",
        icon: "⚡",
        desc: "Future, Stream, async/await, and event loops.",
        questions: [
          {
            q: "Which object represents a potential value or error that will be available in the future in Dart?",
            o: ["Promise", "Future", "Deferred", "Observable"],
            a: 1,
            difficulty: "easy",
            explanation: "A `Future` represents an asynchronous computation result."
          },
          {
            q: "What type provides a sequence of asynchronous events over time in Dart?",
            o: ["Future", "Stream", "Sequence", "Emitter"],
            a: 1,
            difficulty: "easy",
            explanation: "A `Stream` represents an asynchronous sequence of data events."
          }
        ]
      }
    }
  },

  // ------------------------------------------------------------------------
  // 10. TYPESCRIPT
  // ------------------------------------------------------------------------
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "🔷",
    category: "web",
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
    topics: {
      basics: {
        id: "basics",
        name: "Basics & Types",
        icon: "🔰",
        desc: "Static typing, interfaces, type aliases, and unions.",
        questions: [
          {
            q: "What is TypeScript?",
            o: ["A separate runtime engine", "A typed syntactic superset of JavaScript", "A replacement for CSS", "A database query language"],
            a: 1,
            difficulty: "easy",
            explanation: "TypeScript extends JavaScript by adding static type definitions."
          },
          {
            q: "Which keyword declares a custom type structure or object contract in TypeScript?",
            o: ["struct", "interface", "protocol", "contract"],
            a: 1,
            difficulty: "easy",
            explanation: "`interface` defines shape contracts for objects in TypeScript."
          }
        ]
      },
      generics: {
        id: "generics",
        name: "Generics",
        icon: "🧬",
        desc: "Generic functions, classes, and constraints.",
        questions: [
          {
            q: "What syntax represents generic type arguments in TypeScript?",
            o: ["(T)", "[T]", "<T>", "{T}"],
            a: 2,
            difficulty: "easy",
            explanation: "Angle brackets `<T>` define generic type parameters."
          }
        ]
      }
    }
  }
};

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentLangKey = "c";
let currentTopicKey = "arrays";
let quizSettings = {
  count: 10,
  difficulty: "mixed"
};

let activeQuiz = {
  questions: [],
  currentIndex: 0,
  userAnswers: [], // Stores option index selected by user for each question
  startTime: null,
  endTime: null,
  isFinished: false
};

// ==========================================================================
// HELPER FUNCTIONS & UTILITIES
// ==========================================================================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  updateNavBreadcrumbs(screenId);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function updateNavBreadcrumbs(screenId) {
  const trail = document.getElementById("breadcrumbTrail");
  const badge = document.getElementById("navBadge");
  if (!trail) return;

  if (screenId === "home-screen") {
    trail.innerHTML = `<span class="crumb-active">Languages</span>`;
    if (badge) badge.textContent = `${Object.keys(quizData).length} Languages`;
  } else if (screenId === "topics-screen") {
    const lang = quizData[currentLangKey];
    trail.innerHTML = `
      <span onclick="goHome()" style="cursor:pointer">Languages</span>
      <span class="separator">/</span>
      <span class="crumb-active">${lang ? lang.name : "Topics"}</span>
    `;
    if (badge && lang) {
      const topicCount = Object.keys(lang.topics).length;
      badge.textContent = `${topicCount} Topics`;
    }
  } else if (screenId === "quiz-screen") {
    const lang = quizData[currentLangKey];
    const topic = lang?.topics[currentTopicKey];
    trail.innerHTML = `
      <span onclick="goHome()" style="cursor:pointer">Home</span>
      <span class="separator">/</span>
      <span onclick="goToTopics()" style="cursor:pointer">${lang ? lang.name : ""}</span>
      <span class="separator">/</span>
      <span class="crumb-active">${topic ? topic.name : "Quiz"}</span>
    `;
    if (badge) {
      badge.textContent = `${activeQuiz.questions.length} Questions`;
    }
  } else if (screenId === "result-screen" || screenId === "review-screen") {
    const lang = quizData[currentLangKey];
    const topic = lang?.topics[currentTopicKey];
    trail.innerHTML = `
      <span onclick="goHome()" style="cursor:pointer">Home</span>
      <span class="separator">/</span>
      <span class="crumb-active">${topic ? topic.name : "Results"}</span>
    `;
  }
}

// ==========================================================================
// SCREEN 1: PROGRAMMING LANGUAGES
// ==========================================================================
function renderLanguages(filter = "all", searchQuery = "") {
  const container = document.getElementById("languagesGrid");
  if (!container) return;

  container.innerHTML = "";
  const query = searchQuery.trim().toLowerCase();

  const langKeys = Object.keys(quizData);
  let matchCount = 0;

  langKeys.forEach(key => {
    const lang = quizData[key];

    // Filter by category
    if (filter !== "all" && lang.category !== filter) return;

    // Filter by search query
    if (query && !lang.name.toLowerCase().includes(query) && !lang.description.toLowerCase().includes(query)) {
      return;
    }

    matchCount++;
    const topicCount = Object.keys(lang.topics).length;
    let questionCount = 0;
    Object.values(lang.topics).forEach(t => questionCount += t.questions.length);

    const card = document.createElement("div");
    card.className = "lang-card";
    card.onclick = () => selectLanguage(key);

    card.innerHTML = `
      <div class="lang-icon-wrap">${lang.icon}</div>
      <h3 class="lang-name">${lang.name}</h3>
      <p class="lang-desc">${lang.description}</p>
      <div class="lang-footer">
        <span class="topic-count">${topicCount} Topics • ${questionCount}+ Qs</span>
        <span class="lang-arrow">Select →</span>
      </div>
    `;

    container.appendChild(card);
  });

  if (matchCount === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 32px; margin-bottom: 8px;">🔍</p>
        <p>No programming languages found matching "<strong>${searchQuery}</strong>".</p>
      </div>
    `;
  }
}

function selectLanguage(langKey) {
  if (!quizData[langKey]) return;
  currentLangKey = langKey;
  renderTopics();
  showScreen("topics-screen");
}

function filterLanguages(category, element) {
  document.querySelectorAll(".filter-pill").forEach(el => el.classList.remove("active"));
  if (element) element.classList.add("active");
  const searchInput = document.getElementById("langSearchInput");
  renderLanguages(category, searchInput ? searchInput.value : "");
}

// ==========================================================================
// SCREEN 2: TOPICS SELECTION
// ==========================================================================
function renderTopics(searchQuery = "") {
  const lang = quizData[currentLangKey];
  if (!lang) return;

  // Banner details
  const iconEl = document.getElementById("topicBannerIcon");
  const titleEl = document.getElementById("topicBannerTitle");
  const descEl = document.getElementById("topicBannerDesc");

  if (iconEl) iconEl.textContent = lang.icon;
  if (titleEl) titleEl.textContent = `${lang.name} Topics`;
  if (descEl) descEl.textContent = `Choose a topic below to test your ${lang.name} knowledge with targeted questions.`;

  const container = document.getElementById("topicsGrid");
  if (!container) return;
  container.innerHTML = "";

  const query = searchQuery.trim().toLowerCase();
  const topicKeys = Object.keys(lang.topics);
  let matches = 0;

  topicKeys.forEach(tKey => {
    const topic = lang.topics[tKey];
    if (query && !topic.name.toLowerCase().includes(query) && !topic.desc.toLowerCase().includes(query)) {
      return;
    }

    matches++;
    const card = document.createElement("div");
    card.className = "topic-card";
    card.onclick = () => openQuizSettings(tKey);

    card.innerHTML = `
      <div>
        <div class="topic-card-top">
          <div class="topic-icon-badge">${topic.icon || "📘"}</div>
          <h4 class="topic-title">${topic.name}</h4>
        </div>
        <p class="topic-desc">${topic.desc}</p>
      </div>
      <div class="topic-card-footer">
        <span class="q-count-tag">${topic.questions.length} Questions</span>
        <button class="primary btn-sm" onclick="event.stopPropagation(); openQuizSettings('${tKey}')">
          Start Quiz →
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (matches === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 32px; margin-bottom: 8px;">📂</p>
        <p>No topics found matching "<strong>${searchQuery}</strong>".</p>
      </div>
    `;
  }
}

// ==========================================================================
// QUIZ SETTINGS MODAL
// ==========================================================================
function openQuizSettings(topicKey) {
  const lang = quizData[currentLangKey];
  if (!lang || !lang.topics[topicKey]) return;

  currentTopicKey = topicKey;
  const topic = lang.topics[topicKey];

  const modalBadge = document.getElementById("modalTopicBadge");
  const modalNote = document.getElementById("modalInfoNote");

  if (modalBadge) {
    modalBadge.textContent = `${lang.name} → ${topic.name}`;
  }

  if (modalNote) {
    modalNote.innerHTML = `This topic contains <strong>${topic.questions.length}</strong> verified questions. If you select more questions than available, all matching questions will be loaded.`;
  }

  // Set default active chips
  setQuestionCountChip(quizSettings.count);
  setDifficultyChip(quizSettings.difficulty);

  const modal = document.getElementById("settingsModal");
  if (modal) modal.classList.add("active");
}

function closeQuizSettings() {
  const modal = document.getElementById("settingsModal");
  if (modal) modal.classList.remove("active");
}

function setQuestionCountChip(count) {
  quizSettings.count = parseInt(count, 10);
  document.querySelectorAll("[data-q-count]").forEach(el => {
    if (parseInt(el.getAttribute("data-q-count"), 10) === quizSettings.count) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
}

function setDifficultyChip(difficulty) {
  quizSettings.difficulty = difficulty;
  document.querySelectorAll("[data-diff]").forEach(el => {
    if (el.getAttribute("data-diff") === difficulty) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
}

// ==========================================================================
// SCREEN 3: ACTIVE QUIZ ENGINE
// ==========================================================================
function startQuiz() {
  closeQuizSettings();

  const lang = quizData[currentLangKey];
  const topic = lang?.topics[currentTopicKey];
  if (!topic || !topic.questions.length) {
    alert("No questions available for this topic!");
    return;
  }

  // Filter by difficulty if not 'mixed'
  let pool = [...topic.questions];
  if (quizSettings.difficulty !== "mixed") {
    const filtered = pool.filter(q => q.difficulty === quizSettings.difficulty);
    if (filtered.length > 0) {
      pool = filtered;
    }
    // If not enough for the specific difficulty, pool keeps all questions as fallback!
  }

  // Shuffle questions
  pool = shuffleArray(pool);

  // Take desired count (or all available if pool is smaller)
  const countToTake = Math.min(quizSettings.count, pool.length);
  activeQuiz.questions = pool.slice(0, countToTake);
  activeQuiz.currentIndex = 0;
  activeQuiz.userAnswers = new Array(activeQuiz.questions.length).fill(null);
  activeQuiz.startTime = Date.now();
  activeQuiz.endTime = null;
  activeQuiz.isFinished = false;

  showScreen("quiz-screen");
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const lang = quizData[currentLangKey];
  const topic = lang?.topics[currentTopicKey];
  const qData = activeQuiz.questions[activeQuiz.currentIndex];
  if (!qData) return;

  const total = activeQuiz.questions.length;
  const currentNum = activeQuiz.currentIndex + 1;

  // Header meta tags
  const topicPill = document.getElementById("quizTopicPill");
  const diffPill = document.getElementById("quizDiffPill");
  const counter = document.getElementById("counter");
  const scoreLive = document.getElementById("liveScore");
  const progressBar = document.getElementById("bar");

  if (topicPill) topicPill.textContent = `${lang.name} → ${topic.name}`;
  if (diffPill) {
    diffPill.textContent = qData.difficulty;
    diffPill.className = `diff-pill diff-${qData.difficulty}`;
  }

  if (counter) counter.textContent = `Question ${currentNum} of ${total}`;

  // Current calculated score based on answered questions
  let currentScore = 0;
  activeQuiz.userAnswers.forEach((ans, idx) => {
    if (ans !== null && activeQuiz.questions[idx] && ans === activeQuiz.questions[idx].a) {
      currentScore++;
    }
  });
  if (scoreLive) scoreLive.textContent = `Score: ${currentScore}`;

  // Progress Bar
  const progressPercent = Math.round((currentNum / total) * 100);
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  // Question Prompt
  const qNumTag = document.getElementById("questionNumTag");
  const qText = document.getElementById("questionText");
  if (qNumTag) qNumTag.textContent = `Question ${currentNum} of ${total}`;
  if (qText) qText.textContent = qData.q;

  // Options
  const optionsBox = document.getElementById("optionsBox");
  if (!optionsBox) return;
  optionsBox.innerHTML = "";

  const prefixes = ["A", "B", "C", "D"];
  const currentSelection = activeQuiz.userAnswers[activeQuiz.currentIndex];

  qData.o.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    if (currentSelection === optIdx) {
      btn.classList.add("selected");
    }

    btn.innerHTML = `
      <span class="option-prefix">${prefixes[optIdx] || optIdx + 1}</span>
      <span class="option-text">${optText}</span>
      <span class="option-status-icon">✓</span>
    `;

    btn.onclick = () => selectOption(optIdx);
    optionsBox.appendChild(btn);
  });

  // Hide selection warning
  hideSelectionHint();

  // Navigation button states
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.disabled = activeQuiz.currentIndex === 0;
    if (activeQuiz.currentIndex === 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }
  }

  if (nextBtn) {
    if (activeQuiz.currentIndex === total - 1) {
      nextBtn.textContent = "Submit Quiz 🎉";
    } else {
      nextBtn.textContent = "Next →";
    }
  }
}

function selectOption(index) {
  activeQuiz.userAnswers[activeQuiz.currentIndex] = index;
  hideSelectionHint();

  // Re-highlight options
  const optionButtons = document.querySelectorAll("#optionsBox .option");
  optionButtons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  // Update live score
  let currentScore = 0;
  activeQuiz.userAnswers.forEach((ans, idx) => {
    if (ans !== null && activeQuiz.questions[idx] && ans === activeQuiz.questions[idx].a) {
      currentScore++;
    }
  });
  const scoreLive = document.getElementById("liveScore");
  if (scoreLive) scoreLive.textContent = `Score: ${currentScore}`;
}

function showSelectionHint() {
  const hint = document.getElementById("selectionHint");
  if (hint) {
    hint.classList.remove("show");
    void hint.offsetWidth; // Trigger reflow for shake animation
    hint.classList.add("show");
  }
}

function hideSelectionHint() {
  const hint = document.getElementById("selectionHint");
  if (hint) hint.classList.remove("show");
}

function prevQuestion() {
  if (activeQuiz.currentIndex > 0) {
    activeQuiz.currentIndex--;
    renderCurrentQuestion();
  }
}

function nextQuestion() {
  // Validate that an option is selected before proceeding
  const currentSelection = activeQuiz.userAnswers[activeQuiz.currentIndex];
  if (currentSelection === null || currentSelection === undefined) {
    showSelectionHint();
    return;
  }

  if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
    activeQuiz.currentIndex++;
    renderCurrentQuestion();
  } else {
    // Last question: finish quiz!
    finishQuiz();
  }
}

function exitQuiz() {
  const confirmed = confirm("Are you sure you want to exit the quiz? Your current progress will be lost.");
  if (confirmed) {
    goToTopics();
  }
}

// ==========================================================================
// SCREEN 4: FINAL RESULTS
// ==========================================================================
function finishQuiz() {
  activeQuiz.endTime = Date.now();
  activeQuiz.isFinished = true;

  const total = activeQuiz.questions.length;
  let correct = 0;

  activeQuiz.questions.forEach((q, idx) => {
    if (activeQuiz.userAnswers[idx] === q.a) {
      correct++;
    }
  });

  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 100);

  // Star Rating Calculation
  let stars = "⭐⭐⭐⭐⭐";
  if (percentage >= 90) stars = "⭐⭐⭐⭐⭐";
  else if (percentage >= 75) stars = "⭐⭐⭐⭐";
  else if (percentage >= 50) stars = "⭐⭐⭐";
  else if (percentage >= 30) stars = "⭐⭐";
  else stars = "⭐";

  // Dynamic Feedback Message
  let message = "";
  if (percentage === 100) {
    message = "Outstanding! Perfect score! You have completely mastered this topic.";
  } else if (percentage >= 80) {
    message = "Excellent work! You demonstrate strong technical proficiency in this topic.";
  } else if (percentage >= 60) {
    message = "Good job! You have a solid grasp, but there are a few areas you can brush up on.";
  } else if (percentage >= 40) {
    message = "Fair effort! Review the detailed answers below to learn from your mistakes.";
  } else {
    message = "Keep practicing! Review the explanations below and try the quiz again.";
  }

  // Populate Result Screen
  const finalScoreEl = document.getElementById("finalScore");
  const percentageBadge = document.getElementById("percentageBadge");
  const starsEl = document.getElementById("resultStars");
  const messageEl = document.getElementById("resultMessage");
  const correctEl = document.getElementById("statCorrect");
  const wrongEl = document.getElementById("statWrong");
  const accuracyEl = document.getElementById("statAccuracy");
  const totalEl = document.getElementById("statTotal");

  const langTag = document.getElementById("resultLangTag");
  const topicTag = document.getElementById("resultTopicTag");
  const diffTag = document.getElementById("resultDiffTag");

  const lang = quizData[currentLangKey];
  const topic = lang?.topics[currentTopicKey];

  if (finalScoreEl) finalScoreEl.textContent = `${correct} / ${total}`;
  if (percentageBadge) percentageBadge.textContent = `${percentage}% Score`;
  if (starsEl) starsEl.textContent = stars;
  if (messageEl) messageEl.textContent = message;

  if (correctEl) correctEl.textContent = correct;
  if (wrongEl) wrongEl.textContent = wrong;
  if (accuracyEl) accuracyEl.textContent = `${percentage}%`;
  if (totalEl) totalEl.textContent = total;

  if (langTag) langTag.textContent = lang ? lang.name : "";
  if (topicTag) topicTag.textContent = topic ? topic.name : "";
  if (diffTag) {
    diffTag.textContent = quizSettings.difficulty.toUpperCase();
    diffTag.className = `diff-pill diff-${quizSettings.difficulty}`;
  }

  showScreen("result-screen");
}

// ==========================================================================
// SCREEN 5: ANSWER REVIEW ENGINE
// ==========================================================================
let currentReviewFilter = "all";

function openReview(filter = "all") {
  currentReviewFilter = filter;
  const lang = quizData[currentLangKey];
  const topic = lang?.topics[currentTopicKey];

  const total = activeQuiz.questions.length;
  let correctCount = 0;
  activeQuiz.questions.forEach((q, idx) => {
    if (activeQuiz.userAnswers[idx] === q.a) correctCount++;
  });
  const wrongCount = total - correctCount;

  // Header texts
  const titleEl = document.getElementById("reviewTitle");
  const subtitleEl = document.getElementById("reviewSubtitle");
  if (titleEl) titleEl.textContent = `📋 Review Answers: ${lang?.name} → ${topic?.name}`;
  if (subtitleEl) subtitleEl.textContent = `Total: ${total} • Correct: ${correctCount} • Wrong: ${wrongCount} • Accuracy: ${Math.round((correctCount / total) * 100)}%`;

  // Update tab counters
  const tabAll = document.getElementById("reviewTabAll");
  const tabCorrect = document.getElementById("reviewTabCorrect");
  const tabWrong = document.getElementById("reviewTabWrong");

  if (tabAll) tabAll.textContent = `All Questions (${total})`;
  if (tabCorrect) tabCorrect.textContent = `✅ Correct (${correctCount})`;
  if (tabWrong) tabWrong.textContent = `❌ Wrong (${wrongCount})`;

  document.querySelectorAll(".review-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderReviewList(filter);
  showScreen("review-screen");
}

function filterReview(filter, btn) {
  currentReviewFilter = filter;
  document.querySelectorAll(".review-filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderReviewList(filter);
}

function renderReviewList(filter) {
  const container = document.getElementById("reviewList");
  if (!container) return;
  container.innerHTML = "";

  const prefixes = ["A", "B", "C", "D"];

  activeQuiz.questions.forEach((q, idx) => {
    const userAns = activeQuiz.userAnswers[idx];
    const isCorrect = userAns === q.a;

    if (filter === "correct" && !isCorrect) return;
    if (filter === "wrong" && isCorrect) return;

    const card = document.createElement("div");
    card.className = `review-item-card ${isCorrect ? "is-correct" : "is-wrong"}`;

    const userAnsText = userAns !== null && userAns !== undefined ? q.o[userAns] : "Not answered";
    const correctAnsText = q.o[q.a];

    // Build options list
    let optionsHtml = "";
    q.o.forEach((optText, optIdx) => {
      let rowClass = "review-option-row";
      let badgeHtml = "";

      if (optIdx === q.a) {
        rowClass += " is-correct-answer";
        badgeHtml = `<span class="review-badge-pill badge-correct-ans">Correct Answer ✅</span>`;
      } else if (optIdx === userAns && !isCorrect) {
        rowClass += " user-wrong";
        badgeHtml = `<span class="review-badge-pill badge-your-ans">Your Answer ❌</span>`;
      }

      optionsHtml += `
        <div class="${rowClass}">
          <span><strong>${prefixes[optIdx]}.</strong> ${optText}</span>
          ${badgeHtml}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-item-header">
        <span class="review-q-num">Question ${idx + 1} of ${activeQuiz.questions.length}</span>
        <span class="review-status-tag ${isCorrect ? "status-tag-correct" : "status-tag-wrong"}">
          ${isCorrect ? "✅ Correct" : "❌ Wrong"}
        </span>
      </div>

      <h4 class="review-question-text">${q.q}</h4>

      <div class="review-options-grid">
        ${optionsHtml}
      </div>

      <div class="review-answers-comparison">
        <div class="answer-line">
          <span class="answer-line-label">Your Answer:</span>
          <span><strong>${userAnsText}</strong> ${isCorrect ? "✅" : "❌"}</span>
        </div>
        <div class="answer-line">
          <span class="answer-line-label">Correct Answer:</span>
          <span style="color: var(--success); font-weight:700;">${correctAnsText} ✅</span>
        </div>
      </div>

      ${q.explanation ? `
        <div class="review-explanation">
          💡 <b>Explanation:</b> ${q.explanation}
        </div>
      ` : ""}
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// RETRY & GLOBAL NAVIGATION
// ==========================================================================
function retryQuiz() {
  startQuiz();
}

function goToTopics() {
  renderTopics();
  showScreen("topics-screen");
}

function goHome() {
  renderLanguages();
  showScreen("home-screen");
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Search inputs
  const langSearch = document.getElementById("langSearchInput");
  if (langSearch) {
    langSearch.addEventListener("input", (e) => {
      const activeFilter = document.querySelector(".filter-pill.active")?.getAttribute("data-category") || "all";
      renderLanguages(activeFilter, e.target.value);
    });
  }

  const topicSearch = document.getElementById("topicSearchInput");
  if (topicSearch) {
    topicSearch.addEventListener("input", (e) => {
      renderTopics(e.target.value);
    });
  }

  // Keyboard shortcut navigation (A, B, C, D to pick, Enter for next)
  document.addEventListener("keydown", (e) => {
    const quizScreen = document.getElementById("quiz-screen");
    if (!quizScreen || !quizScreen.classList.contains("active")) return;

    const key = e.key.toUpperCase();
    if (key === "A") selectOption(0);
    else if (key === "B") selectOption(1);
    else if (key === "C") selectOption(2);
    else if (key === "D") selectOption(3);
    else if (e.key === "Enter") nextQuestion();
  });

  // Initial render
  renderLanguages();
  showScreen("home-screen");
});
