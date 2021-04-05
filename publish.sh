
rm -rf build

yarn build

cd build

git init
git add .
git commit -m "publish"
git branch -M main
git remote add origin git@github.com:yourenyao/yourenyao.github.io.git
git push -f origin main

cd ..

echo "done"

