<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'odvezieme');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'K!lW]D[jl`C1slug-gPavKc1[j cBR5FJsm2MP+MW3Hz1>|Y%:x;m^87BMEZc9iM');
define('SECURE_AUTH_KEY',  'V2l+?sk/o-p8sXmf|RZgF~u|DLY~)j`,Jq^XzMI=:14j92yNSW=2s)F pw;Eep|a');
define('LOGGED_IN_KEY',    'Ziosb6?KObFunHl]%J^-RrXx v[R/(~$cT+7%il3c>&Tsh#)PBODR,$u44cU}8O%');
define('NONCE_KEY',        'w}[?5CU._.X&Vw.d`F^U,>~`c0o=wBoXu%:!9N?S>UX&J3[Qk0)Hn6G-@q^4+}~_');
define('AUTH_SALT',        'A<&F,MUAGlB~aw213{UhK!6cg[lu )&o[,2!Pp+fY3<:+#T~?s32?WIO{9nD#1sF');
define('SECURE_AUTH_SALT', '8JQlF8GNp@jg)N0Ey98Z`bdlSrr0gmnn:v5fNJyjf:4@fmUyvL_xeJ,jR^oNO$0!');
define('LOGGED_IN_SALT',   'ZGpt#O&[bm;6~!JOQ7XRZ&.V=Pice/A0yrd3oN)&#HY*X<~i`8ptu=uqFES4kyg=');
define('NONCE_SALT',       'r)&6<`>`j+.x,_8]hi$D28qPkItRHItwuP~1ASzxmRmc&EOToiNDarm{ApVI7&F-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
