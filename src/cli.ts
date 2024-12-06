import { program } from 'commander';
import { devServer } from './dev';
import { buildProject } from './build';

program
  .command('dev')
  .description('Start the development server')
  .action(devServer);

program
  .command('build')
  .description('Build the static site')
  .action(buildProject);

program.parse(process.argv);
