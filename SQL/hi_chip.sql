-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2019 年 6 月 14 日 14:53
-- サーバのバージョン： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hi_chip`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
`company_id` int(12) NOT NULL,
  `organization_id` int(12) NOT NULL,
  `company_name` text COLLATE utf8_unicode_ci NOT NULL,
  `plan` int(12) NOT NULL,
  `company_created_at` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `companies`
--

INSERT INTO `companies` (`company_id`, `organization_id`, `company_name`, `plan`, `company_created_at`) VALUES
(1, 1, 'ジーズアカデミー', 1, '2019-06-14 00:00:00');

-- --------------------------------------------------------

--
-- テーブルの構造 `gs_an_table`
--

CREATE TABLE IF NOT EXISTS `gs_an_table` (
`id` int(12) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `naiyou` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `indate` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `gs_an_table`
--

INSERT INTO `gs_an_table` (`id`, `name`, `email`, `naiyou`, `indate`) VALUES
(1, 'a', 'a', 'a/Screen Shot 2019-05-26 at 19.04.24.png', '2019-06-01');

-- --------------------------------------------------------

--
-- テーブルの構造 `gs_bm_table`
--

CREATE TABLE IF NOT EXISTS `gs_bm_table` (
`ID` int(12) NOT NULL,
  `TUNE_NAME` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `ARTIST_NAME` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `TUNE_URL` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `COMMENT` text COLLATE utf8_unicode_ci NOT NULL,
  `INPUT_USER` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `INPUT_DATETIME` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `gs_bm_table`
--

INSERT INTO `gs_bm_table` (`ID`, `TUNE_NAME`, `ARTIST_NAME`, `TUNE_URL`, `COMMENT`, `INPUT_USER`, `INPUT_DATETIME`) VALUES
(1, '白い奇蹟', '聖飢魔II', 'https://music.apple.com/jp/album/%E7%99%BD%E3%81%84%E5%A5%87%E8%B9%9F/1032323964?i=1032323984&uo=4', 'さいこう！', 'でえもん', '2019-05-29 00:51:45'),
(2, '栄光の架橋', 'ゆず', 'https://music.apple.com/jp/album/%E6%A0%84%E5%85%89%E3%81%AE%E6%9E%B6%E6%A9%8B/424185594?i=424185595&uo=4', 'いくつもの日々をこえてーー', 'ずゆ', '2019-05-29 22:35:44'),
(3, 'aa', 'aaa', 'aaaa', 'aaa', 'aaaa', '2019-06-01 05:00:55');

-- --------------------------------------------------------

--
-- テーブルの構造 `gs_user_table`
--

CREATE TABLE IF NOT EXISTS `gs_user_table` (
`user_id` int(12) NOT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `lpw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(12) NOT NULL,
  `kanri_flg` int(12) NOT NULL,
  `point` int(12) NOT NULL,
  `indate` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `gs_user_table`
--

INSERT INTO `gs_user_table` (`user_id`, `name`, `email`, `lpw`, `age`, `kanri_flg`, `point`, `indate`) VALUES
(1, '木村', 'hogehoge@gmail.com', 'hogehoge', 0, 1, 1109, '0000-00-00'),
(2, '山本', 'hogehoge@gmail.com', 'hogehoge', 0, 1, 401, '0000-00-00'),
(3, '田中', 'hogehoge@gmail.com', 'hogehoge', 0, 1, 500, '0000-00-00'),
(4, '鈴木', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 521, '0000-00-00'),
(5, '佐藤亮太', 'hogehoge@gmail.com', 'hoge1', 0, 0, 455, '0000-00-00'),
(6, '堀 志保', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(7, '宮地 由真', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 411, '0000-00-00'),
(8, '千野 敏幸', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 403, '0000-00-00'),
(9, '土岐 奈保子', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(10, '塩田 千夏', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(11, '青木 講一', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(12, '明石 昌之', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(13, '関本 吉之助', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(14, '藤巻 久美子', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(15, '小路 武司', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(16, '塩野 梨沙', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(17, '門脇 俊光', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(18, '大坪 晴', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(19, '石島 美貴', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(20, '土谷 栄美', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(21, '大藤 亘', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(22, '長江 良治', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(23, '柳谷 信也', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(24, '池上 彰三', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(25, '野沢 菜帆', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(26, '桜井 康夫', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(27, '前田 由貴', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(28, '二村 徳太郎', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(29, '香月 勝也', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(30, '門脇 猛', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(31, '磯村 浩次', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(32, '柳澤 松雄', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(33, '陶山 七郎', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(34, '千原 彰英', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(35, '沢口 正元', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(36, '品川 義行', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(37, '鹿島 悠里', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(38, '若狭 和子', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(39, '守屋 里咲', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(40, '迫 英之', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(41, '坂元 金作', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(42, '東谷 棟上', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(43, '曽我 凛華', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 500, '0000-00-00'),
(44, '中村 時男', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(45, '吉川 竹志', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(46, '河村 博嗣', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(47, '上山 宗一', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(48, '仁平 豊吉', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(49, '川元 進一', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 520, '0000-00-00'),
(50, '浅見 亀次郎', 'hogehoge@gmail.com', 'hogehoge', 0, 0, 400, '0000-00-00'),
(53, '佐藤 健', 'info@call.jp', '$2y$10$gVN9l6IwBrupv8b8Lsq4E.KDD/Zx71GcdiVaxWp77YzHPCePl/qOK', 0, 0, 268, '2019-06-09'),
(54, '山下智久', 'fuga@call.jp', '$2y$10$FkHevqrhsy1uzhjpVVZt3uGajjzEXNxDI91u3egLi7MxjkaRSq/WS', 0, 0, 780, '2019-06-09'),
(55, '三浦春馬', 'thk.rspt.csd@gmail.com', '$2y$10$kXPu8Em6eqm/hMU000U09./pUCZuEtTpRK8dgIfufn8ysSo/RWZnu', 0, 0, 410, '2019-06-09'),
(56, '小栗旬', 'hogehoge@hoge', '$2y$10$y9TbTeYLZq57aKWIfEEU5OQ7vpMd3pBPgRuJaI2s7JM34wPwhSP86', 0, 0, 383, '2019-06-13');

-- --------------------------------------------------------

--
-- テーブルの構造 `likes`
--

CREATE TABLE IF NOT EXISTS `likes` (
  `praise_id` int(11) NOT NULL,
  `user_id` int(12) NOT NULL,
  `delete_flg` int(12) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `update_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `likes`
--

INSERT INTO `likes` (`praise_id`, `user_id`, `delete_flg`, `created_at`, `update_date`) VALUES
(36, 54, 0, '2019-06-09 12:31:19.000000', '2019-06-09 10:31:19.757277'),
(37, 54, 0, '2019-06-09 12:31:32.000000', '2019-06-09 10:31:32.112218'),
(38, 54, 0, '2019-06-09 12:31:33.000000', '2019-06-09 10:31:33.184318'),
(39, 54, 0, '2019-06-09 12:31:34.000000', '2019-06-09 10:31:34.300095'),
(40, 53, 0, '2019-06-09 12:40:17.000000', '2019-06-09 10:40:17.225727'),
(36, 53, 0, '2019-06-09 12:47:20.000000', '2019-06-09 10:47:20.959749'),
(38, 53, 0, '2019-06-09 12:47:26.000000', '2019-06-09 10:47:26.940244'),
(39, 53, 0, '2019-06-09 12:47:28.000000', '2019-06-09 10:47:28.778001'),
(37, 53, 0, '2019-06-09 13:02:40.000000', '2019-06-09 11:02:40.362796'),
(36, 55, 0, '2019-06-09 13:03:33.000000', '2019-06-09 11:03:33.467945'),
(37, 55, 0, '2019-06-09 13:03:34.000000', '2019-06-09 11:03:34.418013'),
(38, 55, 0, '2019-06-09 13:03:35.000000', '2019-06-09 11:03:35.317423'),
(39, 55, 0, '2019-06-09 13:03:37.000000', '2019-06-09 11:03:37.173005');

-- --------------------------------------------------------

--
-- テーブルの構造 `praises`
--

CREATE TABLE IF NOT EXISTS `praises` (
`praise_id` int(12) NOT NULL,
  `praise_content` text COLLATE utf8_unicode_ci NOT NULL,
  `sent_point` int(12) NOT NULL,
  `praiser_id` int(12) NOT NULL,
  `praisee_id` int(12) NOT NULL,
  `praise_created_at` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `praises`
--

INSERT INTO `praises` (`praise_id`, `praise_content`, `sent_point`, `praiser_id`, `praisee_id`, `praise_created_at`) VALUES
(53, 'すごい', 0, 56, 1, '2019-06-14 00:51:05'),
(54, 'すごい', 0, 53, 56, '2019-06-14 00:52:12'),
(55, 'すごい', 0, 53, 56, '2019-06-14 00:52:57'),
(56, 'すごい', 0, 53, 8, '2019-06-14 18:38:45'),
(57, 'すごい', 0, 53, 7, '2019-06-14 18:47:09'),
(58, 'すごい', 0, 53, 4, '2019-06-14 18:50:25'),
(59, 'すごい!', 0, 53, 56, '2019-06-14 19:42:16'),
(60, 'すごい', 1, 53, 4, '2019-06-14 19:44:34'),
(61, 'すごい', 1, 53, 4, '2019-06-14 19:45:21'),
(62, 'いつもありがとうございます！！', 10, 53, 7, '2019-06-14 19:53:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
 ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `gs_an_table`
--
ALTER TABLE `gs_an_table`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gs_bm_table`
--
ALTER TABLE `gs_bm_table`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `gs_user_table`
--
ALTER TABLE `gs_user_table`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `praises`
--
ALTER TABLE `praises`
 ADD PRIMARY KEY (`praise_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
MODIFY `company_id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `gs_an_table`
--
ALTER TABLE `gs_an_table`
MODIFY `id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `gs_bm_table`
--
ALTER TABLE `gs_bm_table`
MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `gs_user_table`
--
ALTER TABLE `gs_user_table`
MODIFY `user_id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT for table `praises`
--
ALTER TABLE `praises`
MODIFY `praise_id` int(12) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
