module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        //  indent: 0,
        // 'no-console': 2,
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // // //
        // semi: 'off',
        // // "quotes": "warn",
        // // "space-before-function-paren": 0,
        // quotes: [1, 'single'], // 引号类型 `` "" ''
        // 'space-before-function-paren': [0, 'always'] // 函数定义时括号前面要不要有空格

        // 禁止使用全局变量
        "no-restricted-globals": ["error", "event", "fdescribe"],
        // 禁止变量与外层作用域内的变量或参数同名
        "no-shadow": ["error"],
        // 禁止先使用后定义变量
        "no-use-before-define": ["error"],
        // 禁止 catch 中的参数与外层作用域范围内的变量或参数同名
        "no-catch-shadow": ["error"],
        // 禁止使用 delete 操作符
        "no-delete-var": ["error"],
        // 禁止定义变量后不使用
        "no-unused-vars": ["error"],
        // 缩紧 4 个空格
        "indent": 0,
        // 换行风格
        // "linebreak-style": ["error", "unix"],
        // 使用单引号
        "quotes": 0,
        // 末尾不使用分号
        "semi": 0,
        // 分号在句子末尾
        "semi-style": ["error", "last"],
        // 关闭 console 验证
        "no-console": 'off',
        // 不允许在 if for while 判断条件中出现赋值逻辑
        "no-cond-assign": ["error", "always"],
        // 不允许使用常量或字面量做逻辑表达式
        "no-constant-condition": ["error"],
        // function 中不允许重名参数
        "no-dupe-args": ["error"],
        // 不允许出现重复 case 条件
        "no-duplicate-case": ["error"],
        // 不允许出现空的代码块
        "no-empty": ["error"],
        // 不允许把全局对象当函数使用
        "no-obj-calls": ["error"],
        // 使用 === & !== 来比较值，除 typeof null 以外
        "eqeqeq": ["error", "smart"],
        // 禁用 eval 使用 JSON
        "no-eval": ["error"],
        // 禁止抛出无意义的异常
        "no-throw-literal": ["error"],
        // 禁用无意义的使用 call 和 apply
        "no-useless-call": ["error"],
        // 编写有意义的立即执行函数
        "wrap-iife": ["error"],
        // 禁止在 require 前面使用 new
        "no-new-require": ["error"],
        "brace-style": ["error", "1tbs"],
        /*
            不允许在计算属性中使用空格
            正确格式 var arr = [1,2,3]; arr[0];
            错误格式 var arr = [1,2,3]; arr[ 0];
        */
        "computed-property-spacing": ["error", "never"],
        // 小括号内不允许有空格
        "space-in-parens": ["error", "never"],
        // 三元表达式不允许换行
        "multiline-ternary": ["error", "never"],
        // 禁止连续赋值
        "no-multi-assign": ["error"],
        // 运算符前后有空格
        "space-infix-ops": ["error"],
        // 禁止重复导入模块
        "no-duplicate-imports": ["error"],
        "no-unreachable": [0],
        /*
            链式操作最多3层，多余的从业务逻辑出发，调整代码
        */
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 3
        }],
        // 花括号处理
        "object-curly-newline": ["error", {
            "ObjectExpression": {
                "consistent": true
            }, // 字母量定义允许换行
            "ObjectPattern": {
                "multiline": true,
                "minProperties": 3
            }, // 解构不允许换行 数量大于3个允许换行
            "ImportDeclaration": {
                "multiline": true,
                "minProperties": 3
            }, // 导入不允许换行 数量大于3个允许换行
            "ExportDeclaration": {
                "multiline": true,
                "minProperties": 3
            } // 导出允许换行 数量大于3个允许换行
        }]
    }
}
