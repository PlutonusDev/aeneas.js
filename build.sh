rm -rf build
npx tsc -b ./src/
cp ./package.json ./build/
cd build
