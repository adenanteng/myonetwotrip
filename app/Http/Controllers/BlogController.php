<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Page;
use App\Models\PageFaqDetail;
use App\Models\PageHero;
use App\Models\PagePeopleDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
//                dd(Blog::all());
        return Inertia::render('Blog/Index', [
            'blog' => Blog::all(),
            'category' => BlogCategory::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Blog/CreateEdit', [
            'selectCategory' => BlogCategory::all()->pluck('name', 'id')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        Validator::make($request->toArray(), [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('storeInformation');

        $request['user_id'] = auth()->user()->id;
        $request['status'] = true;
        $request['slug'] = Str::slug($request['name'], '-');

        return Redirect::route('blog.edit', [
            'blog' => Blog::create($request->all())
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Blog $blog
     * @return Response
     */
    public function show(Blog $blog)
    {
        return Inertia::render('Blog/Show', [
            'blog' => $blog
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Blog $blog
     * @return Response
     */
    public function edit(Blog $blog)
    {

//        dd($blog);
        return Inertia::render('Blog/CreateEdit',
            [
                'blog' => $blog,
                'selectCategory' => BlogCategory::all()->pluck('name', 'id')
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Blog $blog
     * @return \Illuminate\Http\Response
     * @throws ValidationException
     */
    public function update(Request $request, Blog $blog)
    {
//        dd($request->all());
//        Validator::make($request->toArray(), [
//            'name' => ['required', 'string', 'max:255'],
//        ])->validateWithBag('updateBlogInformation');

        $blog->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Blog $blog
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {
        $blog = Blog::find($request['id']);
        $blog->delete();

        return Redirect::route('blog.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addHero(Request $request): void
    {
        Validator::make($request->toArray(), [
            'photo' => ['required'],
        ])->validateWithBag('storeHero');

        $blogHero = Blog::find($request['id']);
        $blogHero->addMedia($request['photo'])->toMediaCollection();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $blogHero
     * @return void
     */
    public function deleteHero($blogHero, $id): void
    {
//        dd($blogHero, $id);
        $media = Media::find($id);
//        dd($media);
        $model = Blog::find($media->model_id);
        $model->deleteMedia($media->id);

//        $hero = Blog::find($blogHero);
//        $hero->media[$id]->delete();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return void
     */
    public function addCategory(Request $request): void
    {
        $category = BlogCategory::create($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function editCategory(Request $request)
    {
//        dd($request->toArray());
        $request['created_at'] = null;
        $request['updated_at'] = null;
        $blogCategory = BlogCategory::whereId($request['id'])->update($request->all());
    }

    /**;
     * Remove the specified resource from storage.
     *
     * @param $blogCategory
     * @return void
     */
    public function deleteCategory($blogCategory): void
    {
//        dd($blogCategory);
        $pageFaqDetail = BlogCategory::find($blogCategory);
        $pageFaqDetail->delete();
    }
}
