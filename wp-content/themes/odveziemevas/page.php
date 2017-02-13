<?php include_once 'partials/header.php'; ?>

    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post() ?>

                    <div class="row">
                        <?php the_content() ?>
                    </div>

        <?php endwhile ?>

    <?php endif ?>

<?php include_once 'partials/footer.php'; ?>