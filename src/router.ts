import fs from 'fs';
import path from 'path';

interface Route {
  path: string;
  component: string;
}

export function generateRoutes(srcDir: string): Route[] {
  const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.md'));

  return files.map(file => {
    const name = path.basename(file, '.md');
    return {
      path: `/${name}`,  // 生成 `/file-name` 路径
      component: path.join(srcDir, file),
    };
  });
}
