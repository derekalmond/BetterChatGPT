rm  -rf dist/*
rm -rf ../zeus/public/zeusai/*
npm run build
cp -r dist/* ../zeus/public/zeusai/
mv ../zeus/public/zeusai/index.js ../zeus/public/zeusai/zeusai.js
mv ../zeus/public/zeusai/assets/index-4e183de9.css ../zeus/public/zeusai/zeusai.css


