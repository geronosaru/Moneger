# まるっとMoneger

<p align="center">
  <img src="./まるっとMonegerバナー.png" alt="まるっとMonegerバナー" width="80%" />
</p>

　お金に関する様々な管理をしてくれるアプリを作成したい。そのような思いから生まれたまるっとMonegerは、「Money」と「Manager」を掛け合わして出来たアプリ名です。
　ただ支出記録をするだけではなく、いつまでにこれくらいお金を貯めたい、そうであれば毎月どのくらい貯金をすべきであるのか、そして実際に自由に使うことが出来るお金はどのくらいあるのかが一目でわかる、そんな貯金×貯金目標管理が出来るアプリとなっています。


## 本アプリの作成背景
　現在、私は家計簿アプリと貯金アプリの二つを使用しています。家計簿アプリで普段の収支を記録しつつ、収入が入ったときに、貯金アプリに記録を付けています。
　現在このように運用していて不便に感じることがあります。それは、実際に私が自由に使うことが出来る金額を知るのに、手間がかかるということです。家計簿アプリで「収入ー支出」を計算した上で、その後貯金アプリで「家計簿アプリで算出された金額ー毎月の貯金額」を計算しなおさなければ、今月私が自由に使うことが出来る金額を知ることが出来ないのです。このような手間を面倒に感じ、家計簿アプリと貯金アプリを一つに纏めたアプリを自作しようと考えました。


## まるっとMonegerのドキュメント
以下URLから閲覧可能です。
| ドキュメント名                         | 説明                                       | リンク |
|--------------------------------------|------------------------------------------|--------|
| requirements-definition.html         | 要件定義                                   | [🔗開く](https://geronosaru.github.io/Moneger/requirements-definition.html) |
| api-definition-document.html         | REST APIのエンドポイント定義               | [🔗開く](https://geronosaru.github.io/Moneger/api-definition-document.html) |
| screen-definition-document.html      | 画面構成と構成方針                         | [🔗開く](https://geronosaru.github.io/Moneger/screen-definition-document.html) |
| database-definition-document.html    | DB定義書                                   | [🔗開く](https://geronosaru.github.io/Moneger/database-definition-document.html) |
| user-story-map.html                  | ユーザーストーリーマップ                   | [🔗開く](https://geronosaru.github.io/Moneger/user-story-map.html) |
| infrastructure-configuration-design-document.html | インフラ構成設計書         | [🔗開く](https://geronosaru.github.io/Moneger/infrastructure-configuration-design-document.html) |


## 使用言語・技術
- フロントエンド：TypeScript（React）
    - 使用ライブラリ：
    
    | 分類 | ライブラリ名 |
    | --- | --- |
    | ルーティング | react-router-dom |
    | スタイリング | tailwindcss |
    | 状態管理 | redux, @reduxjs/toolkit, react-redux |
    | フォーム制御 | react-hook-form |
    | バリデーション | zod |
    | HTTP通信 | axios |
    | 日付処理 | dayjs |
    | UIコンポーネント | shadcn/ui, radix-ui, react-dialog等 |
- バックエンド：PHP（Laravel 10）


## 使用しているライブラリ・アセット
- [Flowbite Icons](https://flowbite.com/icons/)  
  Licensed under [MIT License](https://github.com/themesberg/flowbite-icons/blob/main/LICENSE).

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"/>
</p>
