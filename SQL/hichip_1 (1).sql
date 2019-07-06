-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- ホスト: mysql1021.db.sakura.ne.jp
-- 生成日時: 2019 年 7 月 06 日 18:14
-- サーバのバージョン： 5.7.25-log
-- PHP のバージョン: 7.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `hichip_1`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `companies`
--

CREATE TABLE `companies` (
  `company_id` int(12) NOT NULL,
  `organization_id` int(12) NOT NULL,
  `company_name` text COLLATE utf8_unicode_ci NOT NULL,
  `plan` int(12) NOT NULL,
  `company_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `companies`
--


--
-- テーブルの構造 `gs_user_table`
--

CREATE TABLE `gs_user_table` (
  `user_id` int(12) NOT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `lpw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kanri_flg` int(12) NOT NULL,
  `current_available_point` int(12) NOT NULL,
  `total_point_this_month` int(13) NOT NULL,
  `total_point_since_register` int(13) NOT NULL,
  `indate` date NOT NULL,
  `profile_image` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `gs_user_table`
--


-- --------------------------------------------------------

--
-- テーブルの構造 `likes`
--

CREATE TABLE `likes` (
  `praise_id` int(11) NOT NULL,
  `liker_user_id` int(12) NOT NULL,
  `delete_flg` int(12) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `update_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `likes`
--



-- --------------------------------------------------------

--
-- テーブルの構造 `praises`
--

CREATE TABLE `praises` (
  `praise_id` int(12) NOT NULL,
  `praise_content` text COLLATE utf8_unicode_ci NOT NULL,
  `sent_point` int(12) NOT NULL,
  `praiser_id` int(12) NOT NULL,
  `praisee_id` int(12) NOT NULL,
  `praise_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- テーブルのデータのダンプ `praises`
--

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

--
-- テーブルのインデックス `gs_user_table`
--
ALTER TABLE `gs_user_table`
  ADD PRIMARY KEY (`user_id`);

--
-- テーブルのインデックス `praises`
--
ALTER TABLE `praises`
  ADD PRIMARY KEY (`praise_id`);

--
-- ダンプしたテーブルのAUTO_INCREMENT
--

--
-- テーブルのAUTO_INCREMENT `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルのAUTO_INCREMENT `gs_user_table`
--
ALTER TABLE `gs_user_table`
  MODIFY `user_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- テーブルのAUTO_INCREMENT `praises`
--
ALTER TABLE `praises`
  MODIFY `praise_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
