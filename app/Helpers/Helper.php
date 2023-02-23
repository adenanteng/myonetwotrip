<?php

namespace App\Helpers;

use App\Models\Page;

class Helper
{
    public static function sectionOrder($page)
    {
        $page = Page::whereId($page)->withCount(
            'cta',
            'people',
            'feature',
            'featureLottie',
            'quotes',
            'faq',
            'trip',
            'blog',
            'contact',
        )->first();

        return
            $page->cta_count +
            $page->people_count +
            $page->feature_count +
            $page->feature_lottie_count +
            $page->quotes_count +
            $page->faq_count +
            $page->trip_count +
            $page->blog_count +
            $page->contact_count + 1;
    }

}
