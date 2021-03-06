module.exports = ($) => {
    'use strict'

    $.gulp.task('webserver', () => {
        const connect = require('connect-livereload')
        const express = require('express')
        const open = require('open')
        const request = require('request')

        const app = express()

        const PORT = $.config.port
        const PORT_RELOAD = 35729

        // ROUTES
        app
        .use(connect({port: PORT_RELOAD}))
        .use(express.static($.build.dir))
        .use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../../${$.build.dir}`)))
        .use('/api', (req, res) =>
            req
            .pipe(request(`http://api${req.path}`))
            .pipe(res)
        )
        .listen(PORT, () => console.log('Listening on port %d', PORT))

        // LIVERELOAD
        $.tinylr.listen(PORT_RELOAD, () => console.log('Listening on port %d', PORT_RELOAD))

        // LAUNCH
        if ($.config.open !== false) {
            open(`http://localhost:${PORT}`)
        }
    })
}