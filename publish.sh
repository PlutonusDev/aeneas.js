rm -rf build
npx tsc -b ./src/
cp ./README.md ./build/
cp ./package.json ./build/
cd build
npm publish
