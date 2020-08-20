
from django.http import HttpResponse
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from django.urls import reverse_lazy

#using template
from django.template import loader
from .models import Album, Song
#now we will use shortcut to acess template
from django.shortcuts import render,get_object_or_404
#raising 404 error
from django.http import Http404
from django.views import generic
#now instead of using these function we will use generic views

class IndexView(generic.ListView):
    context_object_name='all_albums'
    template_name='music/index.html'
    def get_queryset(self):
        return Album.objects.all()

class DetailView(generic.DetailView):
    model=Album
    template_name='music/detail.html'

    

class AlbumCreate(CreateView):
    model=Album
    fields=['artist','album_title','genre','album_logo']

class AlbumUpdate(UpdateView):
    model=Album
    fields=['artist','album_title','genre','album_logo']

class AlbumDelete(DeleteView):
    model=Album
     
    sucess_url=reverse_lazy('music:index')
    fields=['artist','album_title','genre','album_logo']




# def index(request):
#     all_albums=Album.objects.all()#connecting to database
#     # template=loader.get_template('music/index.html')
#     context={
#         'all_albums':all_albums,
#     }
#    #1st approach for accesing any link and then we use template # html=''
#     # for album in all_albums:
#     #     url='/music/'+str(album.id)+'/'
#     #     html+="<a href='"+url+"'>"+album.album_title+"</a><br>"
#     # return HttpResponse(html)1st use
#     # return HttpResponse(template.render(context,request))
#     return render(request,'music/index.html',context)#3rd use 
# # Create your views here.







# def detail(request,album_id):
#     # return HttpResponse('Details for :'+str(album_id))
#     # try:
#     #     album=Album.objects.get(pk=album_id)
#     # except Album.DoesNotExist:
#     #     raise Http404('Album not exist')
#     album=get_object_or_404(Album,pk=album_id)
#     # template1=loader.get_template('music/detail.html')
#     return render(request,'music/detail.html',{'album':album})#HttpResponse(template1.render({'album':album},request))



# def favorite(request,album_id):
#     album=get_object_or_404(Album,pk=album_id)
#     try:
#         selected_song=album.song_set.get(pk=request.POST['song'])
#     except(KeyError, Song.DoesNotExist):
#         return render(request,'music/detail.html',{
#             'album':album,
#             'error_message':'select valid'
#         })
#     else:
#         selected_song.is_favorite=True
#         selected_song.save()
#         return render(request,'music/detail.html',{'album':album})#3rd use 

