module.exports = {
    meta: {
        type: 'problem',

        docs: {
            description: 'depracate use of moment in favor of moment-timezone',
            category: 'Possible Errors',
            recommended: true,
        },
        schema: [], // no options
    },
    create: function(context) {
        function checkDefault(specifierType, node) {
            if (node.source.value === 'moment') {
                context.report({
                    node: node,
                    message: 'You will not import moment. Use moment-timezone to avoid misfortune.',
                });
            }
        }
        return {
            ImportDeclaration: checkDefault.bind(null, 'ImportDefaultSpecifier'),
        };
    },
};
