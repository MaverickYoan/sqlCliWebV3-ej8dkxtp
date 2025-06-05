import { SQLCommand, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'database-creation',
    name: 'Database Creation',
    description: 'Commands for creating and setting up databases',
    icon: 'Database',
  },
  {
    id: 'table-creation',
    name: 'Table Creation',
    description: 'Commands for creating and defining tables',
    icon: 'Table',
  },
  {
    id: 'privileges',
    name: 'Privileges',
    description: 'Commands for managing user privileges',
    icon: 'Shield',
  },
  {
    id: 'table-structure',
    name: 'Table Structure',
    description: 'Commands for table structure and organization',
    icon: 'LayoutGrid',
  },
];

export const sqlCommands: SQLCommand[] = [
  {
    id: 'create-database',
    title: 'Create phpMyAdmin Database',
    description: 'Creates the phpMyAdmin database if it does not exist, sets the character set and collation, and selects the database for use.',
    code: `CREATE DATABASE IF NOT EXISTS \`phpmyadmin\`
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE phpmyadmin;`,
    category: 'database-creation',
  },
  {
    id: 'grant-privileges',
    title: 'Grant Privileges',
    description: 'Grant necessary privileges to the phpMyAdmin control user. This statement is commented by default and needs to be activated if necessary.',
    code: `-- (activate this statement if necessary)
-- GRANT SELECT, INSERT, DELETE, UPDATE, ALTER ON \`phpmyadmin\`.* TO
--    'pma'@localhost;`,
    category: 'privileges',
  },
  {
    id: 'create-bookmark-table',
    title: 'Create Bookmark Table',
    description: 'Creates the pma__bookmark table for storing saved SQL queries.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__bookmark\` (
  \`id\` int(10) unsigned NOT NULL auto_increment,
  \`dbase\` varchar(255) NOT NULL default '',
  \`user\` varchar(255) NOT NULL default '',
  \`label\` varchar(255) COLLATE utf8_general_ci NOT NULL default '',
  \`query\` text NOT NULL,
  PRIMARY KEY  (\`id\`)
)
  COMMENT='Bookmarks'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-column-info-table',
    title: 'Create Column Info Table',
    description: 'Creates the pma__column_info table to store column-specific information.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__column_info\` (
  \`id\` int(5) unsigned NOT NULL auto_increment,
  \`db_name\` varchar(64) NOT NULL default '',
  \`table_name\` varchar(64) NOT NULL default '',
  \`column_name\` varchar(64) NOT NULL default '',
  \`comment\` varchar(255) COLLATE utf8_general_ci NOT NULL default '',
  \`mimetype\` varchar(255) COLLATE utf8_general_ci NOT NULL default '',
  \`transformation\` varchar(255) NOT NULL default '',
  \`transformation_options\` varchar(255) NOT NULL default '',
  \`input_transformation\` varchar(255) NOT NULL default '',
  \`input_transformation_options\` varchar(255) NOT NULL default '',
  PRIMARY KEY  (\`id\`),
  UNIQUE KEY \`db_name\` (\`db_name\`,\`table_name\`,\`column_name\`)
)
  COMMENT='Column information for phpMyAdmin'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-history-table',
    title: 'Create History Table',
    description: 'Creates the pma__history table for storing SQL query history.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__history\` (
  \`id\` bigint(20) unsigned NOT NULL auto_increment,
  \`username\` varchar(64) NOT NULL default '',
  \`db\` varchar(64) NOT NULL default '',
  \`table\` varchar(64) NOT NULL default '',
  \`timevalue\` timestamp NOT NULL default CURRENT_TIMESTAMP,
  \`sqlquery\` text NOT NULL,
  PRIMARY KEY  (\`id\`),
  KEY \`username\` (\`username\`,\`db\`,\`table\`,\`timevalue\`)
)
  COMMENT='SQL history for phpMyAdmin'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-pdf-pages-table',
    title: 'Create PDF Pages Table',
    description: 'Creates the pma__pdf_pages table for storing PDF export settings.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__pdf_pages\` (
  \`db_name\` varchar(64) NOT NULL default '',
  \`page_nr\` int(10) unsigned NOT NULL auto_increment,
  \`page_descr\` varchar(50) COLLATE utf8_general_ci NOT NULL default '',
  PRIMARY KEY  (\`page_nr\`),
  KEY \`db_name\` (\`db_name\`)
)
  COMMENT='PDF relation pages for phpMyAdmin'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-recent-table',
    title: 'Create Recent Tables',
    description: 'Creates the pma__recent table for storing recently accessed tables.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__recent\` (
  \`username\` varchar(64) NOT NULL,
  \`tables\` text NOT NULL,
  PRIMARY KEY (\`username\`)
)
  COMMENT='Recently accessed tables'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-favorite-table',
    title: 'Create Favorite Table',
    description: 'Creates the pma__favorite table for storing favorite tables.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__favorite\` (
  \`username\` varchar(64) NOT NULL,
  \`tables\` text NOT NULL,
  PRIMARY KEY (\`username\`)
)
  COMMENT='Favorite tables'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-creation',
  },
  {
    id: 'create-ui-prefs-table',
    title: 'Create UI Preferences Table',
    description: 'Creates the pma__table_uiprefs table for storing user interface preferences for tables.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__table_uiprefs\` (
  \`username\` varchar(64) NOT NULL,
  \`db_name\` varchar(64) NOT NULL,
  \`table_name\` varchar(64) NOT NULL,
  \`prefs\` text NOT NULL,
  \`last_update\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (\`username\`,\`db_name\`,\`table_name\`)
)
  COMMENT='Tables'' UI preferences'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-structure',
  },
  {
    id: 'create-relation-table',
    title: 'Create Relation Table',
    description: 'Creates the pma__relation table for storing relationships between tables.',
    code: `CREATE TABLE IF NOT EXISTS \`pma__relation\` (
  \`master_db\` varchar(64) NOT NULL default '',
  \`master_table\` varchar(64) NOT NULL default '',
  \`master_field\` varchar(64) NOT NULL default '',
  \`foreign_db\` varchar(64) NOT NULL default '',
  \`foreign_table\` varchar(64) NOT NULL default '',
  \`foreign_field\` varchar(64) NOT NULL default '',
  PRIMARY KEY  (\`master_db\`,\`master_table\`,\`master_field\`),
  KEY \`foreign_field\` (\`foreign_db\`,\`foreign_table\`)
)
  COMMENT='Relation table'
  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;`,
    category: 'table-structure',
  }
];